import React, { Component } from "react";
import {
  Sidebar,
  Icon,
  Button,
  Segment,
  Menu,
  Image,
  Header
} from "semantic-ui-react";

export default class SidebarExample extends Component {
  state = { visible: false };

  handleClick = () => {
    this.setState(prevState => ({
      visible: !prevState.visible
    }));
  };

  render() {
    return (
      <>
        <Button onClick={this.handleClick}>Click Me</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            vertical
            visible={this.state.visible}
            width="thin"
          >
            <Menu.Item as="a" style={{ color: "green" }}>
              <Icon name="thumbs up" />
              VSA1
            </Menu.Item>
            <Menu.Item as="a" style={{ color: "red" }}>
              <Icon name="thumbs down" />
              VSA2
            </Menu.Item>
            <Menu.Item as="a" style={{ color: "red" }}>
              <Icon name="thumbs down" />
              VSA3
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={this.state.visible}>
            <Segment basic>
              <Header as="h3">Application Content</Header>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </>
    );
  }
}
