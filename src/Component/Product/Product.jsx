import React from 'react'
import ProductApi from '../../ProductApi'
import { Button, Card } from 'react-bootstrap'
import Header from '../Header/Header';
import { useDispatch } from 'react-redux';
import { ProductCart } from '../../Services/Action/ProductAction';
import { useNavigate } from 'react-router';


function Product() {

    const dispatch = useDispatch();

    const handleClick = (data) =>{
        dispatch(ProductCart(data));

    }

    return (
        <>
            {/* <ProductApi /> */}
            <Header />
            <div className="container">
                <div className="row">
                {ProductApi.map((d)=>{
                    // console.log(d);
                    return(
                        <Card style={{width: '18rem'}} className='mb-3 me-3'>
                        <Card.Img variant="top" src={d.image} />
                        <Card.Body>
                            <Card.Title>{d.Name}</Card.Title>
                            <Card.Title>{d.Price}</Card.Title>
                            <Card.Text>
                                {d.Dec}
                            </Card.Text>
                            <Button variant="primary" onClick={()=> handleClick(d)}>Add to Cart</Button>
                        </Card.Body>
                    </Card>
                    )
                })}
                    
                </div>
            </div>
        </>
    )
}

export default Product