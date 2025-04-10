import styles from './Rodape.module.css';

function Rodape() {
    return (
        <footer className={styles.rodape}>
            <section>
                <h2>Desenvolvido por Gustavo Silva.</h2>
                <h4>Todo conteúdo é para testes e aplicação de conceitos</h4>
            </section>
        </footer>
    )
}

export default Rodape;