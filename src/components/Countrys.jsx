import CountryDetail from "./CountryDetail";

export default function Countrys() {
  return (
    <section className="countrys">
      <div className="search color-dark  ">
        <input
          className="bg-dark  color-dark"
          type="text"
          placeholder="Search for country"
        />
        <input type="button" value="check" />
      </div>

      <div className="country-container">
        <CountryDetail />
        <CountryDetail />
        <CountryDetail />
        <CountryDetail />
        <CountryDetail />
        <CountryDetail />
        <CountryDetail />
      </div>
    </section>
  );
}
