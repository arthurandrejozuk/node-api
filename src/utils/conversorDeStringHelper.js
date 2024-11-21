module.exports = (objectParams) => {
    for (let propriedade in objectParams) {
        if(/Id|id/.test(propriedade)) {
            objectParams[propriedade] = Number(objectParams[propriedade]);
        }
    }
    return objectParams;
}