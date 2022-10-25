import React from 'react'
import Taller from './Taller1'
import Title from './TitleProfesores'
import ItemUser from './ItemUser'
import UserCount from './UserCount'

const data = {
    name: 'Juan Guana',
    country: 'PhD En Biologia',
    email: 'juan@prueba.com'
}

const App = () => {
  return (
    <>
    {/*<Title text="Lista de Usuarios"/>
    <Title />
    <ItemUser objeto={data}/>*/}
    <Taller/>
    <UserCount/>
    </>
  )
}

export default App