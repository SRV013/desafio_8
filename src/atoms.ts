import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
    key: "recoil-persist",
    storage: localStorage,
});

export const myToken = atom({
    key: "token",
    default: "",
    effects_UNSTABLE: [persistAtom],
});

export const usermyId = atom({
    key: "myId",
    default: "",
    effects_UNSTABLE: [persistAtom],
});

export const pictureId = atom({
    key: "pictureId",
    default: "",
    effects_UNSTABLE: [persistAtom],
});

export const imageDrop = atom({
    key: "imageDrop", // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
});

export const petSet = atom({
    key: "petAtom", // unique ID (with respect to other atoms/selectors)
    default: {
        id: "",
        nombre: "",
        perdida: "",
        publicada: "",
        lat: 0,
        log: 0,
        sobremi: "",
        pictureURL: "",
    }, // default value (aka initial value)
    effects_UNSTABLE: [persistAtom],
});
