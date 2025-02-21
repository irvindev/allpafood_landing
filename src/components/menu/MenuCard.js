import React from "react"
import Image from 'next/image';

import './menuCard.scss';

const MenuCard = ({nombre,texto,image,calorias,carbo,grasas,proteinas}) => {
  return (
        <div className="sMenuItem">
            <h4>{nombre}</h4>
            <p>{texto}</p>
            <figure>
                <Image src={image} />
                <div className="sMenuInfoLbl calorias">
                    <p>{calorias}</p>
                    <small>Calorías</small>
                </div>
                <div className="sMenuInfoLbl carbo">
                    <p>{carbo}</p>
                    <small>Carbohidratos</small>
                </div>
                <div className="sMenuInfoLbl grasas">
                    <p>{grasas}</p>
                    <small>Grasas</small>
                </div>
                <div className="sMenuInfoLbl prote">
                    <p>{proteinas}</p>
                    <small>Proteínas</small>
                </div>
            </figure>
        </div>
  )
};

export default MenuCard;
