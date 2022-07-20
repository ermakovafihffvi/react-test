const validateObj = (obj) => {
    if("name" in obj){
        return obj;
    }
    return false;    
}

module.exports = validateObj;
