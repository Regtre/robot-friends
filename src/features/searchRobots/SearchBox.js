import React from "react";
import { useDispatch } from 'react-redux'
import { update } from './searchSlice'


const SearchBox = () => {
    const dispatch = useDispatch()

    return (
        <div className={'pa2'}>
            <input
                className={'pa3 ba b--green bg-lightest-blue'}
                type='search'
                placeholder={'search a robot'}
                onChange={(e) =>
                    dispatch(update(e.target.value))}/>
        </div>

    )
}

export default SearchBox;