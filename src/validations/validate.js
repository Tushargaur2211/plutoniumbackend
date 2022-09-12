const isValidReqBody =(el) => {
    return Object.keys(el).length > 0;
}

module.exports.isValidReqBody = isValidReqBody;