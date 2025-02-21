import '../assets/css/components/header.scss';
import Container from '@mui/material/Container';

import { useState } from 'react';

import icoFacebook from '../assets/img/ico_facebook.png';
import icoTiktok from '../assets/img/ico_tiktok.png';
import icoYoutube from '../assets/img/ico_youtube.png';
import Image from 'next/image';
import Link from 'next/link';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

import logoAllpafood from '../assets/img/allpafood_logo.png';
import icoLogin from '../assets/img/ico_iniciar_sesion.png';
import NoteAtencion from './noteAtencion/noteAtencion';
import PlanesList from './planes/planes';



const Header = () => {

    const [menuResp,setMenuResp] = useState(false);
    
    const [openPlanes, setOpenPlanes] = useState(false);
    const handleOpenPlanes = () => setOpenPlanes(true);
    const handleClosePlanes = () => setOpenPlanes(false);

    const handleOpenRespMenu = () =>{
        setMenuResp(true)
    }
    const handleCloseRespMenu = () =>{
        setMenuResp(false)
    }

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
        handleClosePlanes();
    }

    return (
        <header className="headerCont">
            <Container>
                <div className="inlineFlex headerBox">
                    <div className="headerLeft">
                        <figure className="headerLogo">
                            <Link href="/">
                                <Image src={logoAllpafood}  title={'Allpafood'} alt={'Allpafood'} />
                            </Link>
                        </figure>
                        <ul>
                            <li><Link href="menu">Menú</Link></li>
                            <li><Link href="/#testimonios">Testimonios</Link></li>
                            <li><Link href="blog">Blog</Link></li>
                            <li><Link href="empresas">Empresas</Link></li>
                        </ul>
                    </div>

                    {false &&
                        <div className="headerCta">
                            <a href="#" className="btnLogin">
                                <Image src={icoLogin} width={50} height={50} title={'Iniciar sesion'} alt={'Iniciar sesion'} />
                                <span>Inicia sesión</span>
                            </a>
                        </div>
                    }
                    <div className="headerCta">
                        <a onClick={handleOpenPlanes} className="btnLogin">
                            <Image src={icoLogin} width={50} height={50} title={'Iniciar sesion'} alt={'Iniciar sesion'} />
                            <span>Empieza ahora</span>
                        </a>
                    </div>

                    <div className="icoMenu" onClick={handleOpenRespMenu}>
                        <span></span>
                    </div>

                </div>
            </Container>
            <div className={menuResp ? 'menuResponsive menuResponsiveActive':'menuResponsive'}>
                <div className="mrClose" onClick={handleCloseRespMenu}>
                    <span></span>
                </div>
                <figure className="mrLogo">
                    <Image src={logoAllpafood}  title={'Allpafood'} alt={'Allpafood'} />
                </figure>
                <ul>
                    <li><Link onClick={handleCloseRespMenu} href="menu">Menú</Link></li>
                    <li><Link onClick={handleCloseRespMenu} href="#">Testimonios</Link></li>
                    <li><Link onClick={handleCloseRespMenu} href="blog">Blog</Link></li>
                    <li><Link onClick={handleCloseRespMenu} href="empresas">Empresas</Link></li>
                </ul>
                <div className="mrBtnLogin">
                    <a href="#" className="btnLoginResp">
                        <Image src={icoLogin} width={50} height={50} title={'Iniciar sesion'} alt={'Iniciar sesion'} />
                        <span>Inicia sesión</span>
                    </a>
                </div>
                <div className="mrRedesBox">
                    <h4>Tambien estamos en:</h4>
                    <div className="mrRedes">
                        <Link onClick={handleCloseRespMenu} href={'#'} >
                            <Image src={icoFacebook} />
                        </Link>
                        <Link onClick={handleCloseRespMenu} href={'#'} >
                            <Image src={icoTiktok} />
                        </Link>
                        <Link onClick={handleCloseRespMenu} href={'#'} >
                            <Image src={icoYoutube} />
                        </Link>
                    </div>
                </div>
            </div>
            <Modal
                open={openPlanes}
                onClose={handleClosePlanes}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="modalPlanesHome">
                    <div className="modalPlanesClose" onClick={handleClosePlanes}>
                        <CloseIcon />
                    </div>
                    <h4 className={'titleH4'}>Seleccione su plan:</h4>
                    <PlanesList closeModal={handleClosePlanes} />
                    <NoteAtencion />
                </div>
            </Modal>
        </header>
    )
};

export default Header;