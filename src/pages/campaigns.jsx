import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";

export const Campaigns = () => {
  // Temporary Dungeon Master card data
  const dungeonMasters = [
    { name: "Gorim the Great", campaign: "The Lost Mine" },
    { name: "Zara the Wise", campaign: "Curse of Strahd" },
  ];

  return (
    <>
      <Navbar />
      <div className="master-container" id="master-container">
        <h1 className="master-heading">Dungoneers Campaigns</h1>
        <ul className="cards" id="master-cards">
          {dungeonMasters.map((dm, index) => (
            <li className="card" key={index} id={`master-card-${index}`}>
              <h3 className="card-title">{dm.name}</h3>
              <p className="card-campaign">Campaign: {dm.campaign}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
