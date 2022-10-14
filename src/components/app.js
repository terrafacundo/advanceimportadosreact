import React from 'react';
import productos from './productos';

import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import Header from './estaticas/header';

import Main from './renderindex';

import Footer from './estaticas/footer';

// import { addDoc, collection } from "firebase/firestore";
// import { db } from "../firebase";


// // const add = ()=>{
// //     const datos = collection(db,"productos")
// //     productos.forEach(x=>{addDoc(datos,x)})

// // }

// // add()


const Aplicacion = () => {
    return(
        <div className='sub_body'>
            <HashRouter>
                <Header/>
                <Main/>
                <Footer/>
            </HashRouter>
        </div>
    )
}

export default Aplicacion;