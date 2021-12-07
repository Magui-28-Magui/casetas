import React, { useState } from "react";
import Title from "../../Components/Title";
import { useLocation, useNavigate } from "react-router";
import moment from "moment";
import axios from "axios";
import Alert from "../../Components/Alert";

const VisitorsForm = () => {
  let visitor = useLocation();
  let navigate = useNavigate();
  let visitorSelected = visitor.state.visitante[0];
  const [, setSubmitResponse] = useState([]);
  const [showMessageAlert, setShowMessageAlert] = useState(false);
  const URL_SAVE_VISITOR = "http://localhost/casetas/src/Api/save_visit.php";

  const PARAMS = {
    planta_id: visitorSelected.id,
    nombre: visitorSelected.nombre,
    empresa: visitorSelected.empresa,
    contacto: visitorSelected.contacto,
    proposito: visitorSelected.proposito,
    fecha: visitorSelected.fecha,
  };

  const OPTIONS = {
    method: "POST",
    headers: {
      "Content-Type":
        "application/x-www-form-urlencoded; charset=UTF-8;application/json",
    },
  };

  const submit = (event) => {
    event.preventDefault();
    axios
      .post(URL_SAVE_VISITOR, PARAMS, OPTIONS)
      .then((response) => {
        setSubmitResponse(response.data);
        setShowMessageAlert(!showMessageAlert);

        const timer = setTimeout(() => {
          navigate("/");
        }, 1200);
        return () => clearTimeout(timer);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div>
      {showMessageAlert ? (
        <Alert message="Visita realizada con éxito" type="success" />
      ) : null}
      <Title title="Formulario" />
      <form className="container mt-5">
        <div className="row mb-4">
          <div className="col">
            <label htmlFor="nombre">Nombre</label>
            <input
              id="Nombre"
              type="text"
              className="form-control"
              placeholder="Nombre"
              defaultValue={visitorSelected.nombre || ""}
              disabled={true}
              name="nombre"
            />
          </div>
          <div className="col">
            <label htmlFor="empresa">Empresa</label>
            <input
              id="empresa"
              type="text"
              className="form-control"
              placeholder="Empresa"
              disabled
              defaultValue={visitorSelected.empresa || ""}
              name="empresa"
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <label htmlFor="contacto">Contacto</label>
            <input
              id="contacto"
              type="text"
              className="form-control"
              placeholder="Contacto"
              disabled
              defaultValue={visitorSelected.contacto || ""}
              name="contacto"
            />
          </div>
          <div className="col">
            <label htmlFor="proposito">Propósito</label>
            <input
              id="proposito"
              type="text"
              className="form-control"
              placeholder="Propósito"
              disabled
              defaultValue={visitorSelected.proposito || ""}
              name="proposito"
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <label htmlFor="fecha">Fecha</label>
            <input
              id="fecha"
              type="text"
              className="form-control"
              placeholder="Fecha"
              disabled
              defaultValue={
                moment(visitorSelected.fecha).format("MMMM Do YYYY") || ""
              }
              name="fecha"
            />
          </div>
          <div className="col">
            <label htmlFor="hora-entrada">Hora entrada</label>
            <input
              id="hora-entrada"
              type="datetime"
              className="form-control"
              placeholder="Hora entrada"
              disabled
              defaultValue={moment(visitorSelected.fecha).format("LT") || ""}
            />
          </div>
        </div>
        <div className="mt-5">
          <button className="btn btn-success" disabled={showMessageAlert} onClick={submit}>
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default VisitorsForm;
