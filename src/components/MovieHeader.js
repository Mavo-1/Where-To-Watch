import React, { useState } from 'react';
import Axios from 'axios';
import {
    Navbar, 
    Container, 
    Row, 
    Col, 
    Nav, 
    NavItem, 
    NavLink, 
    NavbarBrand, 
    Input, 
    Button,
} from "reactstrap"; 
import { NavLink as ReactRouterNavLink, useNavigate } from 'react-router-dom';
import "../styles/MovieHeader.css"

const Header = ( {onSearch}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const fetchMovies = async () => {
        try {
            // eslint-disable-next-line no-unused-vars
            const response = await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=688c6d4613d6417a0901d30d85ba788a&query=${searchQuery}`);
            onSearch(response.data.results); // Pass the search results to the parent component
            console.log(response.data.results)
            navigate('/movies'); // Navigate to the movies route
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

  const handleSearch = () => {
    fetchMovies();
  };

    return (
        <div className="container-fluid">
            <Navbar fixed="top">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={6}>
                            <NavbarBrand className="d-inline-block p-0" tag={ReactRouterNavLink} to="/" style={{ width: 80 }}>Logo</NavbarBrand>
                        </Col>
                        <Col xs={6} className="d-flex justify-content-end">
                            <Nav>
                                <NavItem className="d-flex align-items-center">
                                    <NavLink className="font-weight-bold" tag={ReactRouterNavLink} to="/">Home</NavLink>
                                </NavItem>
                                <NavItem className="d-flex align-items-center">
                                    <NavLink tag={ReactRouterNavLink} to="/movies">Movies</NavLink>
                                </NavItem>
                                <NavItem className="d-flex align-items-center">
                                    <NavLink tag={ReactRouterNavLink} to="/tv-shows">TV Shows</NavLink>
                                </NavItem>
                                <NavItem className="d-flex align-items-center">
                                    <Input
                                        id="searchInput"
                                        type="text"
                                        className="m-2"
                                        placeholder="Search Movie"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </NavItem>
                                <NavItem>
                                    <Button onClick={handleSearch} className="m-1" type="submit" color="primary">
                                        Search
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </div>
    );
}
export default Header;
