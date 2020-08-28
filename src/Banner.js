import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Banner.css";
import { Button } from "@material-ui/core";
import SearchDates from "./SearchDates";
function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <SearchDates />}
        <Button
          className="banner__searchButton"
          variant="outlined"
          onClick={() => setShowSearch(!showSearch)}
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>

      <div className="banner__info">
        <h1> Get out stretch your imaginations</h1>
        <h5>
          Plan a different kind of gatway to uncover the hidden gems near you.
        </h5>

        <Button variant="outlined" onClick={() => history.push("/search")}>
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
