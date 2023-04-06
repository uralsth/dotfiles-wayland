// var n : Number = 1;

// // gives you error
// // n = "Robb";

// var isWinter : boolean = false;
// // isWinter = 123;

// var count : Number = 5;
// var namee : String = "Ural";

// var names : string[] = ["John", "Ram", "Sam"];
// var namesCol : any[] = ["John", "Ram", "Sam", 5];

// enum Starks {Jon, Bran, Eddard, Catyln}

// var cat : Starks = Starks.Catyln;

// function getName() : string {
//     return "hello";
// }


interface Stark {
    name: String;
}

// star
function printName(stark : Stark) {
    console.log(stark.name);
}

printName({name: "Eddard"});
// error audaina tara undefined aunxa
printName({label: "crrr"});