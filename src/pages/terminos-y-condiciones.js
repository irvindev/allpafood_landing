import React,{useEffect, useState} from "react";
import Container from '@mui/material/Container';

import axios from 'axios';

import '../styles/terminos-y-condiciones.scss';



const TerminosCondiciones = (props) => {

  const [data,setData] = useState();

  const getInfo = ()=>{
    axios.get('https://admin-landing.allpafood.com/wp-json/wp/v2/pages/21')
      .then((resp)=>{
        setData(resp.data)
      }).catch((err)=>{
        console.log('erro',err)
      })
  }
  useEffect(()=>{
    getInfo();
  },[])

  return (
    <div className="inlineBlock pageBox pageTop pageTyc">
        <section className="secBox introTyc">
          <Container>
            {data &&
            <div className="inlineFlex introTycBox">
              
              <div className="titleBox2">
                <h1>{data.title.rendered}</h1>
              </div>
              <div className="introTycTxt campTxt" dangerouslySetInnerHTML={{__html: data.content.rendered}}></div>
            </div>
            }
          </Container>
        </section>
    </div>
  )
};

export default TerminosCondiciones;
