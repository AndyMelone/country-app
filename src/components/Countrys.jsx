import CountryDetail from "./CountryDetail";

export default function Countrys() {
  return (
    <section className="sectionDark">
      <div className="search color-dark  ">
        <div>
          <input
            className="bg-dark  color-dark"
            type="text"
            placeholder="Search for country"
          />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "inline-flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "32px",
        }}
      >
        <CountryDetail />
        <CountryDetail />
        <CountryDetail />
        <CountryDetail />
      </div>
    </section>
  );
}
