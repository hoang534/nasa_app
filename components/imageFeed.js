import styles from "../styles/search.module.css";
import { useState, useCallback, useRef, useEffect } from "react";
import format from "../styles/imageformat.module.css";
export function imageFeed(items, imageMode) {
 /*Renders the image feed of the searched item if valid.
 if imageMode == false then it renders the images with their
 respective images, otherwise it only renders the images.*/
  
  return (
    <div className={styles.background}>
      {items &&
        items.map((preview) => (
          <div className={format.pad}>
            <div className={format.eventTitle}>
              <div className={format.buttonContainer}></div>
              {preview.data[0].title}
            </div>
            <div className={format.sidecontainer}>
              <img className={format.imageLayout} src={preview.links[0].href} />

              <div className={format.timeContainer}>
                <b className={format.bold}>
                  Date Created: {preview.data[0].date_created}
                </b>
              </div>
              {!imageMode && <hr className={format.divider} />}
              {preview.data[0].description.length < 600 && (
                <div className={format.eventdescription}>
                  {!imageMode && preview.data[0].description}
                </div>
              )}
              {preview.data[0].description.length > 600 && (
                <div className={format.descriptionLong}>
                  {!imageMode && preview.data[0].description}
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}
