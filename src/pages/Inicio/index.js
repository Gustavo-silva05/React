import Bannner from "components/Banner";
import Cabecalho from "components/Cabecalho";
import Card from "components/Card";
import Rodape from "components/Rodape";
import Titulo from "components/Titulo";
import videos from 'json/db.json'
import styles from './Inicio.module.css'

function Inicio() {
    return (
        <>
            <Cabecalho></Cabecalho>
            <Bannner imagem="Home"></Bannner>
            <Titulo><h1>Um lugar para guardar seus videos e filmes</h1></Titulo>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id}></Card>
                })}
            </section>
            {/* <Card id='1' titulo='Gato bonifácio' capa='https://thecatapi.com/api/images/get?format-src&type=png' /> */}
            <Rodape></Rodape>
        </>
    )
}

export default Inicio; 