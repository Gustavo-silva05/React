import { Link } from "react-router-dom";
import styles from './Cabecalho.module.css'
import logo from './Logo-cinetag-branco 1.png'
import CabecalhoLink from "components/CabecalhoLink";

function cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">  <img src={logo} alt="Logo Cinetag" /> </Link>
            <nav>
                <CabecalhoLink url="https://www.youtube.com/watch?v=7L8p7_SLzvU&pp=ygUUdHJhaWxlciBzdGFyIHdhcnMgVkk%3D" >
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav>

        </header>
    );
}

export default cabecalho;