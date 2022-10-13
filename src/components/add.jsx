import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";


const add = ()=>{
    const datos = collection(db,"productos")
    console.log(datos)
}

add()