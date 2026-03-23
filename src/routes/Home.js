import Slider from "react-slick";
import { Banner, Map } from "../components/";
import { H3, Text, Center, C1 } from "../components/Titles";
import { Overlay } from "../components/Images";
import { Col, Row } from "reactstrap";
import { Helmet } from "react-helmet";

// eslint-disable-next-line
export default () => {

  return (
        <span>
        <Helmet>
            <title>Citizenfriends</title>
        </Helmet>
        <Banner/>
        <section className="section section-lg section-shaped pg-250">
        <div className="h-100" id="caroussel">
          <Row className="align-items-center m-0">
            <Col lg="6" className="p-0" style={{display:"flex"}}>
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
              <img src="/static/img/og-image.jpg" alt=""/>
              </Slider>
            </Overlay>
            </Col>
            <Col lg="6" className="p-0">
              <Center>
                <H3>Au service d’une finance citoyenne</H3>
                <Text>
                  <p>
                    Citizenfriends est une <C1>ASBL</C1> qui accompagne, structure et développe les différents Citizenfund en Belgique.
                  </p>
                  <p>
                    Les Citizenfund sont des fonds d’investissement citoyens à impact. Leur mission : financer des projets à <C1>finalité sociale, culturelle, environnementale ou éducative…</C1> des initiatives essentielles qui peinent souvent à accéder aux financements traditionnels.
                  </p>
                  <p>
                    Mais le Citizenfund ne se contente pas de financer le changement. Il change aussi la manière de faire de la finance.
                  </p>
                  <p>
                    Ici, pas de décisions prises par quelques acteurs éloignés du terrain. Chaque coopérateur·rice a une voix. Chaque décision d’investissement est prise collectivement.
                  </p>
                  <p>
                    👉 Un coopérateur = une voix <br/>
                    👉 Des décisions prises en intelligence collective <br/>
                    👉 Une finance transparente, locale et engagée
                  </p>
                  <p>
                    Les Citizenfund sont des outils citoyens, ancrés dans leur territoire, qui permettent à chacun·e de reprendre la main sur son épargne et de la diriger vers des projets porteurs de sens.
                  </p>
                  <p>
                    Citizenfriends soutient cette dynamique en facilitant la création de nouveaux fonds, en mutualisant les ressources et en accompagnant les équipes locales.
                  </p>
                  <p>
                    Parce qu’une autre finance est possible. <br />
                    Et qu’elle se construit, ensemble.
                  </p>
                </Text>
              </Center>
            </Col>
          </Row>
        </div>
        <Map />
        </section>
        </span>
    );
};