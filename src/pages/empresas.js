
import Container from '@mui/material/Container';
import '../styles/empresas.scss';

import Image from 'next/image';
import Link from 'next/link';


import platoIntro1 from '../assets/img/plato_intro_1.png';
import platoIntro2 from '../assets/img/plato_intro_2.png';
import platoIntro3 from '../assets/img/plato_intro_3.png';

import empresaImg1 from '../assets/img/empresa_img1.png';
import empresaImg2 from '../assets/img/empresa_img2.png';

import icoPlan1 from '../assets/img/ico_empresa1.png';
import icoPlan2 from '../assets/img/ico_empresa2.png';

const Empresas = (props) => {
  return (
    <div className="inlineBlock pageBox pageTop pageEmpresas">
      <section className="secBox introEmpresaSection">
        <Container>
          <div className="inlineFlex introEmpresaBox">
            <div className="titleBoxEmpresa">
              <h1>
                Impulsa la salud y el bienestar de tu empresa
              </h1>
              <p>Allpafood, brinda planes de comida con una amplia variedad de opciones para mejorar la salud y el bienestar de tu empresa. Programa una demo para conocer las opciones.</p>
              <Link href="#" className={'btnGreen'}>
                Empieza ahora
              </Link>
            </div>
            <figure className="introEmpresaImg">
              <Image className="plato1" src={empresaImg1} />
            </figure>
          </div>
        </Container>
      </section>
      <section className="secBox pEmpPlanes">
        <Container>
          <div className="pEmpPlanesBox">
            <div className="titleBox2">
              <h2>Entregamos planes de alimentación en América Latina</h2>
              <p>Nuestra plataforma de alimentación saludable ha entregado millones de órdenes en Perú, México y Colombia.</p>
            </div>
            <div className="pEmpPlanesList">
              <ul>
                <li>
                  <Image src={icoPlan1} />  
                  <div className="txt">
                    <h3>2.5M+</h3>
                    <small>Órdenes entregadas</small>
                  </div>
                </li>
                <li>
                  <Image src={icoPlan2} />  
                  <div className="txt">
                    <h3>30k+</h3>
                    <small>Usuarios comiendo sano</small>
                  </div>
                </li>
              </ul>
              <div className="imgBox">
                <figure>
                  <Image src={empresaImg2} />
                </figure>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="secBox introEmpresaSection">
        <Container>
          <div className="inlineFlex introEmpresaBox">
            <div className="titleBoxEmpresa">
              <h1>
              ¡Un menú variado para alcanzar objetivos!
              </h1>
              <p>
                En Allpafood, ofrecemos recomendaciones sobre las calorías diarias necesarias para alcanzar objetivos nutricionales.A partir de estas recomendaciones, encontrarás múltiples opciones de platos con diversos valores nutricionales para programar la semana con nuestro menú diario y también opciones a la carta para que los disfrutar en cualquier momento.  
              </p>
              <Link href="#" className={'btnGreen'}>
                Empieza ahora
              </Link>
            </div>
            <figure className="introEmpresaImg2">
              <Image className="plato1" src={platoIntro1} />
              <Image className="plato2" src={platoIntro2} />
              <Image className="plato3" src={platoIntro3} />
            </figure>
          </div>
        </Container>
      </section>
      <section className="secBox pEmpFilosofia">
        <Container>
          <div className="pEmpFilosofiaBox">
            <div className="titleBox2">
              <h2>Nuestra filosofía de comida</h2>
              <p>Todas nuestras comidas son frescas, saludables, variadas, fáciles de 
              administrar y con entregas flexibles.</p>
            </div>
            <div className="inlineFlex pEmpFilosofiaList">
              <div className="pEmpFilosofiaItem">
                <figure></figure>
                <div className="txt">
                  <h4>
                    Fresco y saludable
                  </h4>
                  <p>
                    con ingredientes naturales
                  </p>
                </div>
              </div>
              <div className="pEmpFilosofiaItem">
                <figure></figure>
                <div className="txt">
                  <h4>
                    Variedad única
                  </h4>
                  <p>
                    Menú diario y a la carta conbowls, ensaladas, sándwiches,hamburguesas y más
                  </p>
                </div>
              </div>
              <div className="pEmpFilosofiaItem">
                <figure></figure>
                <div className="txt">
                  <h4>
                    Entregas flexibles
                  </h4>
                  <p>
                    Recibe en tu casa o en tu oficina
                  </p>
                </div>
              </div>
              <div className="pEmpFilosofiaItem">
                <figure></figure>
                <div className="txt">
                  <h4>
                    Fácil de administrar
                  </h4>
                  <p>
                    Programa hasta las 10pm del día anterior o recibe hoy 45 - 60 min
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
};

export default Empresas;
