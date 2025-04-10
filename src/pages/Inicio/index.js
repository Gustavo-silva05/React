import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import videos from 'json/db.json';
import styles from './Inicio.module.css';
import Cabecalho from "components/Cabecalho";

function Inicio() {
    return (
        <>
            <Cabecalho></Cabecalho>
            <Banner imagem="Home.png"/>
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <div className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </div>
        </>
    )
}

export default Inicio;