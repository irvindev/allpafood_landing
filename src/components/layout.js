import '../assets/css/global.scss';
import { Inter } from 'next/font/google';

import Header from '../components/header';
import Footer from '../components/footer';
import React, { useState, useEffect } from "react"
import { useRouter } from "next/router";
import { usePathname } from "next/navigation"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import LoaderSplash from './loader/loader';

const animationConfiguration = {
    initial: { opacity: 0,translateY: 50 },
    exit: { opacity: 0,translateY: -50},
    animate: { opacity: 1,translateY: 0 }
};


export default function RootLayout({ children }) {
  const { asPath } = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return
    }
  }, [isLoading])

  return (
    <main>
      <div className="detalleAllpaBox">
        <div className="detalleAllpa detalleAllpa1"></div>
        <div className="detalleAllpa detalleAllpa2"></div>
        <div className="detalleAllpa detalleAllpa3"></div>
        <div className="detalleAllpa detalleAllpa4"></div>
        <div className="detalleAllpa detalleAllpa5"></div>
      </div>
      <Header/>
      {isLoading && isHome ? (
          <LoaderSplash finishLoading={() => setIsLoading(false)} />
        ) : (
          <div className="effect-2">
            <AnimatePresence mode={'wait'}>
              <motion.div
                  variants={animationConfiguration}
                  initial="initial"
                  key={asPath}
                  animate="animate"
                  exit="exit"
                  transition={{ duration:0.3 }}
                  //className={'effect-2'}
              >
                  {children}
              </motion.div>
            </AnimatePresence >
          </div>
      )}

      <Footer/>
    </main>
  )
}