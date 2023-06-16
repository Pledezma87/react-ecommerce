import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/men/'


export const ShowBlogs = () => {
    
    const [products, setProducts] = useState([])
    useEffect( ()=>{
        getBlogs()
    },[])

    //procedimineto para mostrar todos los blogs
    const getBlogs = async () => {
        const res = await axios.get(URI)
        setProducts(res.data)
    }

    //procedimineto para eliminar un blog
    const deleteBlog = async (id) => {
       await axios.delete(`${URI}${id}`)
       getBlogs()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='tableTheadBg'>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            { products.map ( (product, index) => ( 
               
                                <tr key={ index }>
                                    <td> { product.name } </td>
                                    <td> { product.price } </td>
                                    <td> { product.description } </td>
                                    <td> { product.img } </td>
                                    <td> { product.category } </td>
                                    <td>
                                        <Link to={`/edit/${product._id}`} className='btn btn-info'><i className="fas fa-edit"></i></Link>
                                        <button onClick={ ()=>deleteBlog(product._id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    )

}

