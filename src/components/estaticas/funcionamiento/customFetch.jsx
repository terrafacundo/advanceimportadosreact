
export const TraerProductosporId = (a,b) => {
    return new Promise ((res)=>{
        res(a.find(pr=>pr["id"]===b))}
        )

    }