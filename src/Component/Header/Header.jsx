import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import {HiMiniShoppingCart} from 'react-icons/hi2'
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
function Header() {

    const navigate = useNavigate();
    const pro_add = useSelector(state => state.carts);

    return (
        <Navbar bg="primary" data-bs-theme="dark" className='mb-4'>
            <Container>
                <Navbar.Brand style={{fontSize:"25px"}}  onClick={() => navigate('/')}>Store</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Button variant="primary" onClick={() => navigate('/cart')}>
                    <HiMiniShoppingCart style={{fontSize:'23px'}}/> <Badge bg="dark">{pro_add.length}</Badge>
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header