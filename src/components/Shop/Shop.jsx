import Layout from "../Layout/Layout";
import Item from "./Item/Item";
import Loading from "../Loading/Loading";
import styles from "./Shop.module.css";
import { useState, useEffect } from 'react';

export default function Shop() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error("Error Fetching Information", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <Layout>
                <main className={styles.mainLoading}>
                    <Loading />
                </main>
            </Layout>
        );
    }

    return (
        <Layout>
            <main className={styles.main}>
                {items.map((item) => (
                    <Item
                        key={item.id}
                        name={item.title}
                        imgUrl={item.image}
                        description={item.description}
                        price={item.price}
                    />
                ))}
            </main>
        </Layout>
    )
}