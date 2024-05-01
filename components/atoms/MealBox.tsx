import React from 'react';
import {MealType} from "@/shared/types/MealType";
import styles from "./MealBox.module.css";

type MealBoxProps = {
    meal: MealType
}

function MealBox(props: MealBoxProps) {
    return (
        <div className={styles.container}>
            <img src={props.meal.strMealThumb} className={styles.mealImg} alt={"Obrazek potrawy"}/>
            <div className={styles.informationBox}>
                <h1 className={styles.headerTxt}>{props.meal.strMeal}</h1>
                <p>Występowanie: {props.meal.strArea}</p>
                <p>Kategoria: {props.meal.strCategory}</p>
            </div>

        </div>
    );
}

export default MealBox;