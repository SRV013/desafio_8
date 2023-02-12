import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
    key: "recoil-persist",
    storage: localStorage,
});

export const myToken = atom({
    key: "token",
    default: false,
    effects_UNSTABLE: [persistAtom],
});

export const usermyId = atom({
    key: "myId",
    default: "",
    effects_UNSTABLE: [persistAtom],
});

export const Location = atom({
    key:'location',
    default:{},
    effects_UNSTABLE: [persistAtom],
  })

export const pictureId = atom({
    key: "pictureId",
    default: "",
//    effects_UNSTABLE: [persistAtom],
});

export const petSet = atom({
    key: "petAtom",
    default: "",
    effects_UNSTABLE: [persistAtom],
});

export const findResult = atom({
    key: "findResult",
    default: 0,
});

export const viewModal = atom({
    key: "openModal",
    default: false,
});

export const mypetLocation = atom({
    key: "mypetLocation",
    default: '',
});
