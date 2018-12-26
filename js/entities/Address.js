import User from "./User.js"

class Address extends User {
    constructor(id, name, username, email, phone, street, city){
        this.street = street;
        this.city = city;
    }
}

export default Address;
