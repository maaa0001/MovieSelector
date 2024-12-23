import React, { useState } from "react";

const FilmVaelger = () => {
  const [film, setFilm] = useState([
    "Star Wars",
    "Jurassic Park",
    "Batman: The Dark Knight Rises",
    "Ringenes Herre/Hobbitten",
    "The Godfather",
    "GoodFellas",
    "American Beauty",
    "Rocky",
    "Memento",
    "Iron Man",
    "Natural Born Killers",
    "The Usual Suspects",
    "Kill Bill",
    "Inception",
    "Back to the future",
    "Spiderman",
    "Reservoir Dogs",
    "Up (Pixar)",
    "The fast and the furious",
    "Monsters, Inc",
    "Catch Me if You Can",
    "007: Goldfinger",
    "Casino Royale",
    "The Departed",
    "Indiana Jones",
  ]);

  const [nyFilm, setNyFilm] = useState("");
  const [valgtFilm, setValgtFilm] = useState("");

  const vaelgTilfaeldigFilm = () => {
    const tilfaeldigtIndex = Math.floor(Math.random() * film.length);
    setValgtFilm(film[tilfaeldigtIndex]);
  };

  const tilfoejFilm = () => {
    if (nyFilm.trim() !== "") {
      setFilm([...film, nyFilm.trim()]);
      setNyFilm("");
    }
  };

  const fjernFilm = (index) => {
    const nyFilmListe = film.filter((_, i) => i !== index);
    setFilm(nyFilmListe);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
      <div>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
          Film Vælger
        </h2>

        <div style={{ display: "flex", gap: "10px", marginBottom: "1rem" }}>
          <input
            type="text"
            value={nyFilm}
            onChange={(e) => setNyFilm(e.target.value)}
            placeholder="Tilføj ny film"
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              flex: "1",
            }}
          />
          <button
            onClick={tilfoejFilm}
            style={{
              padding: "8px 16px",
              backgroundColor: "#121212",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Tilføj
          </button>
        </div>
      </div>

      <div>
        <h3 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>Film Liste:</h3>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "8px",
          }}
        >
          {film.map((titel, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px",
                backgroundColor: "#3C3C3C",
                marginBottom: "4px",
                borderRadius: "4px",
              }}
            >
              <span>{titel}</span>
              <button
                onClick={() => fjernFilm(index)}
                style={{
                  backgroundColor: "#ff4444",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  padding: "4px 8px",
                  cursor: "pointer",
                }}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <button
          onClick={vaelgTilfaeldigFilm}
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#121212",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginBottom: "1rem",
          }}
        >
          Vælg Tilfældig Film
        </button>

        {valgtFilm && (
          <div
            style={{
              padding: "16px",
              backgroundColor: "#3C3C3C",
              borderRadius: "4px",
              textAlign: "center",
            }}
          >
            <p style={{ fontWeight: "bold" }}>Valgt film:</p>
            <p>{valgtFilm}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilmVaelger;
