import React,{useState,useEffect} from "react"
import Container from '@mui/material/Container';
import '../../styles/blog.scss';

import Image from 'next/image';
import Link from 'next/link';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

import axios from 'axios';

import blogImg1 from '../../assets/img/blog_img1.png';
import icoPaymenRechazado from '../../assets/img/ico_paymen_rechazado.png';

import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"

const Blog = (props) => {

    const [noticias,setNoticias] = useState();
    const [arrayFiltered,setArrayFiltered] = useState();

    const getNoticias = ()=>{
        axios.get('https://admin-landing.allpafood.com/wp-json/wp/v2/posts')
            .then((resp)=>{
                setNoticias(resp.data)
                setArrayFiltered(resp.data)
            }).catch((err)=>{
                console.log('erro',err)
            })
    }

    const formatDate = (date ) => {
        date = String(date).split(' ');
        var days = String(date[0]).split('-');
        return parseInt(days[0])+'/'+ (parseInt(days[1]))+'/'+ parseInt(days[2]);
    }

    const pageCategories = 'https://admin-landing.allpafood.com/wp-json/wp/v2/categories';
    const [catList,setCatList] = useState();
    
    const getCategories = () =>{ 
        axios.get(pageCategories)
        .then((resp)=>{
            console.log(resp.data)
            setCatList(resp.data)
        }).catch((error)=>{
            console.log(error)
        })
    }

    const [showNot,setShowNot] = useState(false);
    const applyFilter = (filter) => {
        setShowNot(true)
        const result = []
        for (const blog of noticias){
            for (const category of blog.categories){
                if(parseInt(category)  === parseInt(filter)){
                    result.push(blog);
                    break;
                }
            }
        }
        setArrayFiltered(result);
    };

    useEffect(()=>{
        getCategories();
        getNoticias();
    },[])

    return (
        <div className="inlineBlock pageBox pageTop pageBlog">
            <section className="secBox secPageBlog">
                <Container>
                    <div className="titleBox2">
                        <h1>Blog</h1>
                    </div>

                    <div className="inlineFlex spBlogBox">
                        <div className="spBlogSidebar">
                            {catList && 
                            <div className="spbCategoriasBox">
                                <h3>Categorías</h3>
                                {catList.length > 0 ?
                                    <ul>
                                        {catList.map((item)=>{
                                            return (
                                                <li><div className={'linkCat'} onClick={()=>applyFilter(item.id)} >{item.name}</div></li>
                                            )
                                        })}
                                    </ul>
                                :
                                    <Stack spacing={1}>
                                        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
                                        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
                                        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
                                        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
                                    </Stack>
                                }
                            </div>
                            }
                            {false &&
                            <div className="spbLeidoBox">
                                <h4>Lo mas leído:</h4>
                                <ul>
                                    <li>
                                        <Link href={'#'}>
                                            <figure>
                                                <Image src={blogImg1} />
                                            </figure>
                                            <div className="txt">
                                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                                                <div className="date">
                                                    11/11/2024
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'#'}>
                                            <figure>
                                                <Image src={blogImg1} />
                                            </figure>
                                            <div className="txt">
                                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                                                <div className="date">
                                                    11/11/2024
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'#'}>
                                            <figure>
                                                <Image src={blogImg1} />
                                            </figure>
                                            <div className="txt">
                                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                                                <div className="date">
                                                    11/11/2024
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'#'}>
                                            <figure>
                                                <Image src={blogImg1} />
                                            </figure>
                                            <div className="txt">
                                                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                                                <div className="date">
                                                    11/11/2024
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            }
                        </div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={arrayFiltered  ? arrayFiltered.length + 'asdsadasd' : "empty"}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className={'spBlogList'}
                            >
                                {arrayFiltered && arrayFiltered.length ?
                                    <div className="inlineFlex spBlogListBox">
                                        {arrayFiltered.map((item)=>(
                                            <div className="spBlogItem">
                                                <figure>
                                                    {item.fimg_url ?
                                                        <Image src={item.fimg_url} width={50} height={50}/>
                                                    :
                                                        <Image src={blogImg1}  />
                                                    }

                                                    {catList && catList.length > 0 &&
                                                        <div className="cat">
                                                        {catList.map((catItem)=>{
                                                            return (
                                                                <>
                                                                    {item.categories && item.categories.length >0 &&
                                                                        item.categories.map((blogCat)=>{
                                                                            if(parseInt(blogCat)  === parseInt(catItem.id)){
                                                                                return ( <span> {catItem.name}</span>)
                                                                            }
                                                                        })  
                                                                    }
                                                                </>
                                                            )
                                                        })}
                                                        </div>
                                                    }
                                                </figure>
                                                <h3>{item.title?.rendered}</h3>
                                                <div className="txt">
                                                    {item.excerpt && item.excerpt.rendered &&
                                                        <div dangerouslySetInnerHTML={{__html: item.excerpt.rendered}}></div>
                                                    }
                                                    {item.date &&
                                                        <div className="date">
                                                            {formatDate(item.date)}
                                                        </div>
                                                    }
                                                </div>
                                                <Link href={'/blog/'+item.slug} className="btnMore">
                                                    <span>Ver más</span>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                :
                                    <div className="inlineFlex spBlogListBox">
                                        {showNot ?
                                            <div className="inlineFlex spBlogNoresult">
                                                <figure>
                                                    <Image src={icoPaymenRechazado} />
                                                </figure>
                                                <div className="txt">
                                                    <h2>Ups!</h2>
                                                    <p>No encontramos artículos para esta categoría</p>
                                                </div>
                                            </div>
                                        :
                                        <>
                                            <div className="spBlogItem">
                                                <Stack spacing={1}>
                                                    <Skeleton variant="rectangular" width={'100%'} height={180} />
                                                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
                                                    <Skeleton variant="rounded" width={'100'} height={60} />
                                                </Stack>
                                            </div>
                                            <div className="spBlogItem">
                                                <Stack spacing={1}>
                                                    <Skeleton variant="rectangular" width={'100%'} height={180} />
                                                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
                                                    <Skeleton variant="rounded" width={'100'} height={60} />
                                                </Stack>
                                            </div>
                                            <div className="spBlogItem">
                                                <Stack spacing={1}>
                                                    <Skeleton variant="rectangular" width={'100%'} height={180} />
                                                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
                                                    <Skeleton variant="rounded" width={'100'} height={60} />
                                                </Stack>
                                            </div>
                                            <div className="spBlogItem">
                                                <Stack spacing={1}>
                                                    <Skeleton variant="rectangular" width={'100%'} height={180} />
                                                    <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
                                                    <Skeleton variant="rounded" width={'100'} height={60} />
                                                </Stack>
                                            </div>
                                        </> 
                                        }
                                    </div>
                                }
                            </motion.div>
                        </AnimatePresence >
                    </div>
                </Container>
            </section>
        </div>
    )
};

export default Blog;
