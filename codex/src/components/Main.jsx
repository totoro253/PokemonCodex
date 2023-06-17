import React, { useEffect, useState } from "react";
import  Card from './Card';
import PokeInfo from "./Pokemoninfo";
import axios from  'axios'

const Main = () =>  {
    //use state   to hold pokemon data
    const [pokeData,setPokedata]=useState()
    //  loading  pokemon  data
    const[loading,setLoading]=useState(true)
    //loading url
    const[url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
    const[nextUrl,setNextUrl]=useState()
    const[prevUrl,setPrevUrl]=useState()

    const pokeFun=async()=>{
        setLoading(true)
        //making API request
        const res= await axios.get(url);
        setNextUrl(res.data.next)
        setPrevUrl(res.data.previous)
        getPokemon(res.data.results)
        setLoading(false)
    }

    //initial url
    useEffect(()=>{
        pokeFun();
    },[url]  )
    return (
       <div className="container">
        <div className="left-content">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <div className="btn-group"> 
            <button>Previous</button>
            <button>Next</button>
            </div>
        </div>
        <div className="right-content"></div>
        <PokeInfo/>
       </div>
    )
}

export  default Main