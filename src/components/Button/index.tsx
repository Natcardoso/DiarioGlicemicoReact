import React from "react";

type Props = {
    type: "button" | "submit" | "reset" | undefined;
    text: string;
    onClick: () => void;
};

export const Button = ({ type, text, onClick }: Props) => {
    return (
        <button type={type} onClick={onClick}>
            {text}
        </button>
    );
};
