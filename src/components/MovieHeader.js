import React from 'react';
import {
    Container,
    Row,
    Col,
    Navbar,
    Nav, 
    Alert,
} from "reactstrap"; 


const Header = () => {

    return (
        <div className='container-fluid'>
        <Alert>
        <strong>Make sure movie is spelled correctly</strong>
        </Alert>

        <Navbar fixed="top" color='danger' light expand="sm" className='border-bottom border-grey'>
            <Container>
                <Row className='align-items-center'>
                    <Col>
                        <Nav className='mr-auto'></Nav>
                    </Col>
                </Row>
            </Container>
        </Navbar>
<h1>Hello this works</h1>
        </div>
    )
}

export default Header;