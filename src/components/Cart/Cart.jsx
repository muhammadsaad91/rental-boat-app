import React, { useEffect, useState } from 'react'
import { getCart } from '../../apis/cartApis'
import CartInfo from '../Cart/CartInfo'
import CartItem from '../Cart/CartItem'
import './cart.css'

const Cart = () => {
    const [cart, setCart] = useState(null)
    const cartId = localStorage.getItem('cartId')
    useEffect(()=>{
       const func = async ()=>{
        const {data } = await getCart(cartId)
        setCart(data.data.cart)
        }
        func()
    }, [cartId])

  return (
    <div className='CartPage'>
        <div className='w-[70%] flex flex-col h-[100%] gap-4'>
            {
            cart?.lines?.edges?.map((line)=>(
                <CartItem {...line.node} />
                ))
            }
        </div>
        <div className=' cartcart '>
            <CartInfo cart={cart} />
        </div>
    </div>
  )
}

export default Cart
