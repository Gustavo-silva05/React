import Banner from 'components/Banner';
import styles from './Player.module.css'
import { useParams } from 'react-router-dom';
import Titulo from 'components/Titulo';
import videos from 'json/db.json';

export default function Player() {
    const parametros = useParams();
    console.log(parametros)
    const video = videos.find(v => v.id == parametros.id);
    console.log(video)
    return (
        <>
            <Banner imagem={"Player.jpg"}></Banner>
            <Titulo>
                <h1>
                    {video.titulo}
                </h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width= "100%"
                    height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                    >
                </iframe>
            </section>
        </>
    );
};