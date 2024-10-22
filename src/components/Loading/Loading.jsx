import styles from "./Loading.module.css";
import loading from "../../assets/loading.svg";


export default function Loading() {
    return (
        <>
            <img
                src={loading}
                alt="Loading ..."
                className={styles.img}
            />
        </>
    );
}