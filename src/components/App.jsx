import React from 'react'
import Title from './TitleProfesores'
import ItemUser from './ItemUser'

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
    <Taller1 objeto={data}/>
    </>
  )
}

export default App