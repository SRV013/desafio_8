import { myToken , usermyId } from "atoms";
import { useRecoilState } from "recoil";

export function tokenHooks(): any {
    const [token, setToken] = useRecoilState(myToken);
    return [token, setToken];
}

export function myId(): any {
    const [myId, setmyId] = useRecoilState(usermyId);
    return [myId, setmyId];
}
