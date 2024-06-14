import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer-wrapper">
          <div className="footer-links">
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-bottom-msg">
            <p>📜 handcrafted by me and internet.</p>
          </div>
        </footer>
  )
}

export default Footer