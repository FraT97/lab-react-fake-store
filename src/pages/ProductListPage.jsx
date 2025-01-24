import { useState, useEffect } from "react";

function ProductListPage() {
  const [products, setProducts] = useState([]); 

  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json()) 
      .then((data) => setProducts(data)) 
      .catch((error) => console.error("Error fetching products:", error)); 
  }, []); 

  return (
    <div className="ProductListPage">
      <h1>Product List</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px" }}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
