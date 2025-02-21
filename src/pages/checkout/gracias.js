import React, {useEffect} from "react";
import Container from '@mui/material/Container';

import Image from 'next/image';
import paymentRechazado from '../../assets/img/ico_paymen_aceptado.png';

import Link from 'next/link';

import '../../styles/gracias.scss';

const GraciasPage = (props) => {

  useEffect(()=>{
    localStorage.clear();
  },[])
  return (
    <div className="inlineBlock pageBox pageTop pageCheckoutGracias">
        <section className="secBox secGracias">
            <Container>
            <div className="sgBox">
              <div className="iconRechazo">
                <Image src={paymentRechazado} width={50} height={50} />
              </div>
              <h3>Su pago a procesado exitosamente</h3>
              <p>Puede seguir navegando o contactarse con nosotros gracias.</p>
              <div className="btnBox inlineFlex">
                <Link href={'/'} className="btnSolid" >
                  Seguir navegando
                </Link>
                <Link target={'_blank'} href={'https://api.whatsapp.com/send?phone=51955797697&text=Hola%2C%20Allpa%20food.%0AAcabo%20de%20afiliarme%20al%20plan%20por%20la%20pagina%20web.%20'} className="btnSolid" >
                  Contactar
                </Link>
              </div>
            </div>
            </Container>
        </section>
    </div>
  )
};

export default GraciasPage;
