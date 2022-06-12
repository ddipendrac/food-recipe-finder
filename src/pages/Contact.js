import { Link } from 'react-router-dom'
import React from 'react'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact-page'>
      <div className='contact-container'>
        <div className='upper-container'>
          <img className='avatar' src='/images/avatar.jpg' />

          <div className='details'>
            <div className='name'>
              Dipendra Chaudhary
            </div>
            <div className='email'>
              ddipendrac@gmail.com
            </div>
            <a href="https://www.github.com/ddipendrac" className='github'>
            github.com/ddipendrac
            </a>
          </div>

          <div className='lower-container'>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact

{/* <div className='contact-page'>
      <div className='contact-container'>
        <div className='upper-container'>
          <img className='avatar' src='/images/avatar.jpg' />
          
          <div className='details'>
            <div className='name'>
              Dipendra Chaudhary
            </div>
            <div className='email'>
              ddipendrac@gmail.com
            </div>
            <a href="https://www.github.com/ddipendrac" className='github'>
            github.com/ddipendrac
            </a>
          </div>
        </div>

        <div className='lower-container'>
          Lower
        </div>
      </div>
    </div> */}