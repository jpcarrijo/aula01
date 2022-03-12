import React from "react";
import Filho from "./ComponentFilho";

export default props => {
  const notificarSaidaFilho = Lugar => alert(`Liberada para ${Lugar}`)
  return (
    <div>
        <Filho notificarSaida={notificarSaidaFilho}/>
    </div>
  )
}

