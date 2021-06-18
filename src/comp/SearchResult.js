import React, { useContext} from 'react'
import './SearchResult.css'
import { searchInput } from './../App';

function SearchResult() {
    const [wikiName, wikiLinks, input] = useContext(searchInput)
    if(!wikiName[0]&& input==='' ){
        return(
            <div className="result links">
                Please Enter Something to Search
            </div>
        )
    }
    if(wikiName.length === 0){
        return(<div className='result links'>
            Sorry! No result found.
        </div>)
    }
    return (
        <div className='links'>
                {
                    
                   wikiName[0] !== "Undefined" && (wikiName.map((ele,index)=><div className="result" key={ele}><a rel='noreferrer' href={wikiLinks[index]} target='_blank'>{ele}</a></div>))
                }
        </div>
    )
}

export default SearchResult
