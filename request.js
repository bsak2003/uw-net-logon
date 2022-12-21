function request(user, pass){
    return {
        inputStr: "",
        escapeUser: "",
        preauthid: "",
        user: user,
        passwd: pass,
        ok: "Login"
    }
}

module.exports = request;