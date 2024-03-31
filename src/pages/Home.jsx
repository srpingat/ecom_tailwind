import  { useEffect, useState } from 'react'
import axios from 'axios';
import { Button } from "flowbite-react";


function Home() {
    const [jokes,setJokes]=useState([])

    useEffect(()=>{
      axios.get('/api/jokes')
     .then(res=>{
      setJokes(res.data)
      console.log(res.data)
      })
     .catch(err=>{
      console.log(err)
    })
  },[])
  return (
    <>
      <h1>Connection</h1>
    <Button>Click me</Button>

    <p>{jokes.length}</p>
    {
      jokes.map((joke,index)=>(
        <div key={joke.id}>
          <h3>{joke.todo}</h3>
          <h2>{joke.userId}</h2>
        

        </div>
      ))
    }
    
    </>
  )
}

export default Home