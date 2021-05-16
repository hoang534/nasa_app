import { useState, useCallback, useRef } from "react";
import styles from "../styles/search.module.css";
import format from "../styles/imageformat.module.css";
import { imageFeed } from "./imageFeed.js";
import { invalid } from "./invalidsearch.js";

export default function Search({ items }) {
  
  const [search, setSearch] = useState("");//search state used to specify within nasa API.
  const [error_check, setError] = useState(false);//checks if the searched item is even valid
  const [photos, setPhotos] = useState(items);//stores the items within the photos, then uses it to pull respective datas
  const [imageMode, setImage] = useState(false);//allows user to determine if they want to see images with or without descriptions

  const scrollToBottom = () =>
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    });

  const switchMode = () => {
    if (imageMode) {
      setImage(false);
    } else {
      setImage(true);
    }
  };

  return (
    <div className={format.background}>
      <div className={styles.container}>

        <div className={styles.options}>
          <button
            className={styles.modebutton}
            onClick={() => {
              switchMode();
            }}
          >
            Modes
          </button>
          <input
            className={styles.search}
            type="text"
            placeholder="Look into Space..."
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          <button
            className={styles.explorebutton}
            onClick={async () => {
              //fetching data from nasa-api related to search
              const searching = await fetch(
                `https://images-api.nasa.gov/search?media_type=image&q=${search}`
              );
              const data = await searching.json();
              //retrieve data and store it
              setPhotos(data.collection.items);
              if (data && data.collection.items.length != 0) {//Checks for if collection is valid containing items
                setError(false);
                scrollToBottom();
              } else {
                setError(true);
              }
            }}
          >
            {" "}
            Explore
          </button>
        </div>
        {error_check && invalid()}
        <div className={styles.homescreen}>
          <img
            className={styles.image}
            src="https://th.bing.com/th/id/Re3ce59f09c556d8a3b6884000da0c7db?rik=ihl7QN1hNZ%2fOrg&riu=http%3a%2f%2fwallpaperheart.com%2fwp-content%2fuploads%2f2018%2f04%2freal-space-wallpapers5.jpg&ehk=LfU4QjHN%2bBFMUvxZL5zQiMz9loNMxR6bdju4XV81BxI%3d&risl=&pid=ImgRaw"
          />
        </div>
      </div>
      {photos && !imageMode && !error_check && imageFeed(photos, false)}
      {photos && imageMode && !error_check && imageFeed(photos, true)}
    </div>
  );
}
