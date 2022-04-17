import { useDispatch, useSelector } from "react-redux";

export const useLogin = () => {
    const dispatch = useDispatch();
    const loginStats = useSelector(
      (state) => state.user
    );

    return [dispatch, loginStats]
}