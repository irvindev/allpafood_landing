import React from "react"
import Container from '@mui/material/Container';
import '../styles/menu.scss';

import MenuCard from '../components/menu/MenuCard';

import plato1 from '../assets/img/plato1.png';
import plato2 from '../assets/img/plato2.png';
import plato3 from '../assets/img/plato3.png';
import plato4 from '../assets/img/plato4.png';
import plato5 from '../assets/img/plato5.png';
import plato6 from '../assets/img/plato6.png';
import plato7 from '../assets/img/plato7.png';
import plato8 from '../assets/img/plato8.png';
import plato9 from '../assets/img/plato4.png';


const MenuPage = () => {

    const menuList = [
        {
            id:1,
            name: 'Cerdo al vino',
            descripcion:'Filete de cerdo en salsa de vino con arroz integral y verduras',
            calorias: 550,
            carbohidratos: 60,
            proteinas: 40,
            grasas: 15,
            img:plato1
        },
        {
            id:2,
            name: 'Ají de pollo',
            descripcion:'Clásico ají de pollo con papas cocktail y arroz',
            calorias: 620,
            carbohidratos: 70,
            proteinas: 38,
            grasas: 18,
            img:plato2
        },
        {
            id:3,
            name: 'Pescado en quinua',
            descripcion:'Filete de pescado en costra de quinua con ensalada y camote dorado',
            calorias: 480,
            carbohidratos: 55,
            proteinas:35,
            grasas:12,
            img:plato3
        },
        {
            id:4,
            name: 'Albóndigas finas hierbas',
            descripcion:'Albóndigas sazonadas con garbanzos y verduras',
            calorias:580,
            carbohidratos:65,
            proteinas:42,
            grasas:14,
            img:plato4
        },
        {
            id:5,
            name: 'Arroz chiclayano',
            descripcion:'Arroz criollo con pollo y ensalada criolla',
            calorias: 600,
            carbohidratos:75,
            proteinas:36,
            grasas:12,
            img:plato5
        },
        {
            id:6,
            name: 'Crema de locro',
            descripcion:'Locro suave con chuleta y papas doradas',
            calorias: 640,
            carbohidratos: 72,
            proteinas: 40,
            grasas: 18,
            img:plato6
        },
        {
            id:7,
            name: 'Hamburguesa de atún',
            descripcion:'Hamburguesa de atún con ensalada de fideos',
            calorias:520,
            carbohidratos:60,
            proteinas:38,
            grasas:10,
            img:plato7
        },
        {
            id: 8,
            name: 'Pollo en maní',
            descripcion:'Pollo en salsa de maní con arroz integral',
            calorias:610,
            carbohidratos:68,
            proteinas:42,
            grasas:16,
            img:plato8
        },
        			
        {
            id:9,
            name: 'Pollo en champiñones',
            descripcion:'Pollo en salsa de champiñones con papas doradas y verduras',
            calorias:580,
            carbohidratos:65,
            proteinas:40,
            grasas:14,
            img:plato9
        },
        {	
            id:10,
            name: 'Lomo saltado cerdo',
            descripcion:'Lomo saltado de cerdo con arroz integral y verduras',
            calorias:590,
            carbohidratos:63,
            proteinas:42,
            grasas:13,
            img:plato1
        },
        {	
            id:11,
            name: 'Ajiaco de quinua',
            descripcion:'Quinua cremosa con pescado y arroz integral',
            calorias:530,
            carbohidratos:65,
            proteinas:38,
            grasas:10,
            img:plato2
        },
        {
            id:12,
            name: 'Arroz árabe',
            descripcion:'Arroz especiado con pollo en salsa stroganoff',
            calorias:630,
            carbohidratos:72,
            proteinas:40,
            grasas:15,
            img:plato3
        },
        {
            id:13,
            name: 'Tallarines verdes',
            descripcion:'Pasta al pesto con bistec y verduras salteadas',
            calorias:620,
            carbohidratos:78,
            proteinas:38,
            grasas:14,
            img:plato4
        },
        {
            			
            id:14,
            name: 'Estofado de carne',
            descripcion:'Estofado casero de carne molida con guarniciones',
            calorias:600,
            carbohidratos:70,
            proteinas:40,
            grasas:16,
            img:plato5
        },
        {
            id:15,
            name: 'Puré con pescado',
            descripcion:'Puré de papa con pescado en costra de quinua y verduras',
            calorias:540,
            carbohidratos:68,
            proteinas:35,
            grasas:12,
            img:plato6
        },

    ]
    return (
        <div className="inlineBlock pageBox pageTop pageMenu">
            <section className="secBox secPageMenu">
                <Container>
                    <div className="titleBox2">
                        <h1>Conoce nuestro menú diseñado para ti.</h1>
                        <p>Disfruta de comidas altas en proteínas, equilibradas y con ingredientes frescos.</p>
                    </div>
                    {menuList && menuList.length > 0 &&
                    <div className="inlineFlex pMenuList">
                        {menuList.map((item)=>(
                            <div className="pMenuItem">
                                <MenuCard 
                                    nombre={item.name}
                                    texto={item.descripcion}
                                    image={item.img} 
                                    calorias={item.calorias + ' kcal.'}
                                    carbo={item.carbohidratos + ' Gr.'}
                                    grasas={item.grasas + ' Gr.'}
                                    proteinas={item.proteinas + ' Gr.'}
                                />
                            </div>
                        ))}

                    </div>
                    }
                </Container>
            </section>
        </div>
    )
};

export default MenuPage;
