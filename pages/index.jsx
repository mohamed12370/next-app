import React from 'react';
import Product from '../components/Product';
import Head from 'next/head';

export default function index({ products }) {
  return (
    <>
      <main className="container">
        <Head>
          <title>Home</title>
        </Head>
        <div className="main">
          {products.map((el) => (
            <Product key={el.id} product={el} />
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const req = await fetch(`https://fakestoreapi.com/products`);
  const products = await req.json();
  return {
    props: { products },
  };
}
