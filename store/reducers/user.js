import { resolveEntityId } from "@utils/resolveEntityId";
import * as actionTypes from "../consts/user";

const initialState = {
	user: null
};

export const user = (state = initialState, action) => {
	switch (action.type) {
	case actionTypes.USER_AUTH:
		return {
			...state,
			user: resolveEntityId(action.payload.user)
		};

	case actionTypes.USER_LOGOUT:
		return {
			...state,
			user: null
		};

	default:
		return state;
	}
};

export default user;
