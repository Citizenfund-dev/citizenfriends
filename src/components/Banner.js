import React from "react";
import { Banner } from "./Images.js";
import {
  Col,
  Row
} from "reactstrap";
import SETTINGS from "../settings";
import '../assets/css/animation.scss';

const HOME_SOURCE = '/';
// eslint-disable-next-line
export default ({ img, title, svg, h }) => {
  return (
    <section
      className="ui-section -hero section section-lg section-shaped pg-250 color-main"
      style={{
        "background-size": "cover",
        "-webkit-background-size": "cover",
        "-moz-background-size": "cover",
        "-o-background-size": "cover"
      }}
    >
      <Row className="align-items-center w-100 m-0" style={{height:"100vh"}}>
        <Col lg="6" sm="0" className="anim_title container-fluid justify-content-center">
          <div style={{margin:"10% 0 0 0"}}>
            <div className="anim_box">
              <div className="anim_title">
                <span className="anim_block"></span>
                  <h1>{SETTINGS.title}<span className="d-none d-sm-block"></span></h1>
              </div>
              <div className="anim_role">
                <div className="anim_block"></div>
                <p>{SETTINGS.subtitle}</p>
              </div>
            </div>
          </div>
        </Col>
        <Col lg="6" className="text-center logo">
          <img
            className="img-fluid"
            style={{ maxWidth: "90%" }}
            alt=""
            src="static/img/citizenfriends.webp"
          />
        </Col>
      </Row>
    </section>
  );
};
