import React, { Component } from 'react'
import Taller from './Taller1'
import Title from './TitleProfesores'
import ItemUser from './ItemUser'
import UserCount from './UserCount'
import UserForm from './UserForm'


export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'Juan Guana',
      country: 'PhD En Biologia',
      email: 'juan@prueba.com',
      string1: "",
      string2:""
    }
  }

  handleChange = (e) =>{
    this.setState(({
     // [e.target.name]: e.target.value
     [e.target.name]: e.target.title,
     ['string1']: e.target.id
    }))
    
    console.log("Name: "+e.target.name+" Value: "+e.target.title + " titulo: "+e.target.id);
    console.log(e);
    
  }

 datos = {
  string1: "",
  string2:""
 }

  render() {
    return (
      <>
      {/*
      <Title />
      <Title text="Lista de Usuarios"/>
      <ItemUser objeto={this.state}/>
      <UserForm onChange={this.handleChange} user={this.state}/>
     
      <UserCount/>*/}
      <Taller onChange={this.handleChange} strings={this.state}/>
      </>
    )
  }
}

export default App