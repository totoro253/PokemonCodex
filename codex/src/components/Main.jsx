import React, { useState } from "react";
import  Card from './Card';
import PokeInfo from "./Pokemoninfo";
import axios from  'axios'

const Main = () =>  {
    //use state   to hold pokemon data
    const [pokeData,setPokedata]=useState()
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