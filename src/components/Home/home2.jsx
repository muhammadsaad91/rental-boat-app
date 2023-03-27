import React, { useEffect, useState } from 'react'
import { fetchAllProducts } from '../../apis/productsApi'
import ProductCard from '../ProductCard'
import {useDispatch, useSelector} from 'react-redux'
import Error from '../Error'



const Main = () => {
  const {products, error, isFetching} = useSelector(state=>state.products)
  console.log(error)
    const dispatch = useDispatch()
    useEffect(()=>{
     fetchAllProducts(dispatch)
    }, [dispatch])
  return (
    <>
    {
        isFetching ? <div></div> :
        error ? <Error error={error} /> :

      <>
       
   


      {
      
        products &&
      <div className='ProductsPage'>

            {/* <h1 className='text-[#c09578] text-[2.5em] font-bold text-center '>ALL PRODUCTS</h1> */}
            <div className="heading">
                <h1 className="title">ALL PRODUCTS</h1>
            </div>
                   
         <div className="products">
   
      {
        products?.map((p)=>(
            <ProductCard key={p.node.handle} {...p.node} />
            ))
        }
      
         </div>
  
        </div>
  }
  </>
    }
    </>
  )
}

export default Main 