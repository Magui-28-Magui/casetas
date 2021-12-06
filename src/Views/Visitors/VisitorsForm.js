import React from "react";
import Title from "../../Components/Title";
import { useLocation } from "react-router";
import moment from 'moment';

const VisitorsForm = () => {
  let visitor = useLocation();
  let visitorSelected = visitor.state.visitante[0];
  // const ADD = true;
  
  return (
    <div>
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
              defaultValue={moment(visitorSelected.fecha).format('MMMM Do YYYY') || ""}
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
              defaultValue={moment(visitorSelected.fecha).format('LT') || ""}
            />
          </div>
        </div>
        {/* <div className="row mb-4">
          <div className="col">
            <label htmlFor="hora-salida">Hora salida</label>
            <input
              id="hora-salida"
              type="text"
              className="form-control"
              placeholder="Hora salida"
            />
          </div>
          <div className="col">
            <label htmlFor="tipo-visita">Tipo de visita</label>
            <input
              id="tipo-visita"
              type="text"
              className="form-control"
              placeholder="Tipo visita"
            />
          </div>
        </div> */}
        <div className="mt-5">
          <button className="btn btn-primary" disabled={true} type="submit">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default VisitorsForm;
