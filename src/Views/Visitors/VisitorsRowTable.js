import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const VisitorsRowTable = (props) => {
  const [, setSendRequest] = useState([]);
  let navigate = useNavigate();

  const submit = async (id) => {
    const URL_SINGLE_VISITOR = `http://localhost/react-project/app/src/Api/single_visitor.php?v_id=${id}`;
    const OPTIONS = {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": "token-value",
      },
    };

    axios
      .get(URL_SINGLE_VISITOR, OPTIONS)
      .then((response) => {
        setSendRequest(response.data);
        navigate(`v_id=${id}`, {state: response.data})
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const visitorsList = props.visitors.map((visitor) => {
    return (
      <tr key={visitor.id}>
        <td>{visitor.nombre}</td>
        <td>{visitor.empresa}</td>
        <td>{visitor.fecha}</td>
        <td>
          <button
            type="submit"
            onClick={() => submit(visitor.id)}
            className="btn btn-info"
          >
            Registrar
          </button>
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
          <th scope="col">Registrar</th>
        </tr>
      </thead>
      <tbody>{visitorsList}</tbody>
    </table>
  );
};

export default VisitorsRowTable;
