import React,{useEffect, useState} from "react";
import Container from '@mui/material/Container';
import Link from 'next/link';

import axios from 'axios';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CircularProgress from '@mui/material/CircularProgress';
import Image from 'next/image';

import icoPaymenAceptado from '../assets/img/ico_paymen_aceptado.png';

import '../styles/libro-de-reclamos.scss';

const TerminosCondiciones = (props) => {

  const [identidad, setIdentidad] = useState('');
  const [thanksPage,setThanksPage] = useState(false);
  const [loadingFrm,setLoadingFrm] = useState(false);

  const handleIdentidad = (event) => {
    setIdentidad(event.target.value);
  };

  useEffect(()=>{
    window.scrollTo({ top: 0});
  },[])

  const validationSchema = Yup.object().shape({
    lname: Yup.string().required("Ingrese su nombre por favor.").min(2).max(45),
    ldomicilio: Yup.string().required("Ingrese su nombre por favor.").min(2),
    lidentidad: Yup.string().required("Ingrese su nombre por favor."),
    lnumdoc: Yup.string().required("Ingrese su nombre por favor.").min(7),
    lcorreo: Yup.string().email().required("Ingrese su nombre por favor."),
    lmontoreclamado: Yup.string().required("Ingrese su nombre por favor.").min(2),
    lmrdescripcion: Yup.string().required("Ingrese su nombre por favor.").min(2),
    ldetreclamo: Yup.string().required("Ingrese su nombre por favor.").min(2),
    linfopedido: Yup.string().required("Ingrese su nombre por favor.").min(2)
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    shouldUnregister: true,
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    
    setLoadingFrm(true)
    
    window.scrollTo({ top: 0});
    
    const emailBody = {
      "nombres_completos": data.lname,
      "domicilio": data.ldomicilio,
      "tipo_documento": data.lidentidad,
      "numero_documento": data.lnumdoc,
      "correo": data.lcorreo,
      "monto_reclamado": data.lmontoreclamado,
      "descripcion": data.lmrdescripcion,
      "detalles_reclamo": data.ldetreclamo,
      "informacion_pedido": data.linfopedido,
      "_wpcf7_unit_tag": "3aea4f5"
    };
  
    const form = new FormData();
    for (const field in emailBody) {
        form.append(field, emailBody[field]);
    }

    axios.post(`https://admin-landing.allpafood.com/wp-json/contact-form-7/v1/contact-forms/29/feedback`,form).then((resp)=>{
      setLoadingFrm(false)
      setThanksPage(true)
    }).catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div className="inlineBlock pageBox pageTop pageLibro">
        <section className="secBox secLibro">
          <Container>

            <div className="inlineFlex sLibroCont">
            
                {thanksPage === false ?
                    <div className="libroBox">
                        <div className="titleBox2">
                            <h1>Libro de reclamos</h1>
                            <p>Antes de hacer un reclamo asegúrese de haber leído nuestros <Link href={'/terminos-y-condiciones'} target="_blank">términos y condiciones</Link>, muchas gracias.</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Grid container spacing={3}>
                            <Grid item xs={12} md={6} sm={12}>
                                <div className="textFieldLib">
                                    <p>Nombres completos:</p>
                                    <TextField
                                    className='blueFieldTxt'
                                    fullWidth
                                    variant="outlined" 
                                    name="lname"
                                    id="lname"
                                    {...register("lname")}
                                    error={errors.lname ? true : false}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} sm={12}>
                                <div className="textFieldLib">
                                    <p>Domicilio:</p>
                                    <TextField
                                        className='blueFieldTxt'
                                        fullWidth
                                        variant="outlined" 
                                        name="ldomicilio"
                                        id="ldomicilio"
                                        {...register("ldomicilio")}
                                        error={errors.ldomicilio ? true : false}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4} sm={12}>
                                <div className="textFieldLib">
                                    <p>Tipo de documento:</p>
                                    <FormControl fullWidth variant="outlined"  className='blueFieldSelect'>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="lidentidad"
                                            fullWidth
                                            value={identidad}
                                            name="lidentidad"
                                            label="lidentidad"
                                            {...register("lidentidad")}
                                            onChange={handleIdentidad}
                                            error={errors.lidentidad ? true : false}
                                        >
                                            <MenuItem key={'asdad213s'} value={'DNI'}>DNI</MenuItem>
                                            <MenuItem key={'asda1231ds'} value={'Pasaporte'}>Pasaporte</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4} sm={12}>
                                <div className="textFieldLib">
                                    <p>Número de documento:</p>
                                    <TextField
                                        className='blueFieldTxt'
                                        fullWidth
                                        //label="Número de documento"
                                        variant="outlined" 
                                        name="lnumdoc"
                                        id="lnumdoc"
                                        type={'number'}
                                        {...register("lnumdoc")}
                                        error={errors.lnumdoc ? true : false}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4} sm={12}>
                                <div className="textFieldLib">
                                    <p>Correo:</p>
                                    <TextField
                                        className='blueFieldTxt'
                                        fullWidth
                                        //label="Correo"
                                        variant="outlined" 
                                        name="lcorreo"
                                        id="lcorreo"
                                        {...register("lcorreo")}
                                        error={errors.lcorreo ? true : false}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={4} sm={12}>
                                <div className="textFieldLib">
                                    <p>Monto reclamado:</p>
                                    <TextField
                                        className='blueFieldTxt'
                                        fullWidth
                                        //label="Monto reclamado"
                                        variant="outlined" 
                                        name="lmontoreclamado"
                                        id="lmontoreclamado"
                                        type={'number'}
                                        {...register("lmontoreclamado")}
                                        error={errors.lmontoreclamado ? true : false}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={8} sm={12}>
                                <div className="textFieldLib">
                                    <p>Descripción:</p>
                                    <TextField
                                        className='blueFieldTxt'
                                        fullWidth
                                        //label="Descripción"
                                        variant="outlined" 
                                        name="lmrdescripcion"
                                        id="lmrdescripcion"
                                        {...register("lmrdescripcion")}
                                        error={errors.lmrdescripcion ? true : false}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={12} sm={12}>
                                <div className="subTitle">
                                    <h4>Detalle de Reclamación y Pedido del consumidor</h4>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={12} sm={12}>
                                <div className="textFieldLib">
                                    <p>Detalles del reclamo:</p>
                                    <TextField
                                        className='blueFieldTxt'
                                        fullWidth
                                        //label="Detalles del reclamo"
                                        variant="outlined" 
                                        name="ldetreclamo"
                                        id="ldetreclamo"
                                        {...register("ldetreclamo")}
                                        error={errors.ldetreclamo ? true : false}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={12} sm={12}>
                                <div className="textFieldLib">
                                    <p>Información del Pedido:</p>
                                    <TextField
                                        className='blueFieldTxt'
                                        fullWidth
                                        //label="Información del Pedido"
                                        variant="outlined" 
                                        name="linfopedido"
                                        id="linfopedido"
                                        {...register("linfopedido")}
                                        error={errors.linfopedido ? true : false}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} md={12} sm={12}>
                                <div className="libroBtnBox">
                                    <div className="note">
                                        * El proveedor deberá dar respuesta al reclamo en un plazo no mayor a quince(15) hías hábiles.
                                    </div>
                                    <button type='submit' className={'btnSolid'}>Enviar</button>
                                </div>
                            </Grid>
                            </Grid>
                        </form>
                        {loadingFrm !== false &&
                            <div className="libroLoading">
                                <span>
                                    Enviando reclamo...
                                </span>
                                <CircularProgress />
                            </div>
                        }
                    </div>
                :
                    <div className="libroBox">
                        <div className="libroResult">

                            <h3>Gracias por escribirnos</h3>
                            <p>Enseguida atenderemos su reclamo gracias.</p>
                            <figure>
                                <Image src={icoPaymenAceptado} />
                            </figure>
                            <Link href={'/'}  className={'btnSolid'}>
                                Seguir Navegando
                            </Link>
                        </div>
                    </div>
                }

              
            </div>

          </Container>
        </section>
    </div>
  )
};

export default TerminosCondiciones;
