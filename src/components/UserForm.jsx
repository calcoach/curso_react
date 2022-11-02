import React, { Component } from 'react'
import "./styles/UserForm.css"

export class UserForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            country: '',
            email: ''
        }
    }

  handleChange = (e) =>{

    this.setState({
        [e.target.name]: e.target.textContent
    })
    
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state);
    this.props.onChange(this.state)
  }

  render() {
    const {name, country, email} = this.props.user 
    return (
      <div>
        <h2 className='title-form'>Nuevo Usuario</h2>
        <form className='form' onSubmit={this.handleSubmit}>
            <div className='input-form'>
                <label>Nombre: </label>
                <input type="text" name="name" onChange={this.props.onChange} value={this.props.user.name}/>
            </div>
            <div className='input-form'>
                <label>Pais: </label>
                <input type="text" name="country" onChange={this.props.onChange} value={this.props.user.country}/>
            </div>
            <div className='input-form'>
                <label>Correo: </label>
                <input type="text" name="email" onChange={this.props.onChange} value={this.props.user.email}/>
            </div>
            <button type='submit'>Agregar</button>
        </form>
      </div>
    )
  }
}

export default UserForm