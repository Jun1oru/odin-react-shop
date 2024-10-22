import styles from "./Item.module.css";
import { useState } from "react";

export default function Item({ name, imgUrl, description, price }) {
    const [quantity, setQuantity] = useState(0);
    
    function handleClick(event) {
        const value = parseInt(event.target.value);
        if (value === -1 && quantity === 0) {
            return;
        }
        const newQuantity = value + quantity;
        setQuantity(newQuantity);
    }

    // function handleInput(event) {
    //     const newQuantity = parseInt(event.target.value);
    //     setQuantity(newQuantity);
    // }

    return (
        <div className={styles.item}>
            <h1 className={styles.h1}>{name}</h1>
            <img src={imgUrl}
                alt="image"
                className={styles.img}
            />
            <p className={styles.p}>{description}</p>
            {/* <div className={styles.div}>
                <button
                    type="button"
                    className={styles.button}
                    onClick={handleClick}
                    value={+1}
                >
                    +
                </button>
                <input
                    type="number"
                    min={0}
                    value={quantity}
                    onChange={handleInput}
                    className={styles.input}
                />
                <button
                    type="button"
                    className={styles.button}
                    onClick={handleClick}
                    value={-1}
                >
                    -
                </button>
            </div> */}
            <button
                type="button"
                className={styles.button}
                onClick={handleClick}
            >
                Add to Cart
            </button>
            <p className={styles.p}>
                {"Product Price: " + price + "$"}
            </p>
        </div>
    );
}