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


// interface Stark {
//     name: String;
//     age? : number;
// }

// // stark: Stark vanya every stark ko name hunu parxa as interface
// function printName(stark : Stark) {
//     console.log(stark.name);
// }

// printName({name: "Eddard"});
// // error audaina tara undefined aunxa
// printName({name: "crrr"});

class Starks {
    // default constructor
    name : string = "Brandon";
    static castle: string = "Winterfell";
    saying: string;

    // default constructor
    constructor(){
        this.saying = Starks.castle;
    }

    //method
    hello(person: string){
        console.log("Hello" + person)
    }
}

var ned = new Starks();
ned.saying = "Winter is coming"
console.log(Starks.castle);
ned.hello("Robert");