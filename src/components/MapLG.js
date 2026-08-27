import React from 'react';
import { Center, H3, Text } from './Titles.js';
import {
  Card,
  CardText,
  Col,
  Row
} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import L from 'leaflet';
import SETTINGS from '../settings';
import 'leaflet/dist/leaflet.css'
import { Overlay } from './Images.js';
import Slider from 'react-slick';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

// eslint-disable-next-line
export default () => {
  return (
    <section className="section section-lg section-shaped pg-250" id="#map">
      <div className="h-100 w-100">
        <Row className="align-items-center m-0">
          <Col lg="6" className='p-0'>
            <Row className="align-items-center m-0">
            <Center>
              <H3 className="text-center"><FontAwesomeIcon icon={['fas', 'map-marker-alt']} /> Où le trouver </H3>
              <Text>
                  <ul style={{listStyleType: "none"}}>
                      {SETTINGS.location.entreprise ?
                          <li>
                              <FontAwesomeIcon icon={['fas', 'address-book']}/> Citizenfund Liège
                          </li>
                          : null
                      }
                      <li><FontAwesomeIcon
                          icon={['fas', 'road']}/>{` QUAI MATIVA 23 `}</li>
                      <li><FontAwesomeIcon
                          icon={['fas', 'street-view']}/>{` 4020 Liège`}</li>
                      {SETTINGS.location.phone ? (
                          <li><FontAwesomeIcon icon={['fas', 'phone']}/>{` ${SETTINGS.location.phone}`}</li>
                      ) : null
                      }
                      <li>
                          <FontAwesomeIcon icon={['fas', 'envelope']}/> <a href={`mailto:liège@citizenfund.coop`}> liège@citizenfund.coop </a>
                      </li>
                  </ul>
              </Text>
            </Center>
            </Row>
          </Col>
          <Col lg="6" className='p-0'>
            <Overlay>
                <Slider
                infinite={true}
                slidesToShow={1}
                dots={false}
                speed={3500}
                autoplaySpeed={1500}
                fade={true}
                autoplay={true}
                arrows={false}
                >
                <img src="/static/img/citizenfriends-member.jpg" alt=""/>
                </Slider>
            </Overlay>
          </Col>
        </Row>
      </div>
    </section>
  );
}