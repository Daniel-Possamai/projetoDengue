import { useState } from 'react'
import './hero.scss'


export default function Hero() {

    const conscientize = 'A dengue é uma doença viral transmitida pelo mosquito Aedes aegypti. É crucial que todos estejam informados sobre os sintomas, que incluem febre alta, dores no corpo e nas articulações, e manchas vermelhas na pele. Em casos graves, a dengue pode levar à morte. Conhecer esses sinais e entender como a doença se espalha é o primeiro passo para combatê-la.'
    const previna = 'A prevenção é a chave para evitar a dengue. Elimine qualquer local que possa acumular água parada, como vasos de plantas, pneus velhos e garrafas. Use repelentes, instale telas de proteção nas janelas e portas, e vista roupas que cubram a maior parte do corpo. Essas medidas ajudam a reduzir a proliferação do mosquito e protegem você e sua família.'
    const capacite = 'Capacitar-se significa estar preparado para agir. Participe de campanhas de conscientização e ajude a educar sua comunidade sobre a importância de eliminar focos do mosquito. Agentes de saúde e voluntários treinados são essenciais para identificar e combater criadouros do Aedes aegypti. A educação e a mobilização social são ferramentas poderosas na luta contra a dengue.'

    const conscientizeImg = './images/mosquito.png'
    const previnaImg = './images/previnaimg.png'
    const capaciteImg = './images/test.png'

    const [text, setText] = useState<string>(conscientize)
    const [imageUrl, setImageUrl] = useState<string>(conscientizeImg)
    const [activeItem, setActiveItem] = useState<string>('conscientize')

    const updateText = (newText: string, newImageUrl: string, item: string) => {
        setText(newText)
        setImageUrl(newImageUrl)
        setActiveItem(item)
    }


    return (
        <div className="hero">
            <div className="englobador">
                <div className="menu">
                    <div className="item">
                        <a href="#" className="link">
                            <span> Links Úteis </span>
                            <svg viewBox="0 0 360 360" xmlSpace="preserve">
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        id="XMLID_225_"
                                        d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                                    ></path>
                                </g>
                            </svg>
                        </a>
                        <div className="submenu">
                            <div className="submenu-item">
                                <a href="#" className="submenu-link"> Development </a>
                            </div>
                            <div className="submenu-item">
                                <a href="#" className="submenu-link"> Design </a>
                            </div>
                            <div className="submenu-item">
                                <a href="#" className="submenu-link"> Marketing </a>
                            </div>
                            <div className="submenu-item">
                                <a href="#" className="submenu-link"> SEO </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-infos">
                    <nav>
                        <ul>
                            <li className={activeItem === 'conscientize' ? 'active' : ''} onClick={() => updateText(conscientize, conscientizeImg, 'conscientize')}>Conscientize-se</li>
                            <li className={activeItem === 'previna' ? 'active' : ''} onClick={() => updateText(previna, previnaImg, 'previna')}>Previna-se</li>
                            <li className={activeItem === 'capacite' ? 'active' : ''} onClick={() => updateText(capacite, capaciteImg, 'capacite')}>Capacite-se</li>
                        </ul>
                    </nav>
                    <p>{text}</p>
                </div>
                <div className="container-img">
                    <img src={imageUrl} alt=" Imagem referente a informação do titulo " />
                </div>
            </div>
        </div>
    )
}