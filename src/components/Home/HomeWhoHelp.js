import React, { useState } from "react";
import "../../scss/HomeWhoHelp.scss";
import { data } from "./data";

const ITEMS_PER_PAGE = 3;

const HomeWhoHelp = () => {
  const [category, setCategory] = useState("fundacje");
  const [page, setPage] = useState(0);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setPage(0);
  };

  const currentData = data[category].slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);
  const totalPages = Math.ceil(data[category].length / ITEMS_PER_PAGE);

  return (
    <section id="home-whohelp" className="home-whohelp">
      <div className="home-whohelp-nav">
        <h1>Komu pomagamy?</h1>
        <div className="main-decoration"></div>
        <nav className="whohelp-nav">
          <ul className="whohelp-nav-list">
            <li>
              <button onClick={() => handleCategoryChange("fundacje")} className={`btn ${category === "fundacje" ? "active" : ""}`}>
                Fundacjom
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoryChange("organizacje")} className={`btn ${category === "organizacje" ? "active" : ""}`}>
                Organizacjom pozarządowym
              </button>
            </li>
            <li>
              <button onClick={() => handleCategoryChange("zbiorki")} className={`btn ${category === "zbiorki" ? "active" : ""}`}>
                Lokalnym zbiórkom
              </button>
            </li>
          </ul>
        </nav>
        <p className="home-whohelp-desc">
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
          potrzebują.
        </p>
        <div className="whohelp-content">
          {currentData.map((item, index) => (
            <div key={index} className="whohelp-item">
              <div>
                <h2 className="whohelp-item-title">
                  {category === "zbiorki" ? "Zbiórka " : ""}
                  {category === "organizacje" ? "Organizacja " : ""}
                  {category === "fundacje" ? "Fundacja " : ""}
                  {item.name}
                </h2>
                <p className="whohelp-item-description">Cel i misja: {item.mission}</p>
              </div>
              <p className="whohelp-item-tags">{item.tags.join(", ")}</p>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button key={index} onClick={() => setPage(index)} className={`page-btn ${page === index ? "active" : ""}`}>
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeWhoHelp;
