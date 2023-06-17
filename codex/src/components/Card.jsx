import React from "react";

const Card = ({pokemon,loading,infoPokemon}) =>  {
    return(
        <>
        {
            loading ? <h1>Loading</h1>:
            pokemon.map((item) => {
                return (
                    <>
                        < div className="card">
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