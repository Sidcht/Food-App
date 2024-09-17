import { useEffect, useState } from "react";
import styles from "./foodDetail.module.css";
import ItemList from "./itemList";
export default function FoodDetail({ foodId }) {
  const [food, setfood] = useState({});
  const [IsLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "338cc85defde496ab9c8ef1aeeedf61b";
  useEffect(() => {
    async function FetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setfood(data);
      setIsLoading(false);
    }
    FetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>
          {food.title}
          <img className={styles.recipeImg} src={food.image} alt="" />
        </h1>
        <div className={styles.recipeDetails}>
          <span>
            <strong>Prep Time: {food.readyInMinutes} Minutes</strong>
          </span>
          <span> Servings: {food.servings}</span>
          <span>
            <strong>
              {food.vegetarian ? " Vegetarian" : "Non-Vegetarian"}
            </strong>
          </span>
          <span>
            {" "}
            <strong>{food.vegan ? "Vegan meal" : "Non-Vegan meal"}</strong>
          </span>
        </div>
        <div>
          ${" "}
          <span>
            <strong>{food.pricePerServing / 100} Per Serving</strong>
          </span>
        </div>
        <h3>Ingredients</h3>
        <ItemList food={food} IsLoading={IsLoading} />
        <h2>Instructions</h2>
        <div className={styles.recipeInstruct}>
          <ol>
            {IsLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
