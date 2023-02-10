const API_BASE_URL = "https://m7-mascotas.onrender.com";

export async function petNew(token, idUser, data) {
    const pet = await fetch(API_BASE_URL + "/mascota", {
        method: "POST",
        headers: {
            Authorization: `bearer ${token[0]}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            ...data,
            token: token[0],
            idUsuario: idUser[0],
        }),
    });
    const dataJson = await pet.json();
    return dataJson;
}

export async function petList(token, idUser) {
    const pet = await fetch(API_BASE_URL + "/mascota/" + idUser[0], {
        method: "GET",
        headers: {
            Authorization: `bearer ${token[0]}`,
            "Content-Type": "application/json",
        },
    });
    const dataJson = await pet.json();
    return dataJson;
}

export async function petCurrentEdit(token, idPets, data) {
    const pet = await fetch(API_BASE_URL + "/mascota/" + idPets, {
        method: "PATCH",
        headers: {
            Authorization: `bearer ${token[0]}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const dataJson = await pet.json();
    return dataJson;
}

export async function reportList(aroundRadius, lat, lng) {
    const pet = await fetch(
        API_BASE_URL +
            "/mascota_perdidas/" +
            aroundRadius +
            "/" +
            lat +
            "/" +
            lng,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    const dataJson = await pet.json();
    return dataJson;
}
