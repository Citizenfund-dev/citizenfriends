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
              <H3 className="text-center"><FontAwesomeIcon icon={['fas', 'map-marker-alt']} /> Où nous trouver </H3>
              <Text>
                  <ul style={{listStyleType: "none"}}>
                      {SETTINGS.location.entreprise ?
                          <li>
                              <FontAwesomeIcon icon={['fas', 'address-book']}/>
                              {SETTINGS.location.entreprise.url
                                  ? <a href={SETTINGS.location.entreprise.url}> {SETTINGS.location.entreprise.name}</a>
                                  : SETTINGS.location.entreprise}
                          </li>
                          : null
                      }
                      <li><FontAwesomeIcon
                          icon={['fas', 'road']}/>{` ${SETTINGS.location.street} ${SETTINGS.location.number}`}</li>
                      <li><FontAwesomeIcon
                          icon={['fas', 'street-view']}/>{` ${SETTINGS.location.CP} ${SETTINGS.location.town}`}</li>
                      {SETTINGS.location.phone ? (
                          <li><FontAwesomeIcon icon={['fas', 'phone']}/>{` ${SETTINGS.location.phone}`}</li>
                      ) : SETTINGS.location.local ? (
                          <li><FontAwesomeIcon icon={['fas', 'door-open']}/>{` ${SETTINGS.location.local}`}</li>
                      ) : null
                      }
                      <li>
                          <FontAwesomeIcon icon={['fas', 'envelope']}/>
                          <a href={`mailto:${SETTINGS.location.email}`}>
                              {` ${SETTINGS.location.email}`}
                          </a>
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
                <img src="/static/img/banner.png" alt=""/>
                </Slider>
            </Overlay>
          </Col>
        </Row>
      </div>
    </section>
  );
}