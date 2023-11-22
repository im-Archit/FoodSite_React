import React from "react";
// import MenuCard from './MenuCard';

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          return (
            <>
              <div className="card-container" key={curElem.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{curElem.id}</span>
                    <span
                      className="card-author subtle"
                      style={{ color: "red" }}
                    >
                    {curElem.name}
                    </span>
                    <h2 className="card-title">{curElem.id}</h2>
                    <span className="card-description subtle">
                    {curElem.description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={curElem.image} className="card-media" alt="" />
                  <span className="card-tag subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
