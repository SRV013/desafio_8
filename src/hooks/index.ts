import { myToken, usermyId, pictureId, petSet , Location ,findResult } from "atoms";
import { useRecoilState } from "recoil";

export function tokenHooks(): any {
    const [token, setToken] = useRecoilState(myToken);
    return [token, setToken];
}

export function myId(): any {
    const [myId, setmyId] = useRecoilState(usermyId);
    return [myId, setmyId];
}
export function myLocation(): any {
    const [myLocation, setmyLocation] = useRecoilState(Location);
    return [myLocation, setmyLocation];
}

export function myPicture(): any {
    const [myPicture, setPicture] = useRecoilState(pictureId);
    return [myPicture, setPicture];
}
export function myPets(): any {
    const [myPets, setPets] = useRecoilState(petSet);
    return [myPets, setPets];
}
export function ResultReportPet(): any {
    const [myResult, setResult] = useRecoilState(findResult);
    return [myResult, setResult];
}


