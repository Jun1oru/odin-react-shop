import Layout from "../Layout/Layout";
import styles from "./Main.module.css";
import { Link } from "react-router-dom";

export default function Main() {
    return (
        <Layout>
            <main className={styles.main}>
                <h1 className={styles.h1}>Welcome to fakeStore!</h1>
                <p className={styles.p}>
                    Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Laboriosam tenetur
                    ipsum omnis est tempora velit alias similique
                    placeat id ad tempore voluptates rem.
                </p>
                <Link
                    className={styles.a}
                    to="shop"
                >
                    Shop
                </Link>
            </main>
        </Layout>
    );
}