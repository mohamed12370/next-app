import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from '../styles/product.module.css';

export default function Product({ product }) {
  const { title, price, image, id } = product;
  return (
    <div className={style.product}>
      <div>
        <Image src={image} width="200" height="200" />
      </div>
      <ul>
        <li> {title}</li>
        <li> {price}$</li>
      </ul>
      <Link href={`/products/${id}`}>
        <a className="button">More Details</a>
      </Link>
    </div>
  );
}
