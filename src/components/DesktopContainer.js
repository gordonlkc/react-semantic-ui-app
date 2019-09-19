import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
    Button,
    Container,
    Dropdown,
    Grid,
    Header,
    Icon,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react';

const menuItems = [
    {
        label: 'Home',
        path: '/',
        type: 'a'
    },
    {
        label: 'Links',
        type: 'dropdown',
        subItems: [
            {
                label: 'Link1',
                path: '/link1',
                type: 'a'
            },
            {
                label: 'Link2',
                path: '/link2',
                type: 'a'
            },
        ]
    }
];

const getWidth = () => {
    const isSSR = typeof window === 'undefined'
  
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

export class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
  
    render() {
      const { children } = this.props
      const { fixed } = this.state
      var currentLocation = window.location.pathname;
  
      return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ padding: '1em 0em' }}
              vertical
            >
              <Menu
                fixed={fixed ? 'top' : null}
                inverted
                pointing={!fixed}
                secondary={!fixed}
                size='large'
              >
                <Container>
                    {menuItems.map((item) => {
                        return (
                            (item.type == 'a') ?
                            (
                                <Menu.Item 
                                    key={item.label}
                                    as={item.type}
                                    name={item.label}
                                    active={currentLocation === item.path}
                                >
                                    {item.label}
                                </Menu.Item>
                            ) :
                            (
                                <Dropdown item key={item.label} text={item.label}>
                                    <Dropdown.Menu>
                                        {item.subItems.map((subItem) => {
                                            return (
                                                <Dropdown.Item
                                                    key={subItem.label}
                                                    active={currentLocation === subItem.path}
                                                >
                                                    {subItem.label}
                                                </Dropdown.Item>
                                            )
                                        })}
                                    </Dropdown.Menu>
                                </Dropdown>
                            )
                        )
                    })}
                  <Menu.Item position='right'>
                    <Button as='a' inverted={!fixed}>
                      Log in
                    </Button>
                    <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Container>
              </Menu>
            </Segment>
          </Visibility>
  
          {children}

          <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container>
              <Grid divided inverted stackable>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='About' />
                    <List link inverted>
                      <List.Item as='a'>Sitemap</List.Item>
                      <List.Item as='a'>Contact Us</List.Item>
                      <List.Item as='a'>Religious Ceremonies</List.Item>
                      <List.Item as='a'>Gazebo Plans</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='Services' />
                    <List link inverted>
                      <List.Item as='a'>Banana Pre-Order</List.Item>
                      <List.Item as='a'>DNA FAQ</List.Item>
                      <List.Item as='a'>How To Access</List.Item>
                      <List.Item as='a'>Favorite X-Men</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={7}>
                    <Header as='h4' inverted>
                      Footer Header
                    </Header>
                    <p>
                      Extra space for a call to action inside the footer that could help re-engage users.
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
        </Responsive>
      )
    }
  }
  
  DesktopContainer.propTypes = {
    children: PropTypes.node,
  }
  