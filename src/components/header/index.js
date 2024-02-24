/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./index.scss";
import logoHeader from "../../assets/logo_head.png";
import React, { useEffect, useState } from "react";

function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    // Sticky Menu Area
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    });

    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
        const header = document.querySelector(".header-section");
        const scrollTop = window.scrollY;
        scrollTop >= 150
            ? header.classList.add("is-sticky")
            : header.classList.remove("is-sticky");
    };

    return (
        <header className="header-section is-flex is-align-items-center">
            <div className="bg-content">
                <div class="columns is-multiline is-mobile">
                    <div class="column is-one-quarter is-align-items-center is-justify-content-center">
                        <img src={logoHeader} />
                    </div>
                    <div class="column is-flex is-align-items-center is-justify-content-end menu__desktop">
                        <a href="#idHome" className="linkMenu">
                            Home
                        </a>
                        <a href="#idServico" className="linkMenu">
                            Serviços
                        </a>
                        <a href="#idQuemSomos" className="linkMenu">
                            Quem Somos
                        </a>
                        <a href="#idProjetos" className="linkMenu">
                            Projetos
                        </a>
                        <a href="#idContato" className="linkMenu">
                            Contato
                        </a>
                    </div>

                    <div class="column is-flex is-align-items-center is-justify-content-end menu__mobile">
                        <nav
                            class="navbar"
                            role="navigation"
                            aria-label="main navigation"
                        >
                            <div class="navbar-brand">
                                <a
                                    role="button"
                                    className={`navbar-burger burger ${menuAberto ? "is-active" : ""}`}
                                    aria-label="menu"
                                    aria-expanded="false"
                                    onClick={toggleMenu}
                                >
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className={`menu-list ${menuAberto ? "is-open" : ""}`}>
                    <a href="#idHome" className="linkMenu" onClick={toggleMenu}>
                        Home
                    </a>
                    <a
                        href="#idServico"
                        className="linkMenu"
                        onClick={toggleMenu}
                    >
                        Serviços
                    </a>
                    <a
                        href="#idQuemSomos"
                        className="linkMenu"
                        onClick={toggleMenu}
                    >
                        Quem Somos
                    </a>
                    <a
                        href="#idProjetos"
                        className="linkMenu"
                        onClick={toggleMenu}
                    >
                        Projetos
                    </a>
                    <a
                        href="#idContato"
                        className="linkMenu"
                        onClick={toggleMenu}
                    >
                        Contato
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
