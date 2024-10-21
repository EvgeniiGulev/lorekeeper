import React from "react";
import { Navbar } from "../components/navbar";

export const Player = () => {
  let character = {
    id: 1,
    name: "Aric Strongarm",
    class: "Fighter",
    subclass: "Champion",
    level: 5,
    race: "Human",
    background: "Soldier",
    alignment: "Lawful Good",
    experiencePoints: 6500,
    hitPoints: 40,
    armorClass: 18,
    speed: 30,
    initiative: 1, // Dexterity modifier
    proficiencyBonus: 3,
    abilityScores: {
      Strength: 16, // Raw score
      StrengthModifier: 3, // (16 - 10) / 2 = +3
      Dexterity: 12,
      DexterityModifier: 1, // (12 - 10) / 2 = +1
      Constitution: 14,
      ConstitutionModifier: 2,
      Intelligence: 10,
      IntelligenceModifier: 0,
      Wisdom: 11,
      WisdomModifier: 0,
      Charisma: 13,
      CharismaModifier: 1,
    },
    savingThrows: {
      Strength: { modifier: 5, baseModifier: 3, proficient: true }, // 3 (Strength Modifier) + 3 Proficiency Bonus
      Dexterity: { modifier: 1, baseModifier: 1, proficient: false }, // 1 (Dexterity Modifier)
      Constitution: { modifier: 5, baseModifier: 2, proficient: true }, // 2 (Constitution Modifier) + 3 Proficiency Bonus
      Intelligence: { modifier: 0, baseModifier: 0, proficient: false }, // 0 (Intelligence Modifier)
      Wisdom: { modifier: 0, baseModifier: 0, proficient: false }, // 0 (Wisdom Modifier)
      Charisma: { modifier: 1, baseModifier: 1, proficient: false }, // 1 (Charisma Modifier)
    },
    skills: {
      Acrobatics: { modifier: 1, baseModifier: 1, proficient: false }, // Dexterity-based
      AnimalHandling: { modifier: 0, baseModifier: 0, proficient: false }, // Wisdom-based
      Arcana: { modifier: 0, baseModifier: 0, proficient: false }, // Intelligence-based
      Athletics: { modifier: 6, baseModifier: 3, proficient: true }, // Strength + proficiency bonus
      Deception: { modifier: 1, baseModifier: 1, proficient: false }, // Charisma-based
      History: { modifier: 0, baseModifier: 0, proficient: false }, // Intelligence-based
      Insight: { modifier: 0, baseModifier: 0, proficient: false }, // Wisdom-based
      Intimidation: { modifier: 4, baseModifier: 1, proficient: true }, // Charisma + proficiency
      Investigation: { modifier: 0, baseModifier: 0, proficient: false }, // Intelligence-based
      Medicine: { modifier: 0, baseModifier: 0, proficient: false }, // Wisdom-based
      Nature: { modifier: 0, baseModifier: 0, proficient: false }, // Intelligence-based
      Perception: { modifier: 0, baseModifier: 0, proficient: false }, // Wisdom-based
      Performance: { modifier: 1, baseModifier: 1, proficient: false }, // Charisma-based
      Persuasion: { modifier: 1, baseModifier: 1, proficient: false }, // Charisma-based
      Religion: { modifier: 0, baseModifier: 0, proficient: false }, // Intelligence-based
      SleightOfHand: { modifier: 1, baseModifier: 1, proficient: false }, // Dexterity-based
      Stealth: { modifier: 1, baseModifier: 1, proficient: false }, // Dexterity-based
      Survival: { modifier: 0, baseModifier: 0, proficient: false }, // Wisdom-based
    },
    feats: [
      {
        name: "Great Weapon Master",
        description:
          "On your turn, when you score a critical hit with a melee weapon or reduce a creature to 0 HP, you can make one melee weapon attack as a bonus action. You can also take a -5 penalty to hit for a +10 to damage.",
      },
    ],
    attacks: [
      {
        name: "Longsword",
        bonus: 7, // Strength modifier (+3) + Proficiency Bonus (+3)
        damage: "1d8+4 slashing", // 1d8 + Strength modifier (+3) + Dueling Fighting Style (+1)
        type: "Melee",
        numberOfAttacks: 2, // From Extra Attack feature at level 5
      },
      {
        name: "Throwing Axe",
        bonus: 5, // Strength modifier (+3) + Proficiency Bonus (+3)
        damage: "1d6+3 slashing", // 1d6 + Strength modifier
        type: "Ranged",
        numberOfAttacks: 1,
      },
    ],
    inventory: [
      { item: "Longsword", quantity: 1, weight: 3 },
      { item: "Shield", quantity: 1, weight: 6 },
      { item: "Chain Mail", quantity: 1, weight: 20 },
      { item: "Potion of Healing", quantity: 2, weight: 0.5 },
      { item: "Explorer's Pack", quantity: 1, weight: 5 },
    ],
    features: {
      "Second Wind": {
        description:
          "You can use a bonus action to regain 1d10 + 5 HP. Can be used once per short or long rest.",
        uses: 1,
      },
      "Action Surge": {
        description:
          "You can take one additional action on your turn. Can be used once per short or long rest.",
        uses: 1,
      },
      "Extra Attack": {
        description:
          "You can attack twice, instead of once, whenever you take the Attack action on your turn.",
      },
      "Improved Critical (Champion)": {
        description:
          "Your weapon attacks score a critical hit on a roll of 19 or 20.",
      },
    },
    defenses: {
      "Armor Proficiencies": ["All armor", "Shields"],
      "Weapon Proficiencies": ["Simple weapons", "Martial weapons"],
      "Tool Proficiencies": ["Vehicles (land)"],
      "Saving Throw Proficiencies": ["Strength", "Constitution"],
    },
    passivePerception: 10, // Based on Perception skill: 10 + Wisdom modifier (0)
    languages: ["Common", "Elvish"],
    overview:
      "Aric Strongarm is a stalwart defender of the realm, renowned for his unwavering loyalty and bravery in the face of danger. A seasoned soldier, he has fought in numerous battles and protects the innocent with his mighty sword.",
    backgroundDetail: {
      trait: "I can stare down a hellhound without flinching.",
      ideal: "Honor. I don’t steal from others.",
      bond: "I fight for those who cannot fight for themselves.",
      flaw: "My hatred for my enemies is blind and unreasoning.",
    },
    inspiration: 0,
    successes: 2,
    failures: 1,
    money: {
      gold: 150,
      silver: 300,
      copper: 500,
      platinum: 10,
    },
  };

  return (
    <>
      <Navbar />
      <div className="character-container">
        {/* Character Overview */}
        <div className="character-overview">
          <div className="character-overview-left">
            <p className="character-name">{character.name}</p>
            <p className="character-overview-text">{character.overview}</p>
          </div>
          <div className="character-overview-right">
            <ul className="character-overview-list">
              <li className="character-overview-item">
                <p className="character-overview-title">{character.class}</p>
                <p className="character-overview-title">Class</p>
              </li>
              <li className="character-overview-item">
                <p className="character-overview-title">{character.subclass}</p>
                <p className="character-overview-title">Subclass</p>
              </li>
              <li className="character-overview-item">
                <p className="character-overview-title">
                  {character.background}
                </p>
                <p className="character-overview-title">Background</p>
              </li>
              <li className="character-overview-item">
                <p className="character-overview-title">
                  {character.alignment}
                </p>
                <p className="character-overview-title">Alignment</p>
              </li>
              <li className="character-overview-item">
                <p className="character-overview-title">{character.race}</p>
                <p className="character-overview-title">Race</p>
              </li>
              <li className="character-overview-item">
                <p className="character-overview-title">{character.level}</p>
                <p className="character-overview-title">Level</p>
              </li>
              <li className="character-overview-item">
                <p className="character-overview-title">
                  {character.experiencePoints}
                </p>
                <p className="character-overview-title">Experience</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="character-stats">
          <ul className="character-stats-list">
            {Object.entries(character.abilityScores).map(
              ([key, value], index) => {
                // Only render stats that are not modifiers
                if (!key.includes("Modifier")) {
                  const modifierKey = `${key}Modifier`; // Dynamically create the modifier key

                  return (
                    <li key={index} className="character-stats-item">
                      <p className="character-stat-value">
                        {key}: {value}
                      </p>
                      <p className="character-stat-modifier">
                        {/* Safely access the corresponding modifier */}
                        {character.abilityScores[modifierKey] >= 0
                          ? `+${character.abilityScores[modifierKey]}`
                          : character.abilityScores[modifierKey]}
                      </p>
                    </li>
                  );
                }
                return null; // Ignore modifier keys
              }
            )}
          </ul>
        </div>
        <div className="character-data-row">
          <div className="character-general-data">
            <ul className="character-general-list">
              <li className="character-general-item">
                <p className="character-general-title">Health:</p>
                <p className="character-general-title">{character.hitPoints}</p>
              </li>
              <li className="character-general-item">
                <p className="character-general-title">Armor Class:</p>
                <p className="character-general-title">
                  {character.armorClass}
                </p>
              </li>
              <li className="character-general-item">
                <p className="character-general-title">Speed:</p>
                <p className="character-general-title">{character.speed}</p>
              </li>
              <li className="character-general-item">
                <p className="character-general-title">Initiative:</p>
                <p className="character-general-title">
                  +{character.initiative}
                </p>
              </li>
              <li className="character-general-item">
                <p className="character-general-title">Inspiration:</p>
                <p className="character-general-title">
                  {character.inspiration}
                </p>
              </li>
              <li className="character-general-item">
                <p className="character-general-title">Passive Wisdom:</p>
                <p className="character-general-title">
                  {character.passivePerception}
                </p>
              </li>
            </ul>
            <div className="character-money-container">
              <ul className="character-money-list">
                <li className="character-money-item">
                  <span className="character-money-value">
                    {character.money.platinum}
                  </span>
                  <span className="character-money-type">Platinum</span>
                </li>
                <li className="character-money-item">
                  <span className="character-money-value">
                    {character.money.gold}
                  </span>
                  <span className="character-money-type">Gold</span>
                </li>
                <li className="character-money-item">
                  <span className="character-money-value">
                    {character.money.silver}
                  </span>
                  <span className="character-money-type">Silver</span>
                </li>
                <li className="character-money-item">
                  <span className="character-money-value">
                    {character.money.copper}
                  </span>
                  <span className="character-money-type">Copper</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="character-inventory-container">
            <p className="character-inventory-heading">INVENTORY</p>
            <ul className="character-inventory-list">
              {character.inventory.map((inventoryItem, index) => (
                <li key={index} className="character-inventory-item">
                  <p className="character-inventory-item-count">
                    {inventoryItem.quantity}
                  </p>
                  <p className="character-inventory-item-item">
                    {inventoryItem.item}
                  </p>
                  <p className="character-inventory-item-weight">
                    {inventoryItem.weight} lbs
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
