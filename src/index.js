module.exports = string => {
    if (typeof string !== "string") {
      throw new TypeError('Should be a string!')
    }
  
    return string.replace(/\s/g, '')
}