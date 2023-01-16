import React from 'react'
import './style.css'

export default function Home() {
  return (
    <div id='home'>
      
      <div className='book-card'>

        <div id='book-cover'>
          <img 
            src="https://m.media-amazon.com/images/I/919dh4AX2hL.jpg" 
            alt="capa do livro"
          />
        </div>

        <div id='book-data'>
          <h3>O diário de um banana</h3>
          <p>Autor: Jeff Kinney</p>
          <p>Nota: 5</p>
        </div>
      </div>

      <div className='book-card'>

        <div id='book-cover'>
          <img 
            src="https://m.media-amazon.com/images/I/919dh4AX2hL.jpg" 
            alt="capa do livro"
          />
        </div>

        <div id='book-data'>
          <h3>O diário de um banana</h3>
          <p>Autor: Jeff Kinney</p>
          <p>Nota: 5</p>
        </div>
      </div>

    </div>
  )
}
