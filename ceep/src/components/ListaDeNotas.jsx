import React, { Component } from "react"
import CardNota from "./CardNota/CardNota"

export class ListaDeNotas extends Component {
    render(){
        return (
            <ul>
                {Array.of("Trabalho", "Trabalho", "Estudo").map( (categoria, index) => {
                    return (
                        <li key={index}>  
                    <div>{categoria}</div>
                    <CardNota />
                    </li>
                    )
                })}
      
</ul>
        )
    }
    
}
export default ListaDeNotas;