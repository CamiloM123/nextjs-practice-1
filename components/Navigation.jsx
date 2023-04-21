import React from 'react'
import Link from 'next/link'

export const Navigation = () => {
  return (

    <header>
        <nav>
            <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
        </ul>
        </nav>
    </header>
    
  );
};
