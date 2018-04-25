export const idValidator = (value) => {
    value = parseInt(value, 10);
    if (!Number.isInteger(value) || value <= 0) {
        return 'Id must be a integer and greater than zero!';
    }
    return true;
};

export const priceValidator = (value) => {
    const nan = isNaN(parseInt(value, 10));
    if (nan) {
        return 'Price must be a number!';
    }
    if (value <= 0) {
        return 'Price must be greater than zero!'
    }
    return true;
};

export const nameValidator = (value) => {
    if (!value) {
        return 'Name is a required field!';
    }
    return true;
};