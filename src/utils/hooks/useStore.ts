import type {AppDispatch, RootState} from "../../store";
import {type TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

// Pour typescript, on retype les hooks de React Redux pour pouvoir les utiliser correctement
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;