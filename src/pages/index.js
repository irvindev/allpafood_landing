import Image from 'next/image';
import Link from 'next/link';
import '../styles/index.scss';
import Container from '@mui/material/Container';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import MenuCard from '../components/menu/MenuCard.js';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import platoIntro1 from '../assets/img/plato_intro_1.png';
import platoIntro2 from '../assets/img/plato_intro_2.png';
import platoIntro3 from '../assets/img/plato_intro_3.png';

import allpafoodImg from '../assets/img/allpafood_img.png';

import comoFunciona1 from '../assets/img/como_funciona1.png';
import comoFunciona2 from '../assets/img/como_funciona2.png';
import comoFunciona3 from '../assets/img/como_funciona3.png';
import comoFunciona4 from '../assets/img/como_funciona4.png';

import menu1 from '../assets/img/menu_1.png';

import icoStart from '../assets/img/ico_start.png';
import icoTestimonio from '../assets/img/ico_testimonio.png';
import AnimateBlock from './../components/anim/anim';
import NoteAtencion from './../components/noteAtencion/noteAtencion';
import PlanesList from './../components/planes/planes';

import plato1 from '../assets/img/plato1.png';
import plato2 from '../assets/img/plato2.png';
import plato3 from '../assets/img/plato3.png';
import plato4 from '../assets/img/plato4.png';
import plato5 from '../assets/img/plato5.png';
import plato6 from '../assets/img/plato6.png';
import plato7 from '../assets/img/plato7.png';
import plato8 from '../assets/img/plato8.png';
import plato9 from '../assets/img/plato4.png';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {

  const { asPath } = useRouter();

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

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth"});
  };

  useEffect(()=>{
    const hash = asPath.split('#')[1];
    scrollToSection(hash)
  },[])

  return (
    <div className="inlineBlock pageBox">

      {true &&
      <section className="secBox pageTop introSection">
        <Container>
          <div className="inlineFlex introBox">
            <div className="titleBox1">
              <h1>
                Descubre el mejor servicio de comida saludable a domicilio
              </h1>
              <p>Comida fresca, equilibrada y lista para disfrutar en la puerta de tu casa💚</p>
              <Link href="#planes" className={'btnGreen'}>
                Empieza ahora
              </Link>
            </div>
            <figure className="introImg">
              <Image className="plato1" src={platoIntro1} />
              <Image className="plato2" src={platoIntro2} />
              <Image className="plato3" src={platoIntro3} />
            </figure>
          </div>
        </Container>
      </section>
      }
      {true &&
      <section className="secBox secBeneficios">
        <Container>
          <div className="sBeneficiosBox">
            <AnimateBlock classDemo={'titleBox2'}>
              <h2>¿Cómo funciona Allpa Food?</h2>
            </AnimateBlock>
            <div className="inlineFlex sBeneficiosList">
              <AnimateBlock classDemo={'secBeneficiosItem'}>
                <div className="num">01</div>
                <figure>
                  <Image src={comoFunciona1} />
                </figure>
                <div className="txt">
                  <h3>Elige tu plan ideal</h3>
                  <p>Selecciona el plan que mejor se adapte a ti: Almuerzos, Almuerzos y Cenas, o Desayuno, Almuerzo y Cena. Diseñamos cada opción según tu objetivo: bajar de peso, mantenerte en forma o aumentar masa muscular.</p>
                </div>
              </AnimateBlock>
              <AnimateBlock classDemo={'secBeneficiosItem'}>
                <div className="num">02</div>
                <figure>
                  <Image src={comoFunciona2} />
                </figure>
                <div className="txt">
                  <h3>Recibe tu menú semanal</h3>
                  <p>Cocinamos con ingredientes frescos y te entregamos puntualmente en la puerta de tu casa u oficina, sin costos ocultos ni trámites complicados.</p>
                </div>
              </AnimateBlock>
              
              <AnimateBlock classDemo={'secBeneficiosItem'}>
                <div className="num">03</div>
                <figure>
                  <Image src={comoFunciona3} />
                </figure>
                <div className="txt">
                  <h3>Disfruta y alcanza tus metas</h3>
                  <p>Olvídate de cocinar y preocuparte por tu alimentación. Con Allpa Food comes rico, saludable y sin esfuerzo. ¡Empieza hoy y transforma tu alimentación!</p>
                </div>
              </AnimateBlock>
              <AnimateBlock classDemo={'secBeneficiosItem'}>

                <div className="num">04</div>
                <figure>
                  <Image src={comoFunciona4} />
                </figure>
                <div className="txt">
                  <h3>Conoce tus objetivos</h3>
                  <p>En este punto, programarás una consulta con un nutricionista que te ayudará a definir tus objetivos y lo que deseas lograr.</p>
                </div>

              </AnimateBlock>
            </div>
            
          </div>

        </Container>
      </section>
      }
      {true &&
      <section className="secBox secPlanes" id={'planes'}>
        <Container>
          <div className="inlineBlock sPlanesBox">
            
            <AnimateBlock classDemo={'titleBox2'}>
              <h2>¿Conoce nuestros <strong>planes</strong>?</h2>
              <p>todos los dias disfruta de 2 opciones de almuerzos, cenas, desayunos, snacks,  bebidas .</p>
              <small>📌 Elige tus platos favoritos después de adquirir tu plan y ven saludable sin esfuerzo.</small>
            </AnimateBlock>


            <PlanesList />
            <NoteAtencion />
          </div>
        </Container>
      </section>
      }
      {true &&
      <section className="secBox secMenu">
        <Container>
          <div className="sMenuBox">
            <AnimateBlock classDemo={'titleBox2'}>
              <h2>Conoce nuestro <strong>menú</strong></h2>
            </AnimateBlock>
            <AnimateBlock classDemo={'sMenuList'}>
              {menuList && menuList.length > 0 &&
                <Swiper
                  slidesPerView={3}
                  spaceBetween={20}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    640: {
                      slidesPerView: 1,
                    },
                    767: {
                      slidesPerView: 2,
                    },
                    1300: {
                      slidesPerView: 3,
                    },
                    3000: {
                      slidesPerView: 3,
                    },
                  }}
                  modules={[Pagination]}
                  className="sMenuSwiper"
                >
                  {menuList.map((item)=>(
                    <SwiperSlide>
                      <MenuCard 
                        nombre={item.name}
                        texto={item.descripcion}
                        image={item.img} 
                        calorias={item.calorias + ' kcal.'}
                        carbo={item.carbohidratos + ' Gr.'}
                        grasas={item.grasas + ' Gr.'}
                        proteinas={item.proteinas + ' Gr.'}

                      />
                    </SwiperSlide>
                  ))}

                </Swiper>
              }
            </AnimateBlock>
          </div>
        </Container>
      </section>
      }
      {true &&
      <section className="secBox secAllpafood" id={'preguntas'}>
        <Container>
          <div className="inlineFlex sAllpafoodBox">
            <div className="sAllpafoodAcordion">
              <AnimateBlock classDemo={'titleBox2'}>
                <h2>¿Por que allpafood?</h2>
              </AnimateBlock>

              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  ¿Por qué elegir Allpa Food?
                </AccordionSummary>
                <AccordionDetails>
                  <p>Porque ofrecemos comida saludable, balanceada y deliciosa, diseñada para ayudarte a alcanzar tus objetivos (bajar de peso, mantenerte en forma o ganar masa muscular), sin preocuparte por cocinar.</p>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  ¿Qué tipo de comida ofrecen? 
                </AccordionSummary>
                <AccordionDetails>
                  <p>Nuestro menú está basado en versiones saludables de la comida criolla peruana, con ingredientes frescos y altos en proteína, sin perder el sabor.</p>
                </AccordionDetails>
              </Accordion>
              <Accordion >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  ¿Cómo funciona el servicio?
                </AccordionSummary>
                <AccordionDetails>
                  <p>Es simple: eliges tu plan, recibes tu menú semanal, te llevamos la comida puntualmente y disfrutas sin preocupaciones.</p>
                </AccordionDetails>
              </Accordion>

              <Accordion >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  ¿Hacen envíos a toda Lima?
                </AccordionSummary>
                <AccordionDetails>
                  <p>Realizamos delivery en distritos seleccionados. Escríbenos para confirmar si llegamos a tu zona.</p>
                </AccordionDetails>
              </Accordion>

              <Accordion >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  ¿Los platos incluyen postre o bebida?
                </AccordionSummary>
                <AccordionDetails>
                  <p>Todos nuestros planes incluyen bebidas, pero snacks saludables no.</p>
                </AccordionDetails>
              </Accordion>

              <Accordion >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  ¿Puedo cambiar algún ingrediente?
                </AccordionSummary>
                <AccordionDetails>
                  <p>Trabajamos con un menú fijo para mantener el balance nutricional, pero avísanos si tienes alguna restricción y evaluaremos opciones.</p>
                </AccordionDetails>
              </Accordion>

              <Accordion >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  ¿Qué métodos de pago aceptan?
                </AccordionSummary>
                <AccordionDetails>
                  <p>Aceptamos Tarjeta de debito/credito, transferencias bancarias, Yape y Plin.</p>
                </AccordionDetails>
              </Accordion>

              <Accordion >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3-content"
                  id="panel3-header"
                >
                  ¿Cómo me suscribo al servicio?
                </AccordionSummary>
                <AccordionDetails>
                  <p>Ingresa tus datos en nuestra aplicación y te recomendaremos el plan ideal para ti.</p>
                </AccordionDetails>
              </Accordion>
            </div>
            
            <AnimateBlock classDemo={'sAllpafoodImg'}>
              <Image src={allpafoodImg} />
            </AnimateBlock>
          </div>

        </Container>
      </section>
      }
      {true &&
      <section className="secBox secTestimonial" id={'testimonios'}>
        <Container>
          <div className="sTestBox">
            <AnimateBlock classDemo={'titleBox2'}>
              <h2>Historias de éxito</h2>
            </AnimateBlock>
            <AnimateBlock classDemo={'inlineFlex sTestList'}>
              <div className="sTestItem">
                <figure>
                  <Image src={icoTestimonio} />
                </figure>
                <div className="txt">
                  <h4>María Sánchez</h4>
                  <div className="startBox">
                    <Image src={icoStart} />
                    <Image src={icoStart} />
                    <Image src={icoStart} />
                    <Image src={icoStart} />
                    <Image src={icoStart} />
                    
                  </div>
                  <p>Allpa Food ha sido un cambio total para mí. Antes no tenía tiempo para cocinar y siempre terminaba comiendo cualquier cosa. Ahora recibo mis almuerzos saludables todos los días, con porciones justas y bien balanceadas. ¡Me encanta que todo es fresco y delicioso!</p>
                </div>
              </div>
              <div className="sTestItem">
                <figure>
                  <Image src={icoTestimonio} />
                </figure>
                <div className="txt">
                  <h4>José Ramírez</h4>
                  <div className="startBox">
                    <Image src={icoStart} />
                  </div>
                  <p>Siempre he buscado una alimentación que se ajuste a mis objetivos de entrenamiento, y Allpa Food lo logró. Sus platos son altos en proteínas y me ayudan a mantener mi energía durante todo el día. ¡100% recomendado!</p>
                </div>
              </div>
              <div className="sTestItem">
                <figure>
                  <Image src={icoTestimonio} />
                </figure>
                <div className="txt">
                  <h4>Carla Medina</h4>
                  <div className="startBox">
                    <Image src={icoStart} />
                  </div>
                  <p>Lo que más valoro de Allpa Food es la comodidad y el sabor. No solo es comida saludable, sino que realmente sabe bien. Además, el servicio es puntual y las porciones son perfectas. Gracias por hacer mi día a día más fácil y saludable.</p>
                </div>
              </div>
            </AnimateBlock>
          </div>
        </Container>
      </section>
      }
    </div>
  )
}
  