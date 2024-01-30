/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./index.scss";
import logoHeader from "../../assets/logo_head.png";

function Header() {
    return (
        <header className="is-flex is-align-items-center">
            <div className="bg-content">
                <div class="columns is-multiline is-mobile">
                    <div class="column is-one-quarter">
                        <img src={logoHeader} />
                    </div>
                    <div class="column is-flex is-align-items-center is-justify-content-end">
                        <a className="linkMenu">Home</a>
                        <a className="linkMenu">Serviços</a>
                        <a className="linkMenu">Quem Somos</a>
                        <a className="linkMenu">Projetos</a>
                        <a className="linkMenu">Contato</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
