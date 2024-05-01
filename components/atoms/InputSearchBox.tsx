"use client"

import React, {useState} from 'react';
import styles from './InputSearchBox.module.css'
import {FaSearch} from "react-icons/fa";
import {searchMeal} from "@/api/httpClient";
import {MealType} from "@/shared/types/MealType";

type InputSearchBoxProps = React.InputHTMLAttributes<HTMLInputElement> & {
    onMySubmit: (meals: MealType[]) => void;
}

function InputSearchBox(props: InputSearchBoxProps) {
    const {onMySubmit, ...inputProps} = props;
    const classNames = props.className + " " + styles.input

    const [inputValue, setInputValue] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await searchMeal(inputValue);
            props.onMySubmit(response.meals);
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input {...inputProps} onChange={handleChange} className={classNames}/>
            <button type={"submit"} className={styles.button}>
                <FaSearch className={styles.icon}/>
            </button>
        </form>
    );
}

export default InputSearchBox;