
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux'
export default function Headers() {

    const  {carts} = useSelector((state)=>state.allCart)
    return (
        <div>
            <Navbar style={{ height: "60px", background: 'black', color: 'white' }}>
                <Container>
                    <NavLink to ='/home' className='text-decoration-none text-light mx-2'>
                    <h3 className='text-light'>ECOM</h3>
                    </NavLink>
                   
                   <NavLink to='/cart' className='text-decoration-none text-light mx-2'>
                   <div id='ex-4' style={{ position: 'relative' }}>
                        <span className='p1' style={{ position: 'relative' }}>
                            <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'white' , fontSize:'30px'}} />
                        </span>
                        <span className="badge" style={{ position: 'absolute', top: '0', right: '-10px', backgroundColor: 'red', color: 'white', borderRadius: '50%', padding: '5px 8px', fontSize: '10px' }}> {carts.length}</span>
                    </div>
                   </NavLink>
                </Container>
            </Navbar>
        </div>
    );
}
