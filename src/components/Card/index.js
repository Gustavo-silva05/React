import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';

function Card({ id, titulo, capa, link }) {
    return (
        <div className={styles.container}>
            <a href={link} target='black'>
                <img src={capa} alt={titulo} className={styles.capa} h />
                <h2>{titulo}</h2>
            </a>
            <img src={iconeFavoritar}
                alt="Favoritar filme"
                className={styles.favoritar} />
        </div>

    )
}

export default Card;