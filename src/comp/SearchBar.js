import React, { useContext, useEffect, useRef} from 'react'
import './SearchBar.css';
import { searchInput } from './../App';

function SearchBar() {
    const [ wikiName,wikiLinks,input,setWikiName, setWikiLinks, setInput]= useContext(searchInput)
    const focus = useRef();
    const changeBar = (event) =>setInput(event.target.value)
    useEffect(()=>{
        focus.current.focus();
        if(input===''){
            setWikiName([])
            setWikiLinks([])
            return}
        fetch(`https://en.wikipedia.org/w/api.php?&origin=*&format=json&action=opensearch&search=${input}`)
        .then(response=>response.json())
        .then(res =>{
            setWikiName(res[1])
            setWikiLinks(res[3])
        })
    },[input,setWikiLinks,setWikiName])
    if(false){
        console.log(wikiName, wikiLinks);
    }
    return (
        <div>
            <input
            ref={focus}
            placeholder='search'
            value={input}
            onChange={changeBar}
            />
        </div>
    )
}

export default SearchBar
