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
import NotFound from './components/404';

export default class App extends React.Component {
  render() {
    return [
      <Navigation />,
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/showcase/bootstrap" component={BootstrapShowcase} />
        <Route path="/showcase" component={Showcase} />
        <Route component={NotFound} />
      </Switch>
    ];
  }
}

function Main() {
  return <Redirect to="/showcase/bootstrap" />;
}

function Navigation() {
  return (
    <Navbar className='bp3-dark'>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>Blueprint Showcase (unofficial)</NavbarHeading>
        <NavbarDivider />
        <Link to='/showcase/bootstrap'><Button className="bp3-minimal" icon="bold" text="Bootstrap Layout" /></Link>
        <Link to='/showcase/'><Button className="bp3-minimal" icon="home" text="Sign-in Page" /></Link>
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <a href="https://github.com/samarthdave/blueprint_showcase" className="bp3-button bp3-minimal bp3-icon-git-repo"></a>
      </NavbarGroup>
    </Navbar>
  );
}