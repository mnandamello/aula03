import React from 'react'
import './Corpo.css'
import logo from './logo.svg'

export default function Corpo() {
  return (
    <div className='corpo'>
      <h1>Meu Titulo</h1>
      <h2>Meu Subtitulo</h2>
      <img className='App-logo' src="{logo}" alt="logo" />
    </div>
  )
}
