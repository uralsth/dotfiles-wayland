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

// class Starks {
//     // default constructor
//     name : string = "Brandon";
//     static castle: string = "Winterfell";
//     saying: string;

//     // default constructor
//     constructor(){
//         this.saying = Starks.castle;
//     }

//     //method
//     hello(person: string){
//         console.log("Hello" + person)
//     }
// }

// var ned = new Starks();
// ned.saying = "Winter is coming"
// console.log(Starks.castle);
// ned.hello("Robert");


class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    dance() {
        console.log(this.name + " is dancing")
    }
}

var bran = new Person("bran")
bran.dance();

class AwesomePerson extends Person {
    dance(): void {
        console.log("SO AWESOME!");
    }
}

var robb = new  AwesomePerson("Rob");
robb.dance();