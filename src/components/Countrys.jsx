import { useState } from "react";
import CountryDetail from "./CountryDetail";

export default function Countrys() {
  const [textEdit, setTextEdit] = useState("");
  const handlechange = (e) => {
    setTextEdit(e.target.value);
  };
  return (
    <section className="countrys">
      <div className="search color-dark">
        <input
          className="bg-dark  color-dark"
          type="text"
          placeholder="Search for country"
          value={textEdit}
          onChange={handlechange}
        />
        <input type="button" value="check" />
      </div>

      <div className="country-container">
        <CountryDetail />
      </div>
    </section>
  );
}
