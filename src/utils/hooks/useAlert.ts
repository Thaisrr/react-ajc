import {useAppDispatch} from "./useStore.ts";
import type {AlertType} from "../types/AlertType.ts";
import {createAlert, removeAlert} from "../../store/AlertSlice.ts";

export const useAlert = () => {

    const dispatch = useAppDispatch();

    const create = ({text, level = 'info', duration = 5000}: AlertType) => {
        const alert = {text, level, duration};
        dispatch(createAlert(alert));

        setTimeout(() => dispatch(removeAlert(alert)), duration);
    }

    return create;
}