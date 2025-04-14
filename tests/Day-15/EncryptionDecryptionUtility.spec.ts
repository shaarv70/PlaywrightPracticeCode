import * as CryptoJS from "crypto-js";

const secret_key=process.env.SECRET_KEY?process.env.SECRET_KEY:"";

export  function encryptData(encrypt:string):string{

    return CryptoJS.AES.encrypt(encrypt,secret_key).toString();


}

export  function decryptData(decrypt:string):string{

    return CryptoJS.AES.decrypt(decrypt, secret_key).toString(CryptoJS.enc.Utf8);
}