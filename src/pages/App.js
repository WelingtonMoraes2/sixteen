/* eslint-disable jsx-a11y/alt-text */
// import logo from './logo.svg';
import "../styles/App.scss";
import Banner from "../components/banner";

// Serviços
import podcast from "../assets/servicos/podcast.png";
import lives from "../assets/servicos/lives.png";
import videoaulas from "../assets/servicos/videoaulas.png";

// Quem Somos
import quemSomos from "../assets/quemSomos/quemSomos.png";
import detalheEsquerdo from "../assets/quemSomos/detalhe_esquerdo.png";

// Projetos
import detalheDireito from "../assets/projetos/detalhe_direito.png";

function App() {
    return (
        <div className="App">
            <Banner />
            <div className="App__servicos" id="idServico">
                <div className="bg-content">
                    <h1>Estúdio de locação para produções audiovisuais</h1>
                    <p>
                        Aluguel de estúdio audiovisual para criadores de
                        conteúdos diversos.
                    </p>
                    <h2>Serviços</h2>

                    <div className="App__servicos--imgs">
                        <div className="App__servicos--imgs--content">
                            <div className="App__servicos--imgs--content--item is-flex is-justify-content-start">
                                <div className="fade">
                                    <h3>Videoaulas</h3>
                                </div>
                                <img src={videoaulas} />
                            </div>
                            <div className="App__servicos--imgs--content--item is-flex is-justify-content-center">
                                <div className="fade">
                                    <h3>Podcast</h3>
                                </div>
                                <img src={podcast} />
                            </div>
                            <div className="App__servicos--imgs--content--item is-flex is-justify-content-end">
                                <div className="fade">
                                    <h3>Lives</h3>
                                </div>
                                <img src={lives} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="App__quemSomos" id="idQuemSomos">
                <img
                    className="App__quemSomos--detalheEsquerdo"
                    src={detalheEsquerdo}
                />
                <div className="bg-content">
                    <div class="columns">
                        <div class="column is-two-fifths is-flex is-align-items-center is-justify-content-center">
                            <img src={quemSomos} />
                        </div>
                        <div class="column is-flex is-align-items-center">
                            <div className="App__quemSomos--text">
                                <h1>Quem Somos</h1>
                                <p>
                                    Criada em 2023, a Sixteen tem como propósito
                                    sempre estar com as melhores tecnologias
                                    para a produção visual, com foco na inovação
                                    e criatividade. Contamos histórias
                                    cativantes em conjunto com especialistas da
                                    área audiovisual e design gráfico.
                                </p>
                                <p style={{ marginTop: "40px" }}>
                                    O estúdio está em uma ótima localização de
                                    Curitiba-PR. Disponibilizamos ambientes para
                                    podcasts, lives, videoaulas ou gravações de
                                    áudio do seu projeto sendo comercial ou não.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="App__projetos" id="idProjetos">
                <img
                    className="App__projetos--detalheDireito"
                    src={detalheDireito}
                />
                <div className="bg-content">
                    <h2>Projetos</h2>
                    <p>
                        Atendemos diversos clientes de diferentes áreas como
                        esportes, tecnologia, estética e educação.
                    </p>

                    <div className="App__projetos--videos">
                        <div className="App__projetos--videos--content">
                            <div className="App__projetos--videos--content--item is-flex is-justify-content-start">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/f4TlXFaoLzo?si=YBTGVQmQ6OG06XE8"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                ></iframe>
                            </div>
                            <div className="App__projetos--videos--content--item is-flex is-justify-content-center">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/2Bv2gme-ezs?si=qhLeCCrgbU0efisf"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                ></iframe>
                            </div>
                            <div className="App__projetos--videos--content--item is-flex is-justify-content-end">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/o2uEwwLnJdI?si=WEyoJx3kuScXputt"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
