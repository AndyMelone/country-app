import { useContext } from "react";
import { CountryContext } from "../context/countryContext";

export default function CountryDetail() {
  const country = useContext(CountryContext);

  return (
    <>
      {country.map((item) => (
        <div key={item.alpha3Code} className="country-detail bg-dark">
          {console.log(item)}
          <div className="imageDark">
            <img src={item.flag} alt="" />
          </div>

          <div className="infoDark color-dark">
            <h5>
              <span>{item.name}.lo</span>
            </h5>
            <div>
              <span>Population:</span>
              <p>{item.population}</p>
            </div>
            <div>
              <span>Region:</span>
              <p>{item.region}</p>
            </div>
            <div>
              <span>Capital:</span>
              <p>{item.capital}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
