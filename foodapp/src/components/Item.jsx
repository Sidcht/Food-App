import styles from "./Item.module.css";
export default function Item({ item }) {
  return (
    <div>
      {" "}
      <div className={styles.ItemContainer}>
        <div className={styles.imgContainer}>
          <img
            className={styles.img}
            src={`http://spoonacular.com/cdn/ingredients_100x100/` + item.image}
          ></img>
        </div>

        <div className={styles.nameContainer}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.amount}>
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
