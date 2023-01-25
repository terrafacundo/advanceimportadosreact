import wppLogo from "./estaticas/media/wpplogo.webp"
import igLogo from "./estaticas/media/iglogo.webp"
const AccesosDirectos =()=>{
    return(
        <div className="shortcut-man">
            <a href={"https://wa.me/+5401173656656"} target="_blank">
                <img src={wppLogo} className="shortcut"/>
            </a>
            <a href={"https://www.instagram.com/advanceimportados/"} target="_blank">
                <img src={igLogo} className="shortcut"/>
            </a>
        </div>

    )
}
export default AccesosDirectos