import React from 'react'
import './Searchbar.css'
import Header from '../Header/Header';



const searchbar = () => {
  return (
    <div className='sb'>
      <Header />
      <div className='sinput-container'>
        <input id="sinput" type='text' placeholder='Search here'></input>
        <button type="submit" className='but'>Go</button>   
      </div>
      {/* <div className='temp-data'>

      </div> */}
    </div>
  )
}

export default searchbar
