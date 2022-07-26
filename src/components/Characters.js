import React from "react"
export default function Characters({character}) {
  console.log(character)
    return(
        <div className="Cards">
         <img src={character.image} alt="foto"></img>
         <h2>{character.name}</h2>
         <p>Cumpleaños:{character.dateOfBirth}</p>
         <p>Genero:{character.gender}</p>
         <p>Color de ojos:{character.eyeColour}</p>
         <p>Color de pelo:{character.hairColour}</p>

        </div>
    )
}