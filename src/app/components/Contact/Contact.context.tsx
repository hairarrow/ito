import { createContext, useReducer, PropsWithChildren } from "react";

type TState = typeof initialState;

type TAction = {
	type: "UpdateShowMessage";
	value: boolean;
};

const initialState = {
	showMessage: false
};

function reducer(state: TState, action: TAction): TState {
	switch (action.type) {
		case "UpdateShowMessage":
			return { ...state, showMessage: action.value };
		default:
			return state;
	}
}

function createContactContext() {
	const Ctx = createContext({
		state: initialState,
		dispatch: (_: TAction) => null
	});

	const Provider = (props: PropsWithChildren<any>) => {
		const [state, dispatch] = useReducer(reducer, initialState);
		return <Ctx.Provider value={{ state, dispatch }} {...props} />;
	};

	return [Ctx, Provider] as const;
}

export const [ContactContext, ContactContextProvider] = createContactContext();
