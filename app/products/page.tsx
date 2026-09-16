"use client";

import { useEffect, useState } from "react";

export default function Products() {
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <h1>Product Information</h1>

      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
        </div>
      ) : (
        <p>Loading product...</p>
      )}
    </div>
  );
}