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
        fetch('http://localhost:8000/men')
        .then((response) => response.json())
        .then((data) => {
          const productsData = data.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            img: item.img,
            category: item.category,
            description: item.description,
          }));
          console.log(productsData);
          setAllProducts(productsData);
        })
        .catch((error) => console.log(error));
	};

  const getProductsByID = async (id) => {

    const baseURL = "http://localhost:8000/men"
		const res = await fetch(`${baseURL}/${id}`)
        const data = await res.json();
        
        return data

  }

	useEffect(() => {
		getGlobalProducts();
	}, []);
   
    const [typeSelected, setTypeSelected] = useState({
        Cargo:false,
        Chandal:false,
        Jogger:false,
    });

    const [filteredProducts, setfilteredProducts] = useState([]);

    const handleCheckbox = e => {
      console.log(e.target.name)
        setTypeSelected({
            ...typeSelected,
            [e.target.name]: e.target.checked,
        })
        console.log(typeSelected)
        if (e.target.checked) {
			const filteredResults = allProducts.filter(product =>
				product.category === e.target.name.toLowerCase()
			);
      console.log(filteredResults)
			setfilteredProducts([...filteredProducts, ...filteredResults]);
		} else {
			const filteredResults = filteredProducts.filter(
				product => product.category !== e.target.name.toLowerCase()
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
              getProductsByID,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};