/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./index.scss";
import logoFooter from "../../assets/logo_footer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className="is-flex is-align-items-center">
            <div className="bg-content">
                <div class="columns">
                    <div class="column is-three-fifths is-flex is-flex-wrap-wrap is-align-items-center">
                        <div class="columns columnsInfos">
                            <div class="column is-half">
                                <div className="is-full">
                                    <img src={logoFooter} />
                                </div>
                                <div className="is-full is-flex">
                                    <a className="redeSocial is-flex is-align-items-center is-justify-content-center">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                    <a className="redeSocial is-flex is-align-items-center is-justify-content-center">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                    <a className="redeSocial is-flex is-align-items-center is-justify-content-center">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                    <a className="redeSocial is-flex is-align-items-center is-justify-content-center">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </a>
                                </div>
                            </div>
                            <div class="column columnsInfos__contatos">
                                <h3>Contato</h3>
                                <div className="is-block">
                                    <span>41 99714 0101</span>
                                    <span>contato@sixteenestudios.com</span>
                                    <span>Curitiba-PR</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span>Copyright & Design By @Sixteen Estúdios</span>
                        </div>
                    </div>
                    <div class="column">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.4427573205053!2d-49.29134432383429!3d-25.456887133957554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce37f4de146c5%3A0x8e64f815cf16730c!2sVega%20To%20Work!5e0!3m2!1spt-BR!2sbr!4v1706641342840!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="450"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
