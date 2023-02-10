const API_BASE_URL = "https://m7-mascotas.onrender.com";

export async function NewReport(idMascota,    nombre,
    telefono,
    comentario,
    email) {
    const report = await fetch(API_BASE_URL + "/reportar_mascota/" + idMascota, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nombre,
            telefono,
            comentario,
            email,
        }),
    });
    const dataJson = await report.json();
    return dataJson;
}