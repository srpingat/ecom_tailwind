import  { useEffect, useState } from 'react'
import axios from 'axios';
import { Button } from "flowbite-react";


const Product_list = () => {
    const [productlist,setProductlist]=useState([])
    useEffect(()=>{
        axios.get('/api/product/getall_products')
       .then(res=>{
        setProductlist(res.data.products)
        console.log(res)
        })
       .catch(err=>{
        console.log(err)
      })
    },[])

  return (
    <>
    <div>Product_list</div>

     <p>No. of products:{productlist.length}</p>
     {
      productlist.map((product,index)=>(
        <div key={product._id}>
          <h3>{product.title}</h3>
          <h2>{product.price}</h2>
          <h2>{product.description}</h2>
          <h2>{product.category}</h2>

              <Button color="dark">view</Button>


        </div>
      ))
    }
   
    </>
  )
}

export default Product_list