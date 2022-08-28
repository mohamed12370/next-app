import React from 'react';
import Image from 'next/image';
import style from '../../styles/productData.module.css';

export default function SingleProducts({ product }) {
  const { title, price, description, category, image } = product;
  return (
    <>
      <div className={style.product + ' container'}>
        <div>
          <Image src={image} width="300" height={500} />
        </div>
        <div>
          <h2>{title}</h2>
          <h2>{category}</h2>
          <h1>{price} $</h1>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const req = await fetch(`https://fakestoreapi.com/products`);
  const products = await req.json();
  const paths = products.map((el) => {
    return {
      params: { id: el.id.toString() },
    };
  });
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const req = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await req.json();
  return {
    props: { product },
  };
}
