import React, { useState, useEffect } from 'react'
import './Research.css'
import Header from '../Header/Header';
import { Link } from "react-router-dom";
import Summary from '../Summary/Summary';


const Research = () => {
  // ------
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   // Fetch data from backend when component mounts
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('http://localhost:3000/api/data'); // Replace URL with your backend endpoint
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };
  // -------

  const summarys = [
    {
      id: "1",
      name: "AIML",
      sum: "Auto"
    },
    {
      id: "2",
      name: "BC",
      sum: "Secure"
    },
    {
      id: "1",
      name: "NLP",
      sum: "Text"
    },
  ];

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

        {summarys.map(summary => (
          <Summary key={summary.id} name={summary.name} sum={summary.sum} />
        ))}




        {/* <div className='wrapper'>

        <div className='output-display'>
          <div><h2 className='sr-re'>1</h2></div>
          <div><h2 className='title-re'>Paper title</h2></div>
          <div className='view-button'>
            <Link to=''>
              <buttons className='btn-re'>View</buttons>
            </Link>
          </div>
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


        </div> */}
        {/*download button
 <div className='download-button'>
            <Link to=''>
              <buttons className='btn-re'>Download</buttons>
            </Link>
          </div> */}
      </div>  
    </div>
  )
}


export default Research
