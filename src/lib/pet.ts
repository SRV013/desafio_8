const API_BASE_URL = "https://m7-mascotas.onrender.com";

export async function petNew(token) {
    const pet = await fetch(API_BASE_URL + "/mascota", {
        method: "POST",
        headers: {
            Authorization: `bearer ${token[0]}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ })
})
const dataJson = await pet.json();
return dataJson;
}