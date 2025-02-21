import React, { useEffect, useState } from "react"
import Container from '@mui/material/Container';
import '../../styles/checkout.scss';

import Image from 'next/image';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from 'axios';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';

import paymentRechazado from '../../assets/img/ico_paymen_rechazado.png';

import KRGlue from '@lyracom/embedded-form-glue'

import FlatwareIcon from '@mui/icons-material/Flatware';
import { useRouter } from 'next/router';
import CloseIcon from '@mui/icons-material/Close';

import allpafoodImg from '../../assets/img/allpafood_logo.png';

const Checkout = (props) => {

  const [cart,setCart] = useState();
  const router = useRouter();
  const envUrl = process.env.NEXT_PUBLIC_URL

  useEffect(()=>{
    const cartTemp = JSON.parse(localStorage.getItem('cart'));
    setCart(cartTemp);
  },[]);

  const paymentPop = (tokenForm,keysPublic,info) =>{
    //Endpoint de izipay
    let endpoint = "https://static.micuentaweb.pe";

    //Configurar libreria con los datos recibidos de su servidor
    KRGlue.loadLibrary(endpoint, keysPublic).then(({ KR }) => {
        KR.setFormConfig({
            formToken: tokenForm,
            'kr-language': 'es-ES',
        });

        //Incrustar la pasarela
        KR.attachForm('#micuentawebstd_rest_wrapper').then(({ KR, result }) => {
          KR.showForm(result.formId);
        });

        //Al recibir la respuesta enviar a su servidor a validar los datos
        KR.onSubmit( paymentData => {
          axios.post(envUrl+'subscriptions/payments/validate', {
            'kr-answer': paymentData.rawClientAnswer,
            'kr-hash': paymentData.hash,
          })
          .then(response => {
            if (response.status === 200) {
              const emailBody = {
                "nombres": info.fnombres,
                "apellidos": info.fapellidos,
                "correo": info.fcorreo,
                "telefono": info.ftelefono,
                "direccion": info.fdirección,
                "distrito": info.fdistrito,
                "plan": cart ? cart.name : '--',
                "total": cart ? cart.price : 99,
                "_wpcf7_unit_tag": "faa4020"
              };
            
              const form = new FormData();
              for (const field in emailBody) {
                  form.append(field, emailBody[field]);
              }
          
              axios.post(`https://admin-landing.allpafood.com/wp-json/contact-form-7/v1/contact-forms/6/feedback`,form).then((resp)=>{
                //console.log('correo enviado')
              }).catch((error)=>{
                console.log(error)
              })
          
              router.push('/checkout/gracias');
            }
          }).catch((error)=>{
            console.log(error);
          })
          return false;
        });
    })
    
  }

  const validationSchema = Yup.object().shape({
    fnombres: Yup.string()
                    .required('Ingrese un telefono valido por favor.')
                    .min(3,'Ingrese un telefono valido por favor.'),
    fapellidos: Yup.string()
                    .required('Ingrese un telefono valido por favor.')
                    .min(3,'Ingrese un telefono valido por favor.'),
    fcorreo: Yup.string().required('ingrese un correo valido').email().matches(/^(?!.*@[^,]*,)/),
    ftelefono: Yup.string()
            .required('Ingrese un telefono valido por favor.')
            .max(15,'Ingrese un telefono valido por favor.')
            .min(5,'Ingrese un telefono valido por favor.'),
    fdirección: Yup.string()
            .required('Ingrese un telefono valido por favor.')
            .min(3,'Ingrese un telefono valido por favor.'),
    fdistrito: Yup.string()
            .required('Ingrese un telefono valido por favor.')
            .min(3,'Ingrese un telefono valido por favor.'),
  });

  const [bodyFields,setBodyFields] = useState({
      fnombres:'',
      fapellidos:'',
      fcorreo:'',
      ftelefono:'',
      fdirección:'',
      fdistrito:''
  });

  const handleFieldChange = (e) => {
      setBodyFields({
          ...bodyFields,
          [e.target.name]:e.target.value
      })
  }

  const {
      register,
      handleSubmit,
      formState: { errors },
  } = useForm({
      mode: "all",
      shouldUnregister: true,
      resolver: yupResolver(validationSchema),
  });

  const [paymentToken,setPaymentToken] = useState();
  const [loadDataForm,setLoadDataForm] = useState(false);

  
  const onSubmitHandler = (data) => {

    setLoadDataForm(true);
    axios.post(envUrl+'subscriptions/payments/create', {
        customer:{
            name: data.fnombres,
            lastname: data.fapellidos,
            phoneNumber: data.ftelefono,
            email: data.fcorreo,
            address: data.fdirección,
            district: data.fdistrito
        },
        planId:cart ? cart.id : 99
    }).then((resp)=>{
      setPaymentToken(resp.data.data);
      paymentPop(resp.data.data.token,resp.data.data.publicKey,data);

      setLoadDataForm(false);
      handleOpenMPayment();
    }).catch((error)=>{
      console.log(error)
      setLoadDataForm(false);
      handleOpenMGracias();
    });
  };

  const [openMGracias, setOpenMGracias] = useState(false);
  const handleOpenMGracias = () => setOpenMGracias(true);
  const handleCloseMGracias = () => setOpenMGracias(false);

  const [openMPayment, setOpenMPayment] = useState(false);
  const handleOpenMPayment = () => setOpenMPayment(true);
  const handleCloseMPayment = () => setOpenMPayment(false);

  return (
    <div className="inlineBlock pageBox pageTop pageBlog">

        <section className="secBox secCheckoutpage">
            <Container>
                <div className="titleBox2">
                    <h1>Carrito de compra</h1>
                </div>

                <div className="inlineFlex scpBox">
                  <div className="scpPaper scpResumen">
                    <h3>Resumen:</h3>

                    {cart &&
                      <div className="scpResumenItem">
                        <div className="title">
                          <div className="icon">
                          <FlatwareIcon />
                          </div>
                          <h2>{cart.name}</h2>
                        </div>
                        <ul>
                          {cart.properties.map((item)=>{
                            return (<li>{item}</li>)
                          })}
                        </ul>
                        <div className="priceBox">
                          <small>Antes S/. {cart.regularPrice}</small>
                          <h4>S/. {cart.price}</h4>
                          
                        </div>
                      </div>
                    }
                    {cart &&

                      <div className="inlineBlock scpPaper scpForm">
                        <h3>Completa tus datos para finalizar la compra:</h3>
                          <form className={'inlineBlock'} onSubmit={handleSubmit(onSubmitHandler)}>
                            <Grid container spacing={2}>
                              <Grid item xs={12} sm={12} md={6}>
                                  <div className="textFieldReg">
                                      <p>Nombres</p>
                                      <TextField 
                                          variant="outlined" 
                                          id="fnombres" 
                                          name="fnombres" 
                                          value={bodyFields ? bodyFields.fnombres : ''}
                                          error={errors.fnombres ? true : false}
                                          {...register("fnombres")} 
                                          onChange={handleFieldChange}
                                      />
                                  </div>
                              </Grid>
                              <Grid item xs={12} sm={12} md={6}>
                                  <div className="textFieldReg">
                                      <p>Apellidos</p>
                                      <TextField 
                                          variant="outlined" 
                                          id="fapellidos" 
                                          name="fapellidos" 
                                          value={bodyFields ? bodyFields.fapellidos : ''}
                                          error={errors.fapellidos ? true : false}
                                          {...register("fapellidos")} 
                                          onChange={handleFieldChange}
                                      />
                                  </div>
                              </Grid>
                              <Grid item xs={12} sm={12} md={6}>
                                  <div className="textFieldReg">
                                      <p>Correo</p>
                                      <TextField 
                                          variant="outlined" 
                                          id="fcorreo" 
                                          name="fcorreo" 
                                          value={bodyFields ? bodyFields.fcorreo : ''}
                                          error={errors.fcorreo ? true : false}
                                          {...register("fcorreo")} 
                                          onChange={handleFieldChange}
                                      />
                                  </div>
                              </Grid>
                              <Grid item xs={12} sm={12} md={6}>
                                  <div className="textFieldReg">
                                      <p>Teléfono</p>
                                      <TextField 
                                          variant="outlined" 
                                          id="ftelefono" 
                                          name="ftelefono" 
                                          type={'tel'}
                                          value={bodyFields ? bodyFields.ftelefono : ''}
                                          error={errors.ftelefono ? true : false}
                                          {...register("ftelefono")} 
                                          onChange={handleFieldChange}
                                      />
                                  </div>
                              </Grid>

                              <Grid item xs={12} sm={12} md={6}>
                                  <div className="textFieldReg">
                                      <p>Dirección</p>
                                      <TextField 
                                          variant="outlined" 
                                          id="fdirección" 
                                          name="fdirección" 
                                          value={bodyFields ? bodyFields.fdirección : ''}
                                          error={errors.fdirección ? true : false}
                                          {...register("fdirección")} 
                                          onChange={handleFieldChange}
                                      />
                                  </div>
                              </Grid>
                              <Grid item xs={12} sm={12} md={6}>
                                  <div className="textFieldReg">
                                      <p>Distrito</p>
                                      <TextField 
                                          variant="outlined" 
                                          id="fdistrito" 
                                          name="fdistrito" 
                                          value={bodyFields ? bodyFields.fdistrito : ''}
                                          error={errors.fdistrito ? true : false}
                                          {...register("fdistrito")} 
                                          onChange={handleFieldChange}
                                      />
                                  </div>
                              </Grid>
                              <Grid item xs={12} sm={12} md={12}>
                                {cart && 
                                  <>
                                    {!loadDataForm ?
                                      <button type={'submit'} className="btnSolid">
                                        Pagar S/. {cart.price}
                                      </button>
                                    :
                                      <div className="btnLoading">
                                        <CircularProgress size={30} />
                                      </div>
                                    }
                                  </>
                                }
                              </Grid>
                            </Grid>
                          </form>
                      </div>
                    
                    }

                  </div>
                  <div className="scpPaper scpTotal">
                    <h3>Total</h3>
                    {cart &&
                      <ul>
                        <li>
                          <span>Delivery</span>
                          <strong>Gratis</strong>
                        </li>
                        <li>
                          <span>Sub total</span>
                          <strong>S/. { cart.regularPrice }</strong>
                        </li>
                        <li>
                          <span>Descuento</span>
                          <strong>S/. { cart.regularPrice - cart.price }</strong>
                        </li>
                        <li>
                          <span>Total</span>
                          <strong>S/. { cart.price }</strong>
                        </li>
                      </ul>
                    }

                  </div>
                </div>
                

            </Container>
        </section>

        <Modal
          open={openMGracias}
          onClose={handleCloseMGracias}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="paymentResp">
            <div className="paymentRespClose" onClick={handleCloseMGracias}>
              <CloseIcon />
            </div>
            <div className="iconRechazo">
              <Image src={paymentRechazado} width={50} height={50} />
            </div>
            <h3>Lo sentimos, su pago a sido rechazado.</h3>
            <p>Revise los datos personales y su tarjeta de débito/crédito</p>
            <div className="btnSolid" onClick={handleCloseMGracias}>
              Intentarlo nuevamente
            </div>
          </div>
        </Modal>

        
        <Modal
          open={openMPayment}
          onClose={handleCloseMPayment}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
            <div id="micuentawebstd_rest_wrapper">
              <div className="paymentRespClose" onClick={handleCloseMPayment}>
                <CloseIcon />
              </div>
              <figure>
                <Image src={allpafoodImg} />
              </figure>
              <div className="kr-embedded"></div>
            </div>
        </Modal>

    </div>
  )
};

export default Checkout;
