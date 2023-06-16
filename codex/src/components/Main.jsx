import React from "react";
import  Card from './Card';
import PokeInfo from "./Pokemoninfo";

const Main = () =>  {
    return (
       <div className="container">
        <div className="left-content">
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