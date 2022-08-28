import React from 'react';
import Link from 'next/link';
import styel from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <>
      <nav className={styel.nav}>
        <div className={styel.container + ' container'}>
          <div className={styel.logo}>
            <h1> Logo </h1>
          </div>
          <div className={styel.links}>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/cart">
                  <a>Cart</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
