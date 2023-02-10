const API_BASE_URL = "https://m7-mascotas.onrender.com";

export async function userLogin(email, password) {
    const token = await fetch(API_BASE_URL + "/usuario/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
    });
    const tokenJson = await token.json();
    return tokenJson;
}

export async function userNew(nombre, telefono, email, password) {
    const dataNew = await fetch(API_BASE_URL + "/usuario", {
        method: "POST",
        body: JSON.stringify({ nombre, telefono, email, password }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const dataJson = await dataNew.json();
    return dataJson;
}

export async function userShow(token, idUser) {
    const dataView = await fetch(API_BASE_URL + "/usuario/" + idUser[0], {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${token[0]}`,
        },
    });
    const dataJson = await dataView.json();
    return dataJson;
}

export async function userSave(token, idUser , data) {
    const dataUpdate = await fetch(API_BASE_URL + "/usuario/" + idUser[0], {
        method: "PATCH",
        headers: {
            Authorization: `bearer ${token[0]}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const dataJson = await dataUpdate.json();
    return dataJson;
}
export async function userEmail(idUsuario) {
    const dataUpdate = await fetch(API_BASE_URL + "/email/" + idUsuario, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const dataJson = await dataUpdate.json();
    return dataJson;
}