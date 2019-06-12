
var car:Car; 
var y:any;
var regex = new RegExp(/^\s*(?:\d{4}[A-Za-z]{3})s*$/);


function createCar(){
    var x = <HTMLInputElement>document.getElementById("fcar");
    y = <HTMLInputElement>document.getElementById("fwheels");
    
    let plate = <HTMLInputElement>document.getElementById("plate");
    let color = <HTMLInputElement>document.getElementById("color");
    let brand = <HTMLInputElement>document.getElementById("brand");

    if(regex.test(plate.value)){
        car=new Car(plate.value,color.value,brand.value);
        x.style.display = "none";
        y.style.display = "block";
    }else{
        let plateText = document.getElementById('plateHelp') as HTMLInputElement;
        plateText.innerHTML = "La matrícula ha de contenir 4 números i 3 lletres";
    }
}

function addWheels() {
    
    var z = <HTMLInputElement>document.getElementById("carInfo");
    let error = false;
    car.wheels=[];

    for(let i=1;i<=4;i++){
        var wbrand = <HTMLInputElement>document.getElementById("wbrand"+i);
        var wdiam = Number((<HTMLInputElement>document.getElementById("wdiam"+i)).value);
        let diamHelpText = document.getElementById('diam'+i+'Help') as HTMLInputElement;
        if(wdiam<=2 && wdiam>=0.4){
            car.addWheel(new Wheel(wdiam,wbrand.value)); 
            diamHelpText.innerHTML = "";
        }else{
            diamHelpText.innerHTML = "El valor ha d'estar entre 0,4 i 2";
            error = true;
        }
    }
    if(error==false){
        z.style.display = "block";
        y.style.display = "none";
        let plateInfo = document.getElementById('plateInfo') as HTMLInputElement;
        plateInfo.innerHTML= ""+car.plate;
        let colorInfo = document.getElementById('colorInfo') as HTMLInputElement;
        colorInfo.innerHTML= ""+car.color;
        let brandInfo = document.getElementById('brandInfo') as HTMLInputElement;
        brandInfo.innerHTML= ""+car.brand;
    
        let wheelInfo1 = document.getElementById('wheel1') as HTMLInputElement;
        wheelInfo1.innerHTML= ""+car.wheels[0].brand + "&nbsp;&nbsp;Diameter: "+car.wheels[0].diameter;
        let wheelInfo2 = document.getElementById('wheel2') as HTMLInputElement;
        wheelInfo2.innerHTML= ""+car.wheels[1].brand + "&nbsp;&nbsp;Diameter: "+car.wheels[1].diameter;
        let wheelInfo3 = document.getElementById('wheel3') as HTMLInputElement;
        wheelInfo3.innerHTML= ""+car.wheels[2].brand + "&nbsp;&nbsp;Diameter: "+car.wheels[2].diameter;
        let wheelInfo4 = document.getElementById('wheel4') as HTMLInputElement;
        wheelInfo4.innerHTML= ""+car.wheels[3].brand + "&nbsp;&nbsp;Diameter: "+car.wheels[3].diameter;
    }else{ 
    }

/*     document.body.innerHTML="<div class='container'><div class='row'><div class='col-3'>"
    +"<label>CAR:</label><div>PLATE: "+ car.plate +"</div></div><div class='col-3'>COLOR: "+car.color+"</div>"
    +"<div class='col-3'>BRAND: " + car.brand+"</div></div></div>"
    + "<br/>"+" WHEELS: " +"<br/>"+ "Wheel 1: Brand:"+JSON.stringify(car.wheels); */
    
}

