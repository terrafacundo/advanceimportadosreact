import productos from "../../productos";

export const TraerProductosporId = (url) => {
    return new Promise ((res)=>{
        setTimeout(()=>{
            res(productos.find(produc=>produc.id ==url))
        },0);
    })
}