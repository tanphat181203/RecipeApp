import styles from "./fooditem.module.css";

export default function FoodItem({ food }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt={food.title} />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.itemButton}>View recipe</button>
      </div>
    </div>
  );
}
