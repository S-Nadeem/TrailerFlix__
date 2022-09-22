import React, { useRef, useState } from 'react'
import FontAwesome  from "react-fontawesome";
import { StyledSearchBar, StyledSearchBarContent} from "../styles/StyledSearchBar";

const SearchBar = ({ callback }) => {
    const [state, setState] = useState('');
    const timeOut = useRef(null);

    const doSearch = eve =>{
        const { value } = eve.target;
        clearTimeout(timeOut.current);
        setState(value);

        timeOut.current = setTimeout(()=>{
            callback(value);
        }, 750);

    }



    return (
        <StyledSearchBar>
            <StyledSearchBarContent>
                <FontAwesome className="fa-search" name="search" size="2x" />
                <input 
                    type="text"
                    placeholder="Search"
                    onChange={doSearch}
                    value={state}
                />
            </StyledSearchBarContent>
        </StyledSearchBar>
    )
}

export default SearchBar
