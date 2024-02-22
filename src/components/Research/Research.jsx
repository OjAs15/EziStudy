import React from 'react'
import './Research.css'
import Header from '../Header/Header';


const Research = () => {
  return (
    <div className='re'>
      <Header />

    <div className='searchbar'>
        <form onsubmit="event.preventDefault();" role="search">
          <label for="search">Search for stuff</label>
          <input id="search" type="search" placeholder="Search your paper!" autofocus required />
          <button type="submit">Go</button>
        </form>
        
    </div>    
      <div className='main-display'>
        <h2 className='title-h2'> Your Research papers</h2>
      </div>  
    </div>
  )
}

export default Research
