import React from 'react';

import {
  Button,
  Intent,
  Card,
  Tag,
  Elevation,
  Tab,
  Tabs,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Alignment,
  Callout,
  ProgressBar
} from '@blueprintjs/core';

export default class BoostrapShowcase extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron container-item">
          <h1 className="header">Theme example</h1>
          <br/>
          <p>A clone of the bootstrap theme example located <a href="https://getbootstrap.com/docs/3.3/examples/theme/">here</a>.</p>
        </div>
        <br/>
        <ButtonShowcase />
        <br/>
        <TableShowcase />
        <br/>
        <ThumbnailShowcase />
        <br/>
        <LabelsShowcase />
        <br/>
        <BadgesShowcase />
        <br/>
        <NavsShowcase />
        <br/>
        <NavbarShowcase />
        <br/>
        <AlertsShowcase />
        <br/>
        <ProgressBarsShowcase />
      </div>
    );
  }
}

function ProgressBarsShowcase() {
  return (
    <div className="progress-bar-showcase container-item">
      <h2>Progress Bars</h2>
      <Callout>
        <ProgressBar intent={Intent.SUCCESS} value='0.9' animate />
      </Callout>
      <br/>
      <Callout>
        <ProgressBar intent={Intent.DANGER} value='0.5' animate />
      </Callout>
      <br/>
      <Callout>
        <ProgressBar intent={Intent.WARNING} value='0.3' animate />
      </Callout>
      <br/>
      <Callout>
        <ProgressBar intent={Intent.PRIMARY} value='0.7' animate />
      </Callout>
    </div>
  );
}

function AlertsShowcase() {
  return (
    <div className="alerts-showcase container-item">
      <h2>Alerts (Callouts in @blueprint/core)</h2>
      <Callout intent={Intent.NONE} title='Callout Heading'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, delectus!
      </Callout>
      <br/>
      <Callout intent={Intent.PRIMARY} title='Callout Heading'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, delectus!
      </Callout>
      <br/>
      <Callout intent={Intent.SUCCESS} title='Logged you out'>
        Click here to log in again.
      </Callout>
      <br/>
      <Callout intent={Intent.WARNING} title='Callout Warning'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, delectus!
      </Callout>
      <br/>
      <Callout intent={Intent.DANGER} title='Dangerous Content Ahead!'>
        Proceed with caution and don't touch anything.
      </Callout>
    </div>
  );
}

function NavbarShowcase() {
  return (
    <div className="container-item">
      <h2>Navbars</h2>
      <Navbar>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>Project Name</NavbarHeading>
          <NavbarDivider />
          <Button className="pt-minimal" icon="home" text="Home" />
          <Button className="pt-minimal" icon="document" text="Files" />
        </NavbarGroup>
      </Navbar>
      <br/>
      <Navbar className="pt-dark">
        <NavbarGroup>
          <NavbarHeading>Project Name</NavbarHeading>
          <input class="pt-input" placeholder="Search files..." type="text" />
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          <Button className="pt-minimal" icon="home" text="Home" />
          <Button className="pt-minimal" icon="document" text="Files" />
        </NavbarGroup>
      </Navbar>
      <br/>
    </div>
  );
}

function NavsShowcase() {
  return (
    <div className="container-item">
      <h2>Navs (Tabs in @blueprint/core)</h2>
      <Tabs id="TabsExample" selectedTabId="rx">
        <Tab id="ng" title="Angular" />
        <Tab id="mb" title="Ember" />
        <Tab id="rx" title="React" panel={<h4>React Example Panel</h4>} />
        <Tab id="bb" disabled title="Backbone" />
      </Tabs>
    </div>
  );
}

function BadgesShowcase() {
  return (
    <div className="container-item">
      <h2>Badges</h2>
      <blockquote>
        <p>TODO</p>
      </blockquote>
    </div>
  );
}

function LabelsShowcase() {
  return (
    <div className="labels-showcase container-item">
      <h2>Labels (Tags in @blueprint)</h2>
      <br/>
      <Tag intent={Intent.NONE} large interactive>Default</Tag>
      <Tag intent={Intent.PRIMARY} large interactive>Primary</Tag>
      <Tag intent={Intent.SUCCESS} large interactive>Success</Tag>
      <Tag intent={Intent.WARNING} large interactive>Warning</Tag>
      <Tag intent={Intent.DANGER} large interactive>Danger</Tag>
      <br/>
      <Tag intent={Intent.NONE} interactive>Default</Tag>
      <Tag intent={Intent.PRIMARY} interactive>Primary</Tag>
      <Tag intent={Intent.SUCCESS} interactive>Success</Tag>
      <Tag intent={Intent.WARNING} interactive>Warning</Tag>
      <Tag intent={Intent.DANGER} interactive>Danger</Tag>
    </div>
  );
}

function ThumbnailShowcase() {
  return (
    <div className="thumbnail-showcase container-item">
      <h2>Thumbnails (Cards in @blueprint/core)</h2>
      <Card interactive={true} elevation={Elevation.TWO}>
        <img src="http://via.placeholder.com/200x200" alt='Example 200x200' />
      </Card>
    </div>
  );
}

function TableShowcase() {
  return (
    <div className="container-item">
      <h2>Tables</h2>
      <blockquote>
        <p>TODO: install @blueprintjs/table</p>
      </blockquote>
    </div>
  );
}

function ButtonShowcase() {
  return (
    <div className="button-showcase container-item">
      <h2>Buttons</h2>
      <Button intent={Intent.NONE} large>Default</Button>
      <Button intent={Intent.PRIMARY} large>Primary</Button>
      <Button intent={Intent.SUCCESS} large>Success</Button>
      <Button intent={Intent.WARNING} large>Warning</Button>
      <Button intent={Intent.DANGER} large>Danger</Button>
      <br/>
      <Button intent={Intent.NONE}>Default</Button>
      <Button intent={Intent.PRIMARY}>Primary</Button>
      <Button intent={Intent.SUCCESS}>Success</Button>
      <Button intent={Intent.WARNING}>Warning</Button>
      <Button intent={Intent.DANGER}>Danger</Button>
      <br/>
      <Button intent={Intent.NONE} small>Default</Button>
      <Button intent={Intent.PRIMARY} small>Primary</Button>
      <Button intent={Intent.SUCCESS} small>Success</Button>
      <Button intent={Intent.WARNING} small>Warning</Button>
      <Button intent={Intent.DANGER} small>Danger</Button>
    </div>
  );
}