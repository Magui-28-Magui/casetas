import React, { useState, useEffect } from "react";
import Title from "./../Components/Title";
import axios from "axios";
import VisitorsRowTable from "./Visitors/VisitorsRowTable";

const Home = () => {
  const [getVisitors, setGetVisitors] = useState([]);
  const URL_GET_VISITORS =
    "http://localhost/react-project/app/src/Api/visitante.php";

  useEffect(() => {
    const OPTIONS = {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": "token-value",
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
      <Title title="Vista esperada" />
      <VisitorsRowTable visitors={getVisitors} />
    </div>
  );
};

export default Home;
