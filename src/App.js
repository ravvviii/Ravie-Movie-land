import { useEffect, useState } from "react";

import './App.css';
import SearchIcon from './search.svg'
import Moviecard from "./MovieCard";



// e17949a2  Api key

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=e17949a2";




const App = ()=>{

    const [Movies, setMovies] = useState([]);
    const [SearchTerm, setSearchTerm] = useState('')

    const searchMovies = async(titel)=>{
            const responce = await fetch(`${API_URL}&s=${titel}`)
            const data = await responce.json();
            setMovies(data.Search);
    }


    useEffect(()=>{
        searchMovies('Spiderman')

    },[])


return(
<div className="app">
    <h1>Ravi MovieLand</h1>


    <div className="search">
        <input placeholder="Search for movie"
        value={SearchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>

        <img 
        src={SearchIcon} alt="Search"
        onClick={()=>searchMovies(SearchTerm)}




        />
    </div>


    {
        Movies?.length >0 
        ? 
        ( <div className="container">
        {Movies.map((Movie)=>(
            <Moviecard movie1={Movie}/>
        ))}
        </div>) : (
            <div>
                <h2>No movies found</h2>
            </div>
        )
    }

   
</div>
    

);
}


export default App;