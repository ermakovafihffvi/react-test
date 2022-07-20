const validateValue = (value) => {
    if(/javascript/gi.test(value)){
        return true;
    }
    return false;
}

module.exports = validateValue;