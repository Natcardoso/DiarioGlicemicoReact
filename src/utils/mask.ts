export const maskPhone = (value: any) => {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d{4})(\d)/, "$1-$2");
};

export const maskPeso = (value: any) => {
    const integer = value.split(",")[0];

    value = value.replace(/\D/g, "");
    value = value.replace(/^[0]+/, "");

    if (value.length <= 3 || !integer) {
        if (value.length === 1) value = "00.0" + value;
        if (value.length === 2) value = "00." + value;
        if (value.length === 3) value = "0." + value;
    } else {
        value = value.replace(/^(\d{1,})(\d{2})$/, "$1.$2");
    }

    return value;
};

export const maskAlt = (value: any) => {
    const integer = value.split(".")[0];

    value = value.replace(/\D/g, "");
    value = value.replace(/^[0]+/, "");

    if (value.length <= 2 || !integer) {
        if (value.length === 1) value = "0.0" + value;
        if (value.length === 2) value = "0." + value;
    } else {
        value = value.replace(/^(\d{1,})(\d{2})$/, "$1.$2");
    }
    return value;
};

export const maskOnlyNumbers = (value: any) => {
    return value.replace(/\D/g, "");
};

export const maskOnlyLetters = (value: any) => {
    return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "");
};
