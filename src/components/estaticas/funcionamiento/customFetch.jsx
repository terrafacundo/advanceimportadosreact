
export const TraerProductosporId = (a,b) => {
    console.log(a);console.log(b)
    return new Promise ((res)=>{
        res(a.find(pr=>pr["id"]===b))}
        )

    }