import React from "react";
import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";
import NavSocial from './NavSocial';
import SETTINGS from '../settings';
// eslint-disable-next-line
export default () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-md-between">
          <Col md="6">
            {SETTINGS.title} © {new Date().getFullYear()}
          </Col>
          <Col md="6">
            <Nav className=" nav-footer justify-content-end">
              <NavItem>
                <NavLink
                  href="https://opensource.org/licenses/MIT"
                  target="_blank"
                >
                  MIT License
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
