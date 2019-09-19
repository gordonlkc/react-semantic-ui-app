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

export class MobileContainer extends Component {
    state = {};

    handleSidebarHide = () => this.setState({ sidebarOpened: false });
    handleToggle = () => this.setState({ sidebarOpened: true });

    render() {
        const { children } = this.props;
        const { sidebarOpened } = this.state;
        var currentLocation = window.location.pathname;

        return (
        <Responsive
            as={Sidebar.Pushable}
            getWidth={getWidth}
            maxWidth={Responsive.onlyMobile.maxWidth}
        >
            <Sidebar
            as={Menu}
            animation='push'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
            >
            {menuItems.map((item, index) => {
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
                        <Menu.Item key={item.label}>
                            <Menu.Header>
                                {item.label}
                                <Menu.Menu>
                                    {item.subItems.map((subItem) => {
                                        return (
                                            <Menu.Item 
                                                key={subItem.label}
                                                as={subItem.type}
                                                name={subItem.label}
                                                active={currentLocation === subItem.path}
                                            >
                                                {subItem.label}
                                            </Menu.Item>
                                        ) 
                                    })}
                                </Menu.Menu>
                            </Menu.Header>
                        </Menu.Item>
                    )
                )
            })}
            </Sidebar>

            <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
                inverted
                textAlign='center'
                style={{ padding: '1em 0em' }}
                vertical
            >
                <Container>
                <Menu inverted pointing secondary size='large'>
                    <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                    </Menu.Item>
                    <Menu.Item position='right'>
                    <Button as='a' inverted>
                        Log in
                    </Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                        Sign Up
                    </Button>
                    </Menu.Item>
                </Menu>
                </Container>
            </Segment>

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
            </Sidebar.Pusher>
        </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}