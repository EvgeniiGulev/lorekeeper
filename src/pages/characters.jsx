import React from "react";
import { Navbar } from "../components/navbar";
import { Link, Outlet } from "react-router-dom";

export const Characters = () => {
  // Temporary D&D character data
  const characters = [
    { id: 1, name: "Aric Strongarm", class: "Fighter", level: 5 },
    { id: 2, name: "Elara Moonshadow", class: "Rogue", level: 3 },
    { id: 3, name: "Theren Windwalker", class: "Druid", level: 4 },
    { id: 4, name: "Kaelin Brightstar", class: "Cleric", level: 6 },
    { id: 5, name: "Lirael Shadowfrost", class: "Wizard", level: 5 },
    { id: 6, name: "Borak Thunderfoot", class: "Barbarian", level: 7 },
    { id: 7, name: "Elysia Dawnstrider", class: "Paladin", level: 4 },
    { id: 8, name: "Xandar Fireforge", class: "Artificer", level: 3 },
    { id: 9, name: "Fynian Oakenshield", class: "Ranger", level: 6 },
    { id: 10, name: "Sylas Nightshade", class: "Warlock", level: 5 },
    { id: 11, name: "Rhea Stoneheart", class: "Bard", level: 4 },
    { id: 12, name: "Thalia Starwhisper", class: "Sorcerer", level: 3 },
  ];

  return (
    <>
      <Navbar />
      <div className="characters-container" id="characters-container">
        <h1 className="character-heading">Character Sheets</h1>
        <ul className="cards" id="character-cards">
          {characters.map((character, index) => (
            <li className="card" key={index} id={`character-card-${index}`}>
              <Link to={`/player/${character.id}`} className="card-title">
                {character.name}
              </Link>
              <p className="card-class">Class: {character.class}</p>
              <p className="card-level">Level: {character.level}</p>
            </li>
          ))}
        </ul>
        <Outlet />
      </div>
    </>
  );
};
