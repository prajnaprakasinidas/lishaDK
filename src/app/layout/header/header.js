import icogzLogo from '../../../assets/images/logo/logo.png'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

import DefaultProfileImage from '../../../assets/images/avatars/avatar1.png'

import IconNotificationBell from '../../../assets/images/icons/notificationBell'
import IconDownArrow from '../../../assets/images/icons/downArrow';

import './header.scss';

const Header = () => {
    return (
        <Container className="p-0" fluid>
            <Navbar className="justify-content-between" variant="white" bg="white">
                <Navbar.Brand href="/">
                    <Image className="icz-logo" src={icogzLogo} />
                </Navbar.Brand>
                <Nav className>
                    <Nav>
                        <NavDropdown
                            title={
                                <IconNotificationBell className="icz-navbarIcon icz-navbarIcon-height" />
                            }
                            className="dropdown-toggle-after-hide"
                            align="end">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                See All
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <NavDropdown
                            title={
                                <div className="icz-navUserdropdownBtn">
                                    <Image className="icz-navbarProfileImg" src={DefaultProfileImage} />
                                    <div className="icz-title">
                                        Kate Doe
                                    </div>
                                    <IconDownArrow className="icz-navbarIcon icz-navbarIcon-width ml-10" />
                                </div>
                            }
                            align="end"  >
                            <NavDropdown.Item href="#">
                                <div className="icz-title">
                                    Profile
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                <div className="icz-title">
                                    Settings
                                </div>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                <div className="icz-title">
                                    Logout
                                </div>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Nav>
            </Navbar>
        </Container>
    )
}

export default Header;