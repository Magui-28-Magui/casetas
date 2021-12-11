import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const VisitorAdminRowTable = (props) => {
  let navigate = useNavigate();
  const { nextVisitor, visitors, openModal, setOpenModal, checked } = props;
  const [, setVisitorData] = useState({});
  const OPTIONS = {
    method: "GET",
    mode: "no-cors",
    header: {
      "Content-Type":
        "application/x-www-form-urlencoded; charset=UTF-8;application/json",
    },
  };

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const goToForm = (id) => {
    const URL_GET_VISITOR_BY_ID = `http://localhost/casetas/src/Api/single_visitor_admin.php?v_id=${id}`;

    axios.get(URL_GET_VISITOR_BY_ID, OPTIONS).then((response) => {
      setVisitorData(response.data.visitante);

      navigate(`/add-visitor/v_id=${id}`, { state: response.data });
    });
  };

  const nextVisitorList = nextVisitor.map((visitor) => {
    return (
      <tr key={visitor.id}>
        <td>{visitor.nombre}</td>
        <td>{visitor.empresa}</td>
        <td>{visitor.fecha}</td>
        <td>
          <div className="btn-group" role="group">
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={() => goToForm(visitor.id)}
            >
              <i>
                <span className="fas fa-edit"></span>
              </i>
            </button>
            <button
              type="submit"
              className="btn btn-danger"
              onClick={toggleModal}
            >
              <i>
                <span className="fas fa-ban"></span>
              </i>
            </button>
          </div>
        </td>
      </tr>
    );
  });

  const visitorsList = visitors.map((visitor) => {
    return (
      <tr key={visitor.id}>
        <td>{visitor.nombre}</td>
        <td>{visitor.empresa}</td>
        <td>{visitor.fecha}</td>
        <td>
          <div className="btn-group" role="group">
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={() => goToForm(visitor.id)}
            >
              <i>
                <span className="fas fa-edit"></span>
              </i>
            </button>
            <button
              type="submit"
              className="btn btn-danger"
              onClick={toggleModal}
            >
              <i>
                <span className="fas fa-ban"></span>
              </i>
            </button>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <table className="table container-fluid text-center">
      <thead className="thead-info">
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Empresa</th>
          <th scope="col">Fecha/Hora</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>{checked === true ? nextVisitorList : visitorsList}</tbody>
    </table>
  );
};

export default VisitorAdminRowTable;
