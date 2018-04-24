var app = prompt("(c)alculator or (b)mi")||"c";


//basic cal
if(app == "c"){
  var type = prompt("(b)asic or (a)advanced");
  var value1 =  parseInt(prompt('enter first value'));
   var value2 = parseInt(prompt('enter the second value'));


if(type == "b"){
  var choice = prompt('Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide (mod)ulos') || "a";
switch (choice) {
  //adding
  case "a":
      console.log(value1+value2);
    break;
    //subtraction
    case "s":
        console.log(value1-value2);
      break;
      //mutlplication
      case "m":
          console.log(value1*value2);
        break;
        //divison
        case "d":
            console.log(value1/value2);
          break;
          //modulos
          case "mod":
              console.log(value1%value2);
            break;
              default:"invalid input";
}
}
//advance calculator
if( type == "a"){
  var choice = prompt('(squ)areroot (pow)er') || "squ";
switch (choice) {
//squareroot
case "squ":
    console.log(Math.sqrt(value1));
  break;
  //power
  case "pow":
      console.log(Math.pow(value1,value2));
    break;
      default:"invalid input";
}
}
}
//BMI calculator
else {
  var measure = prompt("(m)etric");
  if( measure == "m"){
    var weight = prompt("Enter weight in kilograms");
    var height = prompt("enter height in cm");
    console.log(((weight/height)/height)*10000);
  }
}
