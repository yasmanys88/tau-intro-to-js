/*
            Truth Tbale
P   Q   P and Q     P   Q   P or Q
----------------    ----------------
T   T   T           T   T   T
T   F   F           T   F   T
F   T   F           F   T   T
F   F   F           F   F   F
*/
const car = {
    price: 2000,
    color: "Red",
    numDoors: 4
}

if (car.price <= 2000 || car.color === "Red") {
    console.log("Lo compro");
}