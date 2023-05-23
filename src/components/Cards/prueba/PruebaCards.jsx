import { useState, useEffect } from 'react';



const CardsPrueba = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate a request to the JSON database to fetch the data
    fetch('http://localhost:3000/stock')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <div className="card-container">
      {products.map((product) => (
       <div key={product.id}>
        <img src={product.img}/>
       </div>
      ))}
    </div>
  );
};

export default CardsPrueba;