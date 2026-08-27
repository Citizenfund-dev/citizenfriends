import Slider from "react-slick";
import { Banner, Map } from "../components/";
import { H3, Text, Center, C1 } from "../components/Titles";
import { Overlay } from "../components/Images";
import { Col, Row } from "reactstrap";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import MapBXL from "../components/MapBXL";

// eslint-disable-next-line
export default () => {

  return (
        <span>
        <Helmet>
            <title>Citizenfund Bruxelles</title>
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
              <img src="/static/img/bxl1.png" alt=""/>
              <img src="/static/img/bxl2.jpg" alt=""/>
              <img src="/static/img/bxl3.jpg" alt=""/>
              </Slider>
            </Overlay>
            </Col>
            <Col lg="6" className="p-0">
              <Center>
                <H3>Citizenfund Bruxelles</H3>
                <Text>
                  <p> Citizenfund Bruxelles est le <C1>Citizenfund fondateur</C1>. Il a été constitué en juin 2017, il y a maintenant 9 ans, sous l’impulsion d’Alain, également fondateur de Citizenfriends. </p> <p> À l’origine, une idée simple : <C1>propager le concept de Citizenfund</C1> et permettre à chacun·e de reprendre la main sur son épargne pour la mettre au service de projets porteurs de sens. </p> <p> Citizenfund Bruxelles a ainsi été le premier fonds à donner vie à cette vision. Au fil du temps, d’autres Citizenfund ont vu le jour en Belgique, chacun ancré dans son territoire et porté par des équipes locales. </p> <p> C’est alors qu’est née Citizenfriends. Alain a voulu <C1>rassembler ces différents fonds au sein d’une même ASBL</C1>, afin de leur donner les outils, les ressources et l’accompagnement nécessaires pour bien démarrer et se développer. </p> <p> L’objectif : créer une véritable dynamique collective entre les Citizenfund, pour qu’ils puissent apprendre les uns des autres, partager leurs expériences et <C1>s’entraider au quotidien</C1>. </p> <p> 👉 Un Citizenfund fondateur, né à Bruxelles en 2017 <br/> 👉 Un concept pensé pour se développer partout en Belgique <br/> 👉 Une communauté de fonds qui partagent leurs ressources et leurs expériences </p> <p> Aujourd’hui, Citizenfund Bruxelles reste au cœur de cette histoire. Il incarne les débuts d’un mouvement qui continue de grandir, tout en participant à la dynamique collective qui permet à chaque nouveau Citizenfund de trouver sa place et de se développer. </p> <p> Parce que l’idée était de créer un fonds citoyen. <br /> Mais surtout, de créer un mouvement. </p>
                </Text>
              </Center>
            </Col>
          </Row>
        </div>
        <MapBXL />
        </section>
        </span>
    );
};