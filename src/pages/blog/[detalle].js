
import { Container } from '@mui/material';
import Image from 'next/image';
import '../../styles/blog-detalle.scss';

import Link from 'next/link';
import DateRangeIcon from '@mui/icons-material/DateRange';

import blogImg1 from '../../assets/img/blog_img1.png';

import axios from 'axios';
import { useEffect, useState } from 'react';

function formatearFecha(fecha) {
    const fechaObjeto = new Date(fecha);
    const nombresMeses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
    const dia = fechaObjeto.getDate().toString().padStart(2, '0');
    const mes = nombresMeses[fechaObjeto.getMonth()];
    const año = fechaObjeto.getFullYear();
    return `${dia} ${mes} ${año}`;
}

export default function BlogDetalle({data}) {


    const pageCategories = 'https://admin-landing.allpafood.com/wp-json/wp/v2/categories';
    const [catList,setCatList] = useState();
    
    const getCategories = () =>{ 
        axios.get(pageCategories)
        .then((resp)=>{
            setCatList(resp.data)
        }).catch((error)=>{
            console.log(error)
        })
    }


    const [noticias,setNoticias] = useState();

    const getNoticias = ()=>{
        axios.get('https://admin-landing.allpafood.com/wp-json/wp/v2/posts')
            .then((resp)=>{
                setNoticias(resp.data)
            }).catch((err)=>{
                console.log('erro',err)
            })
    }

    useEffect(()=>{
        getCategories();
        getNoticias();
    },[])


    return (
        <div className="inlineBlock pageBox pageTop pageBlogDetalle">

            <section className="secBox secPageBlogDetalle">
                <Container>

                    <div className="sbdCont">
                        <div className="titleBox2">
                            <h2>Blog</h2>
                        </div>

                        <div className="inlineFlex sbdLayout">
                            <div className="sbdBox">
                                <Link href={'/blog'} className={'btnSolid btnVolver'}>
                                    <span>Volver</span>
                                </Link>
                                <div className="inlineFlex sbdBoxIntro">

                                    <div className="titleBoxPages titleBlog">
                                        {catList && catList.length > 0 &&
                                            <h5>
                                                {catList.map((catItem)=>{
                                                    return (
                                                        <>
                                                            {data.categories && data.categories.length >0 &&
                                                                data.categories.map((blogCat)=>{
                                                                    if(parseInt(blogCat)  === parseInt(catItem.id)){
                                                                        return ( <span> {catItem.name}</span>)
                                                                    }
                                                                })  
                                                            }
                                                        </>
                                                    )
                                                })}
                                            </h5>
                                        }
                                        {data.title && data.title.rendered &&
                                            <h1 dangerouslySetInnerHTML={{__html: data.title.rendered}}>
                                            </h1> 
                                        }
                                    </div>
                                </div>
                                <figure className={'sbdImg'}>
                                    {data.fimg_url ?
                                        <Image src={data.fimg_url} width={50} height={50} />
                                    :
                                        <Image src={blogImg1} />
                                    }
                                    <div className="sbdFecha">
                                        {data.date_gmt &&
                                            <small><DateRangeIcon /> {formatearFecha(data.date_gmt)}</small>
                                        }
                                    </div>
                                </figure>
                                <div className="inlineBlock sbdBoxDet">
                                    {data.content && data.content.rendered &&
                                        <div className="campTxt" dangerouslySetInnerHTML={{__html:data.content.rendered}}>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="sbdSidebar">
                                <div className="sbdSidebarLeido">
                                    <h4>Lo mas leído:</h4>
                                    {noticias && noticias.length &&
                                        <ul>
                                            {noticias.map((item)=>(
                                            <li>
                                                <Link href={'#'}>
                                                    <figure>
                                                        {item.fimg_url ?
                                                            <Image src={item.fimg_url} width={50} height={50}/>
                                                        :
                                                            <Image src={blogImg1}  />
                                                        }
                                                    </figure>
                                                    <div className="txt">
                                                        <h5>{item.title.rendered}</h5>
                                                        <div className="date">
                                                            {formatearFecha(item.date_gmt)}
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            ))}
                                        </ul>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export async function getServerSideProps({params}) {
    try {
        const res = await fetch('https://admin-landing.allpafood.com/wp-json/wp/v2/posts?slug='+params.detalle+'&acf_format=standard');
        const data = await res.json();
        return {
            props:{
                data:data[0]
            }
        }
    } catch (error) {
        console.log(error); 
        return false 
    }
}