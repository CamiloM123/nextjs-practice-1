import React from 'react'
import Image from 'next/image'
import LogoGit from '../public/GitHub.png'
import LogoLin from '../public/LinkedIn.png'

export const Footer = () => {
  return (
    // Site footer
    <div>
    <footer>
    <div class="footer-page">
        <a href="www.linkedin.com/in/juan-camilo-muñoz-valencia-2b6220266">
            <Image width={35} height={35} src={LogoGit} alt='Imagen github' />
        </a>
        <a href="https://github.com/CamiloM123">
            <Image width={35} height={35} src={LogoLin} alt='Imagen linkedin' />
        </a>
        
    </div>

    <div class="row">

        <div class="col">
            <a href="./">Home</a>
        </div>
        
        <div class="col">
            <p>&copy; 2023 Created by Juan Camilo Muñoz Valencia</p>
        </div>
    </div>

    </footer>
    </div>
  )
}
