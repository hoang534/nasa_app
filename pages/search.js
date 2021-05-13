import {useState, useCallback, useRef} from 'react'
import styles from '../styles/search.module.css'
import format from '../styles/imageformat.module.css'



export default function Search({items}) {
const [search, setSearch] = useState("");
const [photos,setPhotos] = useState(items);

const scrollToBottom = () => window.scrollTo({
    top: 1000,
    behavior: "smooth"
})
const scrollToTop= () => window.scrollTo({
    top: 0,
    behavior: "smooth"
})






return (
<div className={ format.background}>
  <div className={ styles.container}>
    <input className={ styles.search} type="text" placeholder="Look into Space..."
    onChange={ (event)=>
    {setSearch(event.target.value);}} />
    <button className={ styles.explorebutton} onClick={ async ()=>
      { const searching = await fetch(`https://images-api.nasa.gov/search?media_type=image&q=${search}`);
      const data = await searching.json(); 
      setPhotos(data.collection.items);
      scrollToBottom();
      } } > Explore
    </button>
  </div> 
  { photos && photos.map((preview) => (
  <div className={format.pad}>
    <div className={format.eventTitle}>
    <div className={format.buttonContainer}>
          <button className = {format.cardButton} onClick={scrollToTop}>
              Return to Search
          </button>
        </div>{preview.data[0].title}
    </div>
    <div className={format.sidecontainer}>
      <img className={format.imageLayout} src={preview.links[0].href} />
      <hr className={format.divider} />
      <div className={format.eventdescription}>
        <div className={format.timeContainer}>
          <b className={format.bold}>
            Date Created: {preview.data[0].date_created}
          </b>
        </div>
        {preview.data[0].description}
      </div>
    </div>
  </div>
  ))}
</div>
)
}


