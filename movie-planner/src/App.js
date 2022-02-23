import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components';
import Filter from './Filter';
import { motion } from 'framer-motion';
const App = () => {

    const [popular,setPopular]=useState([]);
    const [filtered,setFiltered]=useState([]);
    const [activeGenre,setActiveGenre]=useState(0);
    const fetchedPopular=async()=>{

        const res=await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=962796e0a7eb10aaa3dc7b729c5199c3');
        const fetchedData=res.data.results;
        // console.log(fetchedData);
        setFiltered(fetchedData);
        setPopular(fetchedData);
        
    }
    useEffect(()=>{
        fetchedPopular();
    },[])
  return (
    <AppStyled layout>
        <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
        {filtered?.map(movie=>(
            <motion.div layout key={movie.id}>
                <p>{movie.original_title}</p>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.original_title} />

            </motion.div>
        ))}
    </AppStyled>
  )
}
const AppStyled=styled(motion.div)`
    
    display: grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;

    img{
        width: 90%;
        height: 20vh;
        object-fit: cover;
        border-radius: 1rem;
        margin-bottom: 0.5rem;
        &:hover{
            cursor: pointer;
        }

    }

    button{
        padding: 1rem 2rem;
        border-radius: 0.4rem;
        background-color: rgba(0,0,0,0.1);
        outline: none;
        transition: all 0.4s ease-in-out;
        &:hover{
            cursor: pointer;
            background-color: #b5b5fa;
        }
    }

`
export default App