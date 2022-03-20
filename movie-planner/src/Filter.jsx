import React, { useEffect } from 'react'
const Filter = ({popular,setFiltered,activeGenre,setActiveGenre}) => {
    
    useEffect(()=>{
        if(activeGenre==0)
        {
            setFiltered(popular);
            return;
        }
        const filtered=popular.filter((movie)=>movie.genre_ids.includes(activeGenre));
        // console.log(filtered);
        setFiltered(filtered);
    },[activeGenre])
  return (
      <>
        
        <button onClick={()=>setActiveGenre(0)}>ALL</button>
        <button onClick={()=>setActiveGenre(53)}>comedy</button>
        <button onClick={()=>setActiveGenre(16)}>Action</button>
      </>
  )
}

export default Filter