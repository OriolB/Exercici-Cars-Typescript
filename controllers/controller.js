"use strict";
var car;
var y;
var regex = new RegExp(/^\s*(?:\d{4}[A-Za-z]{3})s*$/);
function createCar() {
    var x = document.getElementById("fcar");
    y = document.getElementById("fwheels");
    var plate = document.getElementById("plate");
    var color = document.getElementById("color");
    var brand = document.getElementById("brand");
    if (regex.test(plate.value)) {
        car = new Car(plate.value, color.value, brand.value);
        x.style.display = "none";
        y.style.display = "block";
    }
    else {
        var plateText = document.getElementById('plateHelp');
        plateText.innerHTML = "La matrícula ha de contenir 4 números i 3 lletres";
    }
}
function addWheels() {
    var z = document.getElementById("carInfo");
    var error = false;
    car.wheels = [];
    for (var i = 1; i <= 4; i++) {
        var wbrand = document.getElementById("wbrand" + i);
        var wdiam = Number(document.getElementById("wdiam" + i).value);
        var diamHelpText = document.getElementById('diam' + i + 'Help');
        if (wdiam <= 2 && wdiam >= 0.4) {
            car.addWheel(new Wheel(wdiam, wbrand.value));
            diamHelpText.innerHTML = "";
        }
        else {
            diamHelpText.innerHTML = "El valor ha d'estar entre 0,4 i 2";
            error = true;
        }
    }
    if (error == false) {
        z.style.display = "block";
        y.style.display = "none";
        var plateInfo = document.getElementById('plateInfo');
        plateInfo.innerHTML = "" + car.plate;
        var colorInfo = document.getElementById('colorInfo');
        colorInfo.innerHTML = "" + car.color;
        var brandInfo = document.getElementById('brandInfo');
        brandInfo.innerHTML = "" + car.brand;
        var wheelInfo1 = document.getElementById('wheel1');
        wheelInfo1.innerHTML = "" + car.wheels[0].brand + "&nbsp;&nbsp;Diameter: " + car.wheels[0].diameter;
        var wheelInfo2 = document.getElementById('wheel2');
        wheelInfo2.innerHTML = "" + car.wheels[1].brand + "&nbsp;&nbsp;Diameter: " + car.wheels[1].diameter;
        var wheelInfo3 = document.getElementById('wheel3');
        wheelInfo3.innerHTML = "" + car.wheels[2].brand + "&nbsp;&nbsp;Diameter: " + car.wheels[2].diameter;
        var wheelInfo4 = document.getElementById('wheel4');
        wheelInfo4.innerHTML = "" + car.wheels[3].brand + "&nbsp;&nbsp;Diameter: " + car.wheels[3].diameter;
    }
    else {
    }
    /*     document.body.innerHTML="<div class='container'><div class='row'><div class='col-3'>"
        +"<label>CAR:</label><div>PLATE: "+ car.plate +"</div></div><div class='col-3'>COLOR: "+car.color+"</div>"
        +"<div class='col-3'>BRAND: " + car.brand+"</div></div></div>"
        + "<br/>"+" WHEELS: " +"<br/>"+ "Wheel 1: Brand:"+JSON.stringify(car.wheels); */
}
