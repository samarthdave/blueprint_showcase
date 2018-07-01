import React from 'react';
import {
  Button,
  Card,
  Elevation,
  Checkbox,
  ControlGroup,
  InputGroup,
  Intent
} from '@blueprintjs/core';

export default class Showcase extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <div className="jumbotron container-item">
            <h1 className="header">Sign In Page</h1>
            <br/>
            <p>from the layout <a href="https://getbootstrap.com/docs/4.1/examples/sign-in/">here</a></p>
          </div>
        </div>
        <SignInPage />
      </React.Fragment>
    );
  }
}

function SignInPage() {
  return (
    <div className="flex-container">
      <div className="row">
        <Card className="flex-card" elevation={Elevation.THREE}>
          <h2>Please sign in</h2>
          <br/>
          <ControlGroup fill={true} vertical={true}>
            <InputGroup placeholder="Username" leftIcon='person' large />
            <InputGroup placeholder="Password" leftIcon='lock' large />
          </ControlGroup>
          <br/>
          <Checkbox label="Remember Me" />
          <Button intent={Intent.PRIMARY} large>Sign in</Button>
        </Card>
      </div>
    </div>
  );
}