import styles from './CabecalhoLink.module.css'

function CabecalhoLink(url, children) {
    return (
        <a href={url} className={styles.link}>{children}</a>
    );
};


export default CabecalhoLink