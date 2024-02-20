import React from 'react'
import { useState } from 'react'
import './SearchBar.css'

export default function SearchBar({ onSearchclick }) {
    const [cityname, setCityname] = useState('')
    const handleSearch = () => {
        onSearchclick(cityname)
    }
    return (
        <div className='searchbox'>
            <input type="text" placeholder="Enter City Name" value={cityname} onChange={(e) => setCityname(e.target.value)} />
            <button onClick={() => {
                handleSearch()
                setCityname('')
            }}>Search</button>
        </div>
    )
}



