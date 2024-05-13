import {clearLogInInfo, logIn} from "@/states/feature/auth/login";
import {useDispatch} from "react-redux";
import showToast from "../toast";
import {getMovie} from "@/states/feature/movie/getMovie";

const useFormHandlers = () => {
	const dispatch = useDispatch();

	const onSubmit = (data, e) => {
		if (e) e.preventDefault();

		showToast("You submitted the following values:", JSON.stringify(data, null, 2));
		const payload = {title: data.title};
		dispatch(getMovie(payload));
	};

	const onError = (errors) => {
		showToast("Error", Object.values(errors)[0].message);
	};

	const clearInfo = () => {
		dispatch(clearLogInInfo());
	};

	return {onSubmit, onError, clearInfo};
};

export default useFormHandlers;
