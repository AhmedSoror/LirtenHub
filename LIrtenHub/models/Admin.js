const uuid =require(uuid);

class Admin{
    constructor(name,mail,passward,phone,id){
        this.name=name;
        this.mail=mail;
        this.passward=passward;
        this.phone=phone;
        this.id = id;
    }
};

module.exports = Admin;