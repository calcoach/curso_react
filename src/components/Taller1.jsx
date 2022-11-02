import React from "react";
import "./styles/Taller1.css";
import image from "./assets/image.jpg";
import correo from "./assets/correo.png";
import telefono from "./assets/telefono.png";
import candado from "./assets/candado.png";
import hombre from "./assets/hombre.png";
import lista from "./assets/lista.png";
import mapa from "./assets/mapa.png";
import logo from "./assets/logo.svg";

class Taller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Jenny Jenkins",
      email: "jenny.jenkins@example.com",
      cumpleaños: "12 de marzo",
      telefono: "3019845123",
      lista:"lista",
      contraseña:"********",
      texto1:"",
      texto2:""
    };
  }

  handleClick = (e) =>{

    this.setState({
      texto2: this.state.name,
    })
  }

  render() {
    const {string1, string2} = this.props.strings;
    return (
      
      <div className="card">
        <img src={image} className="App-logo" alt="John" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div className="div">
          <p className="email" >{this.props.strings.string1}</p>
          <p className="title" >{this.props.strings.string2}</p>
          <a className="a" href="#" onClick={this.props.onChange}> 
            <img src={hombre} name="string2" title={this.state.name} id="My name is"></img>
          </a>
          <a className="a" href="#" onClick={this.props.onChange}>
            <img src={correo} name="string2" title={this.state.email} id="My email is"></img>
          </a>
          <a className="a" href="#" onClick={this.props.onChange}>
            <img src={lista} name="string2" title={this.state.cumpleaños} id="My birthay is on"></img>
          </a>
          <a className="a" href="#" onClick={this.props.onChange}>
            <img src={mapa} name="string2" title={this.state.lista} id="My list is"></img>
          </a>
          <a className="a" href="#" onClick={this.props.onChange}>
            <img src={telefono} name="string2" title={this.state.telefono} id="My phone is"></img>
          </a>
          <a className="a" href="#" onClick={this.props.onChange}>
            <img src={candado} name="string2" title={this.state.contraseña} id="My pass is"></img>
          </a>
        </div>
      </div>
    );
  }
}

export default Taller;
