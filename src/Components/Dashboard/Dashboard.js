import React, { useState, useEffect } from "react";
import axios from "axios";
import VisitorAdminRowTable from "../../Views/Visitors/Admin/VisitorAdminRowTable";
import { useNavigate } from "react-router";
import "./style.css";
import Alert from "../Alert";
import Modal from "../Modal";

const Dashboard = () => {
  let navigate = useNavigate();
  const [getVisitorsAdmin, setGetVisitorsAdmin] = useState([]);
  const [nextVistiorChecked, setNextVisitorChecked] = useState(false);
  const [nextVisitor, setNextVistor] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const URL_GET_VISITORS_ADMIN =
    "http://localhost/casetas/src/Api/visitor_admin.php";
  const URL_GET_NEXT_VISITOR =
    "http://localhost/casetas/src/Api/next_visitor_admin.php";
  const OPTIONS = {
    method: "GET",
    mode: "no-cors",
    header: {
      "Content-Type":
        "application/x-www-form-urlencoded; charset=UTF-8;application/json",
    },
  };

  useEffect(() => {
    axios
      .get(URL_GET_VISITORS_ADMIN, OPTIONS)
      .then((response) => {
        setGetVisitorsAdmin(response.data.visitante);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  const navigateTo = () => {
    navigate("/add-visitor");
  };

  const HandleNextVisitor = () => {
    setNextVisitorChecked(!nextVistiorChecked);

    axios
      .get(URL_GET_NEXT_VISITOR, OPTIONS)
      .then((response) => {
        setNextVistor(response.data.visitante);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="d-flex justify-content-end">
          <button
            className="btn mb-3 btn-success pull-right"
            onClick={navigateTo}
          >
            Agregar Visita
          </button>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="card-counter success">
              <i className="fa fa-calendar-check"></i>
              <span className="count-numbers">
                {getVisitorsAdmin.length <= 0 ? "0" : getVisitorsAdmin.length}
              </span>
              <span className="count-name">Visitas del día</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-counter danger">
              <i className="fa fa-calendar-times"></i>
              <span className="count-numbers">0</span>
              <span className="count-name">Visita Cancelada</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-counter primary">
              <i className="fa fa-user-clock"></i>
              <span className="count-numbers">
                {nextVisitor.length <= 0 && getVisitorsAdmin.length <= 0
                  ? "0"
                  : nextVisitor.length}
              </span>
              <span className="count-name">Próximas visitas</span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-counter info">
              <i className="fa fa-city"></i>
              <span className="count-numbers">06</span>
              <span className="count-name">Planta</span>
            </div>
          </div>
        </div>
      </div>
      {getVisitorsAdmin.length <= 0 ? null :  (
        <div className="mb-4 ml-3">
          <div className="row">
            <div className="col-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="visita-cancelada"
                  onClick={HandleNextVisitor}
                />
                <label className="form-check-label" htmlFor="visita-cancelada">
                  Próximas visitas
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
      {getVisitorsAdmin.length <= 0 ? (
        <Alert message="No hay visitas para el día de hoy" type="info" />
      ) : (
        <VisitorAdminRowTable
          visitors={getVisitorsAdmin}
          nextVisitor={nextVisitor}
          checked={nextVistiorChecked}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
      {openModal ? <Modal openModal={openModal} /> : null}
    </div>
  );
};

export default Dashboard;
