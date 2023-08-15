import { Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Removeproduct } from '../../Services/Action/ProductAction';
import Header from '../Header/Header';

function Cart() {

    const { carts } = useSelector(state => state);
    const dispatch = useDispatch()
    // console.log("Cart", carts);

    const handleRemove = (id) => {

        dispatch(Removeproduct(id))

    }

    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Table striped bordered hover className='mt-4'>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Product Dec</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                carts.map((d) => {
                                    return (
                                        <tr>
                                            <td><img src={d.image} style={{ width: "100px", height: "100px" }} /></td>
                                            <td>{d.Name}</td>
                                            <td>{d.Price}</td>
                                            <td>{d.Dec}</td>
                                            <td><button className='btn btn-danger' onClick={() => handleRemove(d.id)}>
                                                Remove
                                            </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </Table>
                </Row>
            </Container>
        </>

    );
}

export default Cart;