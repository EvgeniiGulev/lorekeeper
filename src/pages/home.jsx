import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar";

export const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="home-container">
      <div className="intro-container">
        <h1 className="intro-heading">
          Welcome to LoreKeeper: Your Portal to D&D Knowledge!
        </h1>
        <p className="intro-subtext">
          Uncover the secrets of the realms, track your characters, and explore
          a wealth of lore and data sheets for all your Dungeons & Dragons
          adventures.
        </p>
        <div className="intro-options">
          <Link
            to={"/characters"}
            className="intro-option-btn"
            id="button-adventurer"
          >
            The Adventurer's Path
          </Link>
          <Link
            to={"/campaigns"}
            className="intro-option-btn"
            id="button-dungeon-master"
          >
            Master of the Dungeon
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
    </>
  );
};
