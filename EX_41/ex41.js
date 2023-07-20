function Make_Car(manufac, model, color) {
    if (color === void 0) { color = "default"; }
    // creating object
    var car = {
        manufacturer: manufac,
        model: model,
    };
    if (color != "default") {
        car.color = color;
    }
    return car;
}
// calling Make car function
console.log(Make_Car("Suzuki", "Bolan", "White"));
