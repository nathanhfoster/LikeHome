import React, { Component } from 'react';
import logo from './logo.svg';
import LikeHomeLogo from './assets/LikeHomeLogo.png';
import './App.scss';

import {Nav, Navbar, NavItem, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';
import Counter from './components/Counter';
import SearchBar from './components/SearchBar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Reservation from './views/Reservation/Reservation';
import Favorites from './views/Favorites/Favorites';
import Account from './views/Account/Account';

class App extends Component {
  render() {
    return (
      <Router>

      <div className="App">
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">
              <img src={LikeHomeLogo} className="LikeHomeLogo" alt="logo" href="#"/>
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
          <Nav pullRight>
            <NavItem>
              <Link to="/reservations">Reservations</Link>
            </NavItem>
            <NavItem>
              <Link to="/favorites">Favorites</Link>
            </NavItem>
            <NavItem>
              <Link to="/account">Account</Link>
            </NavItem>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
  
        <Route path="/reservations" component={Reservation}/>
        <Route path="/favorites" component={Favorites}/>
        <Route path="/account" component={Account}/>
      </div>
      </Router>

    );
  }
}

export default App;