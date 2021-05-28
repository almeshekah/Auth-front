import instance from "./instance";
import decode from "jwt-decode";
import * as types from "./types";
import { toast } from "react-toastify";

const setUser = (token) => {
	return async (dispatch) => {
		localStorage.setItem("myToken", token);
		instance.defaults.headers.common.Authorization = `Bearer ${token}`;
		await dispatch({
			type: types.SET_USER,
			payload: decode(token),
		});
	};
};
export const signup = (newUser, history) => {
	return async (dispatch) => {
		try {
			const formData = new FormData();
			for (const key in newUser) formData.append(key, newUser[key]);
			const res = await instance.post("/signup", newUser);
			localStorage.setItem("myToken", res.data.token);
			await dispatch(setUser(res.data.token));
			history.replace("/");
			toast.success("Signed up successfuly!");
		} catch (error) {
			console.log(error);
		}
	};
};

export const signin = (userData, history) => {
	return async (dispatch) => {
		try {
			const res = await instance.post("/signin", userData);
			localStorage.setItem("myToken", res.data.token);
			await dispatch(setUser(res.data.token));
			toast.success("Signed in successfuly!");
			history.replace("/");
		} catch (error) {
			console.log(error);
		}
	};
};

export const signout = (history) => {
	return async (dispatch) => {
		localStorage.removeItem("myToken");
		delete instance.defaults.headers.common.Authorization;
		await dispatch({
			type: types.SET_USER,
			payload: null,
		});

		history.replace("/");
		toast.info("Signed out");
	};
};

export const checkForToken = () => (dispatch) => {
	const token = localStorage.getItem("myToken");
	if (token) {
		const user = decode(token);
		const currentTime = Date.now();
		if (currentTime < user.exp) {
			dispatch(setUser(token));
		} else {
			localStorage.removeItem("myToken");
			dispatch(signout());
		}
	}
};
