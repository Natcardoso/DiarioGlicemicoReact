import { createStore, GlobalState } from "little-state-machine";

type userProps = {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    age: number;
    cel: number;
    sex: string;
    peso: number;
    alt: number;
    insulina: string;
    typeDiabete: string;
};

const userAccount: userProps = {
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    age: 0,
    cel: 0,
    sex: "",
    peso: 0,
    alt: 0,
    insulina: "",
    typeDiabete: "",
};

declare module "little-state-machine" {
    interface GlobalState {
        yourDetail: userProps;
    }
}

createStore({ yourDetail: userAccount });

export default function updateForm(state: GlobalState, payload: userProps) {
    return {
        ...state,
        yourDetail: {
            ...state.yourDetail,
            ...payload,
        },
    };
}
