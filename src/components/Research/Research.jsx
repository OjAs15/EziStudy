import React from 'react'
import './Research.css'
import Header from '../Header/Header';
import { Link } from "react-router-dom";


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
        <div className='wrapper'>

        <div className='output-display'>
          <div><h2 className='sr-re'>1</h2></div>
          <div><h2 className='title-re'>Paper title</h2></div>
          <div className='view-button'>
            <Link to=''>
              <buttons className='btn-re'>View</buttons>
            </Link>
          </div>
          {/* <div className='download-button'>
            <Link to=''>
              <buttons className='btn-re'>Download</buttons>
            </Link>
          </div> */}
        </div>

        <div className='output-display'>
          <div><h2 className='sr-re'>2</h2></div>
          <div><h2 className='title-re'>Paper title 2</h2></div>
          <div className='view-button'>
            <Link to=''>
              <buttons className='btn-re'>View</buttons>
            </Link>
          </div>

        </div>

        <div className='output-display'>
          <div><h2 className='sr-re'>3</h2></div>
          <div><h2 className='title-re'>Paper title 3</h2></div>
          <div className='view-button'>
            <Link to=''>
              <buttons className='btn-re'>View</buttons>
            </Link>
          </div>
          
        </div>

        <div className='output-display'>
          <div><h2 className='sr-re'>4</h2></div>
          <div><h2 className='title-re'>Paper title 4</h2></div>
          <div className='view-button'>
            <Link to=''>
              <buttons className='btn-re'>View</buttons>
            </Link>
          </div>  
        </div>

        <div className='output-display'>
          <div><h2 className='sr-re'>5</h2></div>
          <div><h2 className='title-re'>Paper title 5</h2></div>
          <div className='view-button'>
            <Link to=''>
              <buttons className='btn-re'>View</buttons>
            </Link>
          </div>
        </div>

        <div className='output-display'>
          <div><h2 className='sr-re'>6</h2></div>
          <div><h2 className='title-re'>Paper title 6</h2></div>
          <div className='view-button'>
            <Link to=''>
              <buttons className='btn-re'>View</buttons>
            </Link>
          </div>
        </div>


        </div>
      </div>  
    </div>
  )
}

export default Research
