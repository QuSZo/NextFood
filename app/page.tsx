"use client"

import styles from "./page.module.css";
import InputSearchBox from "@/components/atoms/InputSearchBox";
import {useState} from "react";
import {MealType} from "@/shared/types/MealType";
import MealBox from "@/components/atoms/MealBox";

export default function Home() {
    const [meals, setMeals] = useState<MealType[]>([]);

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <InputSearchBox onMySubmit={(meals) => setMeals(meals)} type={"text"} name={"mealSearch"} placeholder={"Wyszukaj przepis.."}/>
                <div className={styles.mealBoxes}>
                    {meals.map((meal) => (
                        <MealBox key={meal.idMeal} meal={meal}/>
                    ))}
                </div>
            </div>
        </main>
    );
}

