import React, { useEffect, useState } from "react";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";

import styles from "../App.module.css";
import MusicCard from "./MusicCard";

function Search() {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const [results, setResults] = useState("");

  useEffect(() => {
    const fetchApi = () => {
      fetch(
        `https://shazam.p.rapidapi.com/search?term=+${search}&locale=en-US&offset=0&limit=4`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API,
            "X-RapidAPI-Host": "shazam.p.rapidapi.com",
          },
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setList(data.tracks.hits);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    fetchApi();
  }, [results, search]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setResults(search);
  };

  return (
    <div className={styles.SearchContainer}>
      <h1 className={styles.title}>Search for song or artist</h1>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <Input
          type="text"
          value={search}
          onChange={handleChange}
          color="info"
          placeholder="type artist or title..."
          size="sm"
        />

        <Button className={styles.Button} color="info" type="submit" size="sm" variant="outlined">
          Search
        </Button>
      </form>

      <div>
        {list.map((item) => {
          return (
            <div key={item.track.key}>
              <MusicCard
                image={item.track.images.coverart}
                title={item.track.title}
                alt={item.track.title}
                artist={item.track.subtitle}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
