import Countrys from "./Countrys";
import NavBar from "./NavBar";
import { CountryContext } from "../context/countryContext";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/data.json");
        setData(response.data);
      } catch (error) {
        console.error("erreur lors de la recuperation des donnée");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <CountryContext.Provider value={data}>
        <NavBar />
        <Countrys />
      </CountryContext.Provider>
    </>
  );
}
