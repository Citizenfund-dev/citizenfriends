import Slider from "react-slick";
import { Banner, Map } from "../components/";
import { H3, Text, Center, C1 } from "../components/Titles";
import { Overlay } from "../components/Images";
import { Col, Row } from "reactstrap";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";

// eslint-disable-next-line
export default () => {

  return (
        <span>
        <Helmet>
            <title>Citizenfund Brabant-Wallon</title>
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
              <img src="/static/img/bw1.jpg" alt=""/>
              </Slider>
            </Overlay>
            </Col>
            <Col lg="6" className="p-0">
              <Center>
                <H3>Citizenfund Brabant-Wallon</H3>
                <Text>
                  <p> Citizenfund Brabant-Wallon est actuellement <C1>en construction depuis plusieurs mois</C1>. Un nouveau Citizenfund qui prend forme progressivement, porté par l’envie de faire vivre le modèle du financement citoyen à impact sur le territoire du Brabant wallon. </p> <p> Mais son histoire est aussi une belle illustration de ce qui fait la force du réseau Citizenfund : <C1>l’entraide entre les fonds</C1>. </p> <p> Dès le début de cette aventure, les autres Citizenfund se sont mobilisés pour accompagner l’équipe du Brabant wallon. Leur expérience et leurs connaissances leur permettent de partager les bonnes pratiques, d’aider à construire leur structure interne et de les guider dans les différentes démarches nécessaires au lancement du fonds. </p> <p> Qu’il s’agisse des démarches administratives, de l’organisation interne ou encore de la manière de <C1>mobiliser et rencontrer la communauté de leur région</C1>, les équipes peuvent compter sur celles et ceux qui sont déjà passés par là. </p> <p> 👉 Un nouveau Citizenfund en construction <br/> 👉 Des équipes qui partagent leur expérience et leurs outils <br/> 👉 Une entraide concrète entre les fonds, au cœur du modèle Citizenfriends </p> <p> Citizenfund Brabant-Wallon montre ainsi que Citizenfriends ne se limite pas à accompagner la création de nouveaux fonds. Il permet surtout de <C1>faire vivre une communauté où chacun·e peut apprendre des autres, transmettre son expérience et contribuer à la réussite collective</C1>. </p> <p> Parce qu’un Citizenfund ne se construit jamais vraiment seul. <br /> Il se construit avec les autres. </p>
                </Text>
              </Center>
            </Col>
          </Row>
        </div>
        </section>
        </span>
    );
};