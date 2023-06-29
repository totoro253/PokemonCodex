import React from "react";
import Card from "./Card";
import Pokemoninfo from "./Pokemoninfo";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const Main = () => {
    //initial data set it in  a  array
    const [pokeData, setPokeData] = useState([]);
    //initial loading and  set to true
    const [loading, setLoading] = useState(true);
    //initial url
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState();

    //initial loading and make  api request.
    // take response  and return data
    const pokeFun = async () => {
        setLoading(true)
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        // set response for previous
        setPrevUrl(res.data.previous);
        // parse the array 
        getPokemon(res.data.results)
        setLoading(false)
    }
    //pass the array with the pokemons
    //set the array 
    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await axios.get(item.url)
            setPokeData(state => {
                state = [...state, result.data]
                //sort the array by id
                state.sort((a, b) => a.id > b.id ? 1 : -1)
                return state;
            })
        })
    }
    //will render url
    useEffect(() => {
        pokeFun();
    }, [url])
    return (
        <>
            <div className="container">
                <div className="left-content">
                    <Card pokemon={pokeData} loading={loading} infoPokemon={poke => setPokeDex(poke)} />
                    <div className="btn-group">
                        {prevUrl && <button onClick={() => {
                            setPokeData([])
                            setUrl(prevUrl)
                        }}>Previous</button>}

                        {nextUrl && <button onClick={() => {
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Next</button>}

                    </div>
                </div>
                <div className="right-content">
                    <Pokemoninfo data={pokeDex} />
                </div>
            </div>
        </>
    )
}
export default Main;