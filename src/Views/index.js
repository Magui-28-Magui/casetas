import React, { useState, useEffect } from "react";
import Title from "./../Components/Title";
import axios from "axios";
import VisitorsRowTable from "./Visitors/Guard/VisitorsRowTable";
import Alert from "./../Components/Alert";

const Home = () => {
  const [getVisitors, setGetVisitors] = useState([]);
  const URL_GET_VISITORS = "http://localhost/casetas/src/Api/visitor_admin.php";

  useEffect(() => {
    const OPTIONS = {
      method: "GET",
      mode: "no-cors",
      header: {
        "Content-Type":
          "application/x-www-form-urlencoded; charset=UTF-8;application/json",
      },
    };

    axios
      .get(URL_GET_VISITORS, OPTIONS)
      .then((response) => {
        setGetVisitors(response.data.visitante);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  return (
    <div>
      <Title title="Vistas en espera" />
      {getVisitors.length <= 0 ? (
        <Alert message="No hay visitas en espera" type="info" />
      ) : (
        <VisitorsRowTable visitors={getVisitors} />
      )}
      <div className="mt-5">
        <Title title="Vista registrada" />
        {getVisitors.length <= 0 ? (
          <Alert message="No hay visitas registradas" type="info" />
        ) : (
          <VisitorsRowTable visitors={getVisitors} />
        )}
      </div>
    </div>
  );
};

export default Home;
