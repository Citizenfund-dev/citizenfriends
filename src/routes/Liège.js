import Slider from "react-slick";
import { Banner, Map } from "../components/";
import { H3, Text, Center, C1 } from "../components/Titles";
import { Overlay } from "../components/Images";
import { Col, Row } from "reactstrap";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import MapLG from "../components/MapLG";

// eslint-disable-next-line
export default () => {

  return (
        <span>
        <Helmet>
            <title>Citizenfund Liège</title>
        </Helmet>
        <Navbar />
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
              <img src="/static/img/liege1.jpg" alt=""/>
              <img src="/static/img/liege2.jpg" alt=""/>
              </Slider>
            </Overlay>
            </Col>
            <Col lg="6" className="p-0">
              <Center>
                <H3>Citizenfund Liège</H3>
                <Text>
                  <p> Citizenfund Liège est le <C1>troisième Citizenfund à avoir tenté l’expérience</C1> en Belgique, après Citizenfund Bruxelles et Citizenfund Charleroi Métropole, aujourd’hui malheureusement fermé. </p> <p> Créé en mai 2025, Citizenfund Liège est né de l’envie de faire vivre le modèle du <C1>financement citoyen à impact</C1> sur le territoire liégeois et de permettre aux citoyen·nes de soutenir directement des projets porteurs de sens. </p> <p> Depuis sa création, le fonds ne cesse de grandir. De plus en plus de personnes rejoignent l’aventure et deviennent coopérateur·rices, faisant grandir une communauté engagée autour d’une autre manière de penser l’investissement. </p> <p> Et cette dynamique se traduit aussi concrètement sur le terrain : <C1>de plus en plus de projets sont soutenus</C1>, dans des domaines aussi variés que le social, la culture, l’environnement ou l’éducation. </p> <p> 👉 Créé en mai 2025 <br/> 👉 Une communauté de coopérateur·rices en pleine croissance <br/> 👉 Des projets locaux soutenus et toujours plus nombreux </p> <p> Citizenfund Liège participe ainsi à la construction d’un réseau de fonds citoyens qui partagent une même ambition : <C1>mettre l’épargne au service de leur territoire</C1> et donner aux citoyen·nes un rôle actif dans les décisions d’investissement. </p> <p> Une nouvelle aventure qui commence à Liège. <br /> Et qui ne demande qu’à grandir. </p>
                </Text>
              </Center>
            </Col>
          </Row>
        </div>
        <MapLG />
        </section>
        </span>
    );
};