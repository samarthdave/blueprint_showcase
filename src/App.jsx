import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Link from 'react-router-dom/Link';
import Redirect from 'react-router-dom/Redirect';

import {
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Button,
  Alignment
} from '@blueprintjs/core';

import './App.css';
import Showcase from './components/Showcase';
import BootstrapShowcase from './components/BootstrapShowcase';

export default class App extends React.Component {
  render() {
    return [
      <Navigation />,
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/showcase" component={Showcase} />
        <Route path="/showcase/bootstrap" component={BootstrapShowcase} />
      </Switch>
    ];
  }
}

function Main() {
  return <Redirect to="/showcase/bootstrap" />;
}

function Navigation() {
  return (
    <Navbar>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>Blueprint Showcase</NavbarHeading>
        <NavbarDivider />
        <Link to='/showcase/bootstrap'><Button className="pt-minimal" icon="home" text="Bootstrap Layout" /></Link>
      </NavbarGroup>
    </Navbar>
  );
}