import React, { useState } from "react";
import Title from "./../../../Components/Title";
import axios from "axios";
import Alert from "./../../../Components/Alert";
import { useNavigate, useLocation } from "react-router";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";
moment.locale("en");

const AddVisitorForm = () => {
  const initialState = {
    id: "",
    fecha: "",
    nombre: "",
    empresa: "",
    contacto: "",
    proposito: "",
  };
  let navigate = useNavigate();
  let visitor = useLocation();
  let visitor_admin = visitor.state;
  const [submitted, setSubmitted] = useState({});
  const [changeDate, setChangeDate] = useState([]);
  const [date] = useState(new Date());
  const [visita, setVisita] = useState(initialState);
  const [showMessageAlert, setShowMessageAlert] = useState(false);
  const userid = visitor.state === null ? "" : visitor_admin.visitante[0].id;
  const URL_EDIT_VISITOR = ` http://localhost/casetas/src/Api/update_visitor.php?id=${userid}`;
  const URL_ADD_VISITOR =
    "http://localhost/casetas/src/Api/add_visitor_admin.php";
  const OPTIONS = {
    method: "POST",
    headers: {
      "Content-Type":
        "application/x-www-form-urlencoded; charset=UTF-8;application/json",
    },
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setVisita({ ...visita, [name]: value });
  };

  const handleInputDateChange = (event) => {
    console.log(event.toDate()) // Tue Nov 24 2020 00:00:00 GMT+0400 (Gulf Standard Time)
    console.log(event.format("YYYY-MM-DD HH:mm:ss")) 
    setChangeDate({...visita, fecha: event.format("YYYY-MM-DD HH:mm:ss")}) 
  };

  const submit = (event) => {
    event.preventDefault();

    if (visitor.state === null) {
      axios
        .post(URL_ADD_VISITOR, visita, OPTIONS)
        .then((response) => {
          setSubmitted(response.data);
          setShowMessageAlert(!showMessageAlert);

          const timer = setTimeout(() => {
            navigate("/dashboard");
          }, 1200);
          return () => clearTimeout(timer);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .put(URL_EDIT_VISITOR, changeDate.fecha, OPTIONS)
        .then((response) => {
          setSubmitted(response.data);
          setShowMessageAlert(!showMessageAlert);

          const timer = setTimeout(() => {
            navigate("/dashboard");
          }, 1200);
          return () => clearTimeout(timer);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  console.log(changeDate.fecha);
  console.log(submitted)
  console.log(visita)
  console.log(changeDate)

  return (
    <div>
      {showMessageAlert ? (
        <Alert message="Visita realizada con éxito" type="success" />
      ) : null}
      <Title title="Agregar visita" />
      <form className="container mt-5">
        <div className="row mb-4">
          <div className="col">
            <label htmlFor="nombre">Nombre</label>
            <input
              id="Nombre"
              type="text"
              className="form-control"
              placeholder="Nombre"
              name="nombre"
              value={
                visitor.state === null
                  ? visita.nombre
                  : visitor_admin.visitante[0].nombre
              }
              disabled={visitor.state === null ? false : true}
              onChange={handleInputChange}
            />
          </div>
          <div className="col">
            <label htmlFor="empresa">Empresa</label>
            <input
              id="empresa"
              type="text"
              className="form-control"
              placeholder="Empresa"
              name="empresa"
              value={
                visitor.state === null
                  ? visita.empresa
                  : visitor_admin.visitante[0].empresa
              }
              disabled={visitor.state === null ? false : true}
              onChange={handleInputChange}
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
              name="contacto"
              value={
                visitor.state === null
                  ? visita.contacto
                  : visitor_admin.visitante[0].contacto
              }
              disabled={visitor.state === null ? false : true}
              onChange={handleInputChange}
            />
          </div>
          <div className="col">
            <label htmlFor="proposito">Propósito</label>
            <input
              id="proposito"
              type="text"
              className="form-control"
              placeholder="Propósito"
              name="proposito"
              value={
                visitor.state === null
                  ? visita.proposito
                  : visitor_admin.visitante[0].proposito
              }
              disabled={visitor.state === null ? false : true}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-6">
            <label htmlFor="fecha">Fecha</label>
            {/* <input
              id="fecha"
              type="datetime-local"
              className="form-control"
              placeholder="Fecha"
              name="fecha"
              value={"2021-12-09 23:18:16"}
              onChange={handleInputChange}
              initialValue={}
            /> */}
            <Datetime
              value={visita.fecha}
              // dateFormat="YYYY-MM-DD"
              initialValue={
                visitor.state === null ? date : visitor_admin.visitante[0].fecha
              }
              onChange={handleInputDateChange}
            />
          </div>
        </div>
        <div className="mt-5">
          <button className="btn btn-success" onClick={submit}>
            {visitor.state === null ? "Agregar visita" : "Actualizar visita"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVisitorForm;
