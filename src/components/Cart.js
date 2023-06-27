import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card,Button } from 'react-bootstrap'
import { remove } from '../store/cartSlice'


const Cart = () => {
  const productCart = useSelector(state=>state.cart)
  const dispatch =useDispatch()
  
  const removeItem = (product) => {
    dispatch(remove(product))
  }

  const card = productCart.map((product) => (
    <div className="col-md-12" style={{ marginBottom: "10px" }}>
      <Card key={product.id} className="h-100" >
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>₹ {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="danger" onClick={()=>removeItem(product.id)} >Remove Item</Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <div>
  { card}

  {console.log(productCart)}
    </div>
  )
}

export default Cart