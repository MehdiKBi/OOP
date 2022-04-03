class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.score = 0;
    }
    login() {
        console.log(this.name, "has logged in");
        return this;
    }
    logout() {
        console.log(this.name, "has logged out");
        return this;
    }
    keepScore() {
        this.score++
        console.log(this.score);
        return this
    }

}

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {return u.name != user})
    } 
    
}

var userOne = new User("mehdi", 32)
var userTwo = new User("Ash", 31)
var admin = new Admin("Bob", 55)

var users = [userOne,userTwo,admin];



