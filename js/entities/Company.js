import User from "./User"

class Company extends User{
    constructor(name, catchPhrase){
        this.name = name;
        this.catchPhrase = catchPhrase;
    }
}

export default Company;
