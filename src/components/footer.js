import '../assets/css/components/footer.scss';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Link from 'next/link';

import logoAllpafood from '../assets/img/allpafood_logo.png';

import icoFacebook from '../assets/img/ico_facebook.png';
import icoTiktok from '../assets/img/ico_tiktok.png';
import icoYoutube from '../assets/img/ico_instagram.png';
import icoCorazon from '../assets/img/ico_corazon.png';
import icoWebing from '../assets/img/ico_webing.png';

import icoLibroReclamos from '../assets/img/ico_libro_reclamos.png';

const Footer = () => {
    return (
        <footer className="footerCont">
            {true &&
            <Container>
                <div className="inlineFlex footerBox">
                    <div className="footerItem">
                        <figure className="footerLogo">
                            <Image src={logoAllpafood} />
                        </figure>
                    </div>
                    <div className="footerItem">
                        <h4>Enlaces de interés:</h4>
                        <ul>
                            <li>
                                <Link href={'/menu'}>Menú</Link>
                            </li>
                            <li>
                                <Link href={'/#testimonios'}>Testimonios</Link>
                            </li>
                            <li>
                                <Link href={'/blog'}>Blog</Link>
                            </li>
                            <li>
                                <Link href={'/empresas'}>Empresas</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footerItem">
                        <h4>Enlaces de ayuda:</h4>
                        <ul>
                            <li>
                                <Link href={'/terminos-y-condiciones'}>Términos y condiciones</Link>
                            </li>
                            <li>
                                <Link href={'/politicas-de-privacidad'}>Política de privacidad</Link>
                            </li>
                            <li>
                                <Link href={'/#preguntas'}>Preguntas frecuentes</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footerItem">
                        <h4>Siguenos:</h4>
                        <div className="footerRs">
                            <Link target={'_blank'} href={'https://www.facebook.com/people/Allpa-food/100083646030451/?locale=es_LA'} >
                                <Image src={icoFacebook} />
                            </Link>
                            <Link target={'_blank'} href={'https://www.tiktok.com/@allpafood?lang=es'} >
                                <Image src={icoTiktok} />
                            </Link>
                            <Link target={'_blank'} href={'https://www.instagram.com/allpafood/'} >
                                <Image src={icoYoutube} />
                            </Link>
                        </div>
                        <Link href={'/libro-de-reclamos'} className="footerLibro">
                            <Image src={icoLibroReclamos} />
                            Libro de reclamos
                        </Link>
                    </div>
                </div>
            </Container>
            }
            {true &&
            <div className="inlineBlock footerCopy">
                <Container>
                    <div className="inlineFlex footerCopyBox">
                        <div className="copy">
                            <p>2024 © Allpa food. Todos los derechos reservados.</p>
                        </div>
                        <div className="webing">
                            <p>Desarrollado con <Image src={icoCorazon} /> <Image src={icoWebing} /></p>
                        </div>
                    </div>
                </Container>
            </div>
            }
        </footer>
    )
};

export default Footer;