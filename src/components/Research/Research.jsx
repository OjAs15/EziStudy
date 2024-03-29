import React, { useState, useEffect } from 'react'
import './Research.css'
import Header from '../Header/Header';
import { Link, useSearchParams } from "react-router-dom";
import Summary from '../Summary/Summary';


const Research = () => {
    const [search, setSearch] = useSearchParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const { search: query } = Object.fromEntries(
            new URLSearchParams(search)
        );

        // Fetch data from backend when component mounts
        fetchData(query);
    }, []);

    const fetchData = async (query) => {
        try {
            const response = await fetch(`http://localhost:8000/user/gettopsummaries?queryText=${query}`); // Replace URL with your backend endpoint
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            setError(error.message);
        }
    };

    const summarys = [
        {
            id: "1",
            name: "AIML",
            sum: "Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph."
        },
        {
            id: "2",
            name: "BC",
            sum: "Auto a;lsdjf ;lajdsf ;alsdhfh klajsdhf akls hdf kjaslhdf hlaksdhad sf Auto a;lsdjf ;lajdsf ;alsdhfh klajsdhf akls hdf kjaslhdf hlaksdhad sf Auto a;lsdjf ;lajdsf ;alsdhfh klajsdhf akls hdf kjaslhdf hlaksdhad sf"
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
                <form role="search">
                    <label for="search">Search for stuff</label>
                    <input id="search" type="search" name='search' placeholder="Search your paper!" autofocus required />
                    <button type="submit">Go</button>
                </form>

            </div>
            <div className='main-display'>

                {data?.map((s, index) => (
                    <Summary key={s._id} id={index + 1} name={s.title ?? `Research Paper ${index + 1}`} sum4={s.summary400} sum6={s.summary600} />
                ))}




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
