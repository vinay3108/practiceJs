import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recommends from './Recommends';
import Trending from './Trending';
import Viewers from './Viewers';
import { fetchMovies } from '../features/actions/movieActions';
import { useDispatch} from 'react-redux';
import WatchList from './WatchList';

const Home = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
            dispatch(fetchMovies());
    },[dispatch]);

    return (
        <Container>
            <ImgSlider/>
            <Viewers/>
            <WatchList/>
            <Recommends/> 
            <NewDisney/>
            <Originals/>
            <Trending/>
        </Container>
    );
};



export default Home

const Container=styled.main`
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
top:72px;
padding: 0 calc(3.5vw + 5px);

    &:after{
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
        content:"";
        position: absolute;
        inset:0px;
        opacity: 1;
        z-index:-1;
    }
    `
