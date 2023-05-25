import { useEffect, useState } from 'react';
import { useForm } from '../hook/useForm';
import { ProductContext } from './ProductContext';

export const ProductProvider = ({ children }) => {
	
  const [allProducts, setAllProducts] = useState([]);

  const [active, setActive] = useState(false);
  
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
   
    const [typeSelected, setTypeSelected] = useState({
        cargo:false,
        chandal:false,
        jogger:false,
    });

    const [filteredProducts, setfilteredProducts] = useState([]);

    const handleCheckbox = e => {

        setTypeSelected({
            ...typeSelected,
            [e.target.name]: e.target.checked,
        })
        if (e.target.checked) {
			const filteredResults = allProducts.filter(product =>
				product.types
					.map(type => type.type.name)
					.includes(e.target.name)
			);
			setfilteredProducts([...filteredProducts, ...filteredResults]);
		} else {
			const filteredResults = filteredProducts.filter(
				product =>
					!product.types
						.map(type => type.type.name)
						.includes(e.target.name)
			);
			setfilteredProducts([...filteredResults]);
		}

    }


	return (
		<ProductContext.Provider
			value={{
			  allProducts,
              onInputChange,
              valueSearch,
              onResetForm,     
              active,
              setActive,
              handleCheckbox,
              filteredProducts,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};