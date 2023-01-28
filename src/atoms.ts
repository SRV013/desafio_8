import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
    key: "recoil-persist", // this key is using to store data in local storage
    storage: localStorage, // configurate which stroage will be used to store the data
  });

  export const myToken = atom({
    key: 'token', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
    effects_UNSTABLE: [persistAtom],
  });

  export const usermyId = atom({
    key: 'myId',
    default:'',
    effects_UNSTABLE: [persistAtom],
  });