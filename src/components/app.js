import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Header from './estaticas/header';

import Main from './renderindex';

import Footer from './estaticas/footer';



const Aplicacion = () => {
    return(
        <div className='sub_body'>
            <BrowserRouter>
                <Header/>
                <Main/>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default Aplicacion;