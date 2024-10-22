import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.p}>
                {"Copyright "} &copy; {" "}
                {new Date().getFullYear()}
                <a href={"https://github.com/Jun1oru"}
                    target={"_blank"}
                    className={styles.a}
                >
                    {" Jun1oru"}
                </a>
            </p>
        </footer>
    );
}