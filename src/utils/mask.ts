export const maskPhone = (value: any) => {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d{4})/, "$1-$2");
};

export const maskPeso = (value: any) => {
    value = value.replace(/\D/g, "");
    value = value.replace(/^[0]+/, "");

    value = value.replace(/^(\d{1,})(\d{2})$/, "$1.$2");

    return value;
};

export const maskAlt = (value: any) => {
    value = value.replace(/\D/g, "");
    value = value.replace(/^[0]+/, "");

    value = value.replace(/^(\d{1,})(\d{2})$/, "$1.$2");

    return value;
};

export const maskOnlyNumbers = (value: any) => {
    return value.replace(/\D/g, "");
};

export const maskOnlyLetters = (value: any) => {
    return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "");
};
