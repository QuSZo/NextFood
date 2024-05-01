const BASE_URL = "https://www.themealdb.com/api/json/v1/1/search.php";

export async function searchMeal(search: string) {
    const res = await fetch(BASE_URL + "?s=" + search);
    return await res.json();
}