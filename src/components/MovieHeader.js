import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {
    Container,
    Row,
    Col,
    Navbar,
    Nav, 
    NavLink,
    NavbarBrand,
    NavItem,
    Input,
    Button,
} from "reactstrap"; 

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const fetchMovies = async () => {
        try {
            const response = await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=688c6d4613d6417a0901d30d85ba788a&query=${searchQuery}`);
            console.log('Search results:', response.data.results)
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };
 /**    
  *TODO: Make sure the search results return only accurate searchs and not any movie thats similar in title 
 */
    useEffect(() => {
        if (searchQuery !== '') {
            fetchMovies();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery]); // Only re-run the effect when searchQuery changes

    const handleSearch = () => {
        // Trigger fetchMovies function when the user clicks the search button
        fetchMovies();
    };

    return (
        <div className="container-fluid">
            <Navbar fixed="top" color="primary" light expand="sm" className="border-bottom border-grey">
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <Nav className="mr-auto" navbar>
                                <NavItem className="d-flex align-items-center">
                                    <NavLink className="font-weight-bold" href="/">
                                        <img src="" alt="Find Your Movie" className="img-fluid" style={{ width: 36 }} />
                                    </NavLink>
                                </NavItem>
                                <NavItem className="d-flex align-items-center">
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col className="d-flex justify-content-lg-center">
                            <NavbarBrand className="d-inline-block p-0" href="/" style={{ width: 80 }}></NavbarBrand>
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <Input
                                        id="searchInput"
                                        type="text"
                                        className="m-2"
                                        placeholder="Search Movie"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </Col>
                                <Col>
                                    <Button onClick={handleSearch} className="m-1" type="submit" color="primary">
                                        Search
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
