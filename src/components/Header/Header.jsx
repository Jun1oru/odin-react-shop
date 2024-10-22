import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.h1}>fakeStore</h1>
            <nav className={styles.nav}>
                <Link
                    className={styles.a}
                    to="/"
                >
                    Home
                </Link>
                <Link
                    className={styles.a}
                    to="shop"
                >
                    Shop
                </Link>
            </nav>
        </header>
    );
}