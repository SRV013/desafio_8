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

// export async function petView(token, idUser) {
//     const pet = await fetch(API_BASE_URL + "/mascota_buscar/2", {
//         method: "GET",
//         headers: {
//             Authorization: `bearer ${token[0]}`,
//             "Content-Type": "application/json",
//         },
//     });
//     const dataJson = await pet.json();
//     return dataJson;
// }
