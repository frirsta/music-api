import React, { useEffect, useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const [results, setResults] = useState("");

  useEffect(() => {
    fetchApi();
  }, [results]);
  const fetchApi = () => {
    fetch(
      `https://shazam.p.rapidapi.com/search?term=+${search}&locale=en-US&offset=0&limit=5`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
          process.env.REACT_APP_RAPID_API,
          "X-RapidAPI-Host": "shazam.p.rapidapi.com",
        },
      }
    )
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setList(data.tracks.hits);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setResults(search);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>

      {list.map((item) => {
        return(
            <div key={item.track.key}>
                <img src={item.track.images.coverart} alt={item.track.title} height={150} width={150} />
                <p>{item.track.title}</p>

            </div>
        )
      })}
    </div>
  );
}

export default Search;
