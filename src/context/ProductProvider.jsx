import { useEffect, useState } from 'react';
import { useForm } from '../hook/useForm';
import { ProductContext } from './ProductContext';

export const ProductProvider = ({ children }) => {
	
  const [allProducts, setAllProducts] = useState([]);
	
  const { valueSearch, onInputChange, onResetForm } = useForm({
		valueSearch: '',
	});
    
	const getGlobalProducts = async () => {
        fetch('http://localhost:3000/stock')
        .then((response) => response.json())
        .then((data) => {
          const productsData = data.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            img: item.img,
            //   sizes: item.sizes,
          }));
          console.log(productsData);
          setAllProducts(productsData);
        })
        .catch((error) => console.log(error));
	};

	useEffect(() => {
		getGlobalProducts();
	}, []);

	return (
		<ProductContext.Provider
			value={{
			  allProducts,
        onInputChange,
        valueSearch,
        onResetForm,     
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};