// this should encrypt data ~

// this should be server side code ~
var AES = require("crypto-js/aes");
var CryptoJS = require("crypto-js");

// this works~
module.exports = {
  encrypt = function(data, key){
    return AES.encrypt(data, key);
    // return AES.encrypt(JSON.stringify(data), 'secret key 123');
  },

  decrypt = function(encryptedData, key){
    // return Base64.stringify(hmacSHA512(sha256(obj), privateKey));
    var bytes  = AES.decrypt(encryptedData.toString(), key);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  },
}
