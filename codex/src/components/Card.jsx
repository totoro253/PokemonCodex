import React from "react";

const Card = ({pokemon,loading,infoPokemon}) =>  {
    return(
        <>
        {
            //check if data is loading
            //if it is true show pokemon 
            loading ? <h1>Loading</h1>:
            pokemon.map((item) => {
                return (
                    <>
                        < div className="card" key={item.id} onClick={()=>infoPokemon(item)}>
                        <h2>{item.id}</h2>
                        <img  src={item.sprites.front_default} alt=""/>
                        <h3>{item.name}</h3>
                         </div>
                    </>
                )
            })
        }
        
        

        </>
    )
}

export default Card;