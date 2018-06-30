import React from 'react';

export default class Showcase extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className="jumbotron container-item">
          <h2>Blueprint Showcase (in process of implementing the layouts on <a href="https://getbootstrap.com/docs/4.1/examples/">this</a> page:</h2>
          <br/>
          <ul>
            <li>Checkout page</li>
            <li>Sign in page</li>
            <li>...</li>
          </ul>
        </div>
      </div>
    );
  }
}