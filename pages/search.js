import {useState, useCallback, useRef} from 'react'
import styles from '../styles/Home.module.css'

function Search() {
const [search, setSearch] = useState("");
return (
<div className = {styles.container}> 
        <input className = {styles.search} type = "text" placeholder = "Look into Space..."
        onChange = {(event) =>  {setSearch(event.target.value);}}
        />
     
  
    </div>
)
}


export default Search