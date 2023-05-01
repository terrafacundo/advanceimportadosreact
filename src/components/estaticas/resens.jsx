import usuario from "./media/avatar-reseña.png";
const Resenas = ({coment}) => {
    return (
      <div className="caja-resenas">
          <div className="caja-fondo-foto-usuario">
              <img src={usuario} alt="foto-usuario"/>
          </div>
          <p className="texto-resena">"{coment}"</p>
      </div>
      )
  }

  export default Resenas