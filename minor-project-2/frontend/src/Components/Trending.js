import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Trending = () => {
    const {loading,movies}=useSelector(state=>state.movies);
    const[trending,setTrending]=useState([]);
    useEffect(()=>{
        if(loading===false)
        {
            setTrending(movies.filter(item=>item.type==='trending'));
        }
    },[loading])
    return (
        <Container>
        <h4>Trendings</h4>
        <Content>
          {trending &&trending.map((movie,key)=>(
              <Wrap key={key}>
                  {movie._id}
                  <Link to={"/detail/"+ movie._id}>
                      <img src={movie.cardImg} alt={movie.title} />
                  </Link>
              </Wrap>
          ))}
        </Content>
    </Container>
    )
}

export default Trending

const Container=styled.div`

`
const Content=styled.div`
padding:0 0 26px;
display: grid;
grid-gap: 25px;
gap:25px;
grid-template-columns: repeat(4 , minmax(0 , 1fr));
@media(max-width:768px)
{
    grid-template-columns: repeat(2 , minmax(0 , 1fr));

}
`
const Wrap=styled.div`
padding-top: 56.25%;
border-radius: 10px;
box-shadow:rgb(0 0 0 /69%) 0px 26px 30px -10px,
         rgb(0 0 0/73%) 0px 16px 10px -10px;

cursor: pointer;
overflow: hidden;
position: relative;
transition: all 250ms cubic-bezier(0),cubic-bezier(0.25, 0.46, 0.45, 0.94);
border:3px solid rgba(249,249,249,0.1);

img{
    inset:0px;
    display: block;
    height:100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    z-index:1;
    top:0;
}

&:hover{
    box-shadow:rgb(0 0 0/80%) 0px 40px 58px -16px,
    rgb(0 0 0/72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249,249,249,0.8);
}
`