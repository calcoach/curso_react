import React from "react";
import "./styles/Taller1.css"

class Taller1 extends React.Component {
  state = {};

  render() {
    const {name, country, email} = this.props.objeto;

    return (
      <div className="card">
        <p>
          <strong>Nombre: </strong> {name}
        </p>
        <p>
          <strong>Titulo Academico: </strong> {country}
        </p>
        <p>
          <strong>Correo: </strong> {email}
        </p>
      </div>
    );
  }
}
