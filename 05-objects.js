const cookie = {
    "name": "Chocolate Chip",
    isGlutenFree: false,
    "+Yumi": true,
    eatCookie: function () { console.log("I am eating " + this.name); }

};
console.log(cookie);
/*
console.log(cookie.name);
console.log(cookie.isGlutenFree);
cookie.name = "Chip Chocolate";
cookie.isGlutenFree = true;
console.log(cookie);
console.log(cookie["+Yumi"]);
*/
cookie.eatCookie();

class Cookie {
    constructor(name, isGlutenFree) {
        this.name = name;
        this.isGlutenFree = isGlutenFree;
    }
    eatCookie() {
        console.log("I am eating " + this.name);
    }

}
const myCookie = new Cookie("Iced Oatmeal", false);
console.log(myCookie);
myCookie.eatCookie();