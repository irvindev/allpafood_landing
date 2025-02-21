import React from "react";
import './planes.scss';
import Link from 'next/link';

const PlanesList = ({closeModal}) => {

    const planesList =[
        {
            id:2,
            name:'Nutrivital',
            level:'Basico',
            price:295.99,
            regularPrice:380.99,
            properties:[
                '20 almuerzos',
                '20 refrescos',
                '2 opciones diarias',
                'Guía nutricional',
                'Delivery'
            ]
        },
        {
            id:1,
            name:'Fitfuel',
            level:'Intermedio',
            price:569.99,
            regularPrice:620.99,
            properties:[
                '20 almuerzos',
                '20 cenas',
                '20 refrescos',
                '20 Snacks',
                '2 opciones diarias',
                'Guia nutricional',
                'Delivery'
            ]
        },
        {
            id:3,
            name:'Energy',
            level:'Avanzado',
            price:869.99,
            regularPrice:969.99,
            properties:[
                '20 desayunos',
                '20 frutas',
                '20 almuerzos',
                '20 cenas',
                '20 refrescos',
                '20 snacks',
                '2 opciones diarias',
                'Guia nutricional',
                'Delivery'
            ]
        }
    ]

    const addItemCart = (item) =>{
        localStorage.setItem('cart', JSON.stringify(item));
        closeModal();
    }

    return (
        <div className="inlineFlex sPlanesList">
            {planesList.map((item,index)=>{
                return (
                <div className={'sPlanesItem ' +  'sPlanesItem'+(index+1) }>
                    <div className="tag">{item.level}</div>
                    <div className="title">
                    <h4>{item.name}</h4>
                    <h3><small className="pen">S/.</small>{Math.trunc(item.price)} <small>.99</small></h3>
                    <p>Antes s/. {item.regularPrice}</p>
                    </div>
                    <ul>
                    {item.properties.map((item)=>{
                        return (
                        <li>{item}</li>
                        )
                    })}
                    </ul>
                    <Link href={'/checkout'} onClick={()=>addItemCart(item)} className="btnSolid btnTurquesa">
                    <span>Adquirir</span>
                    </Link>
                </div>
                )

            })}
        </div>
    )
};

export default PlanesList;
