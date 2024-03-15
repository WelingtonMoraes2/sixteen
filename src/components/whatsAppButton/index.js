/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./index.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/5541997490101"
            class="float"
            target="_blank"
            rel="noreferrer"
        >
            <FontAwesomeIcon className="my-float" icon={faWhatsapp} />
        </a>
    );
}

export default WhatsAppButton;
