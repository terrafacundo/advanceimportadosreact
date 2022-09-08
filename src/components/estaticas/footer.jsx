import React from "react";


const Footer=()=>{
    return(
    
    <footer className="footer_settings">
        <div className="pre_footer">
            <h2 className="prefooter_letra">Suscribite al Newsletter</h2>
            <div>
                <form action="">
                    <input className="newsletter_input" type="email"/>
                    <button className="newsletter_boton" type="submit"><img className="svg_footer" src="./media/send_FILL0_wght500_GRAD200_opsz40.svg"/></button>
                </form>
            </div>

        </div>

        <div className="footer_accesos_directos">
            <ul className="">
                <li>
                    <a className="flex_li_footer" href="https://www.instagram.com/advanceimportados/">
                        <img className="svg_footer" src="./media/instagram-svgrepo-com.svg"/>
                        <h3 className="letra_link_footer">Instagram.</h3>
                    </a>
                </li>
                <li className="flex_li_footer">
                    <img className="svg_footer" src="./media/mail_FILL0_wght500_GRAD200_opsz40.svg"/>
                    <h3 className="letra_link_footer">advanceimportados@gmail.com</h3>
                </li>

            </ul>

        </div>
    </footer>
    )

}

export default Footer