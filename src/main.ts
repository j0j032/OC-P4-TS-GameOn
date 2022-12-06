import './styles/styles.scss'
import { Footer, Header, Main} from "./utils/domLinker";
import {header} from "./components/header";
import {mainContent} from "./components/mainContent";
import {footer} from "./components/footer";


const init = () => {
    Header?.appendChild(header())
    Main?.appendChild(mainContent())
    Footer?.appendChild(footer())
}

init()
