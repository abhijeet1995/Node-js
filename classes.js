// function Holiday(destination , days){
//     this.destination = destination
//     this.days = days
// }
// Holiday.prototype.info = function(){
//     console.log(this.destination + "" + this.days + " ");
// }    

// var Nepal = new Holiday('Nepal','31');
// console.log(Nepal.info());

//Classes in Es 6

// class Holiday {
//     constructor(name ,age){
//         this.name = name;
//         this.age = age
//     }

//     info(){
//         console.log(`${this.name}   Age ${this.age}`);
//     }
// }

// const trip =new Holiday("Abhijeet",'21');
// console.log(trip.info());


//Parent class
class Holiday {
    constructor(name ,age){
        this.name = name;
        this.age = age
    }

    info(){
        console.log(`${this.name}   Age ${this.age}`);
    }
}

//sub classes

class Education extends Holiday{
    constructor(name,age,degree){
        super(name,age)
        this.degree = degree;
    }
    info (){
        super.info();
        console.log(`Degree name ${this.degree.join("And your")}`)
    }
}

const studentDetails = new Education("Btech",["Abhijeet","21"])
studentDetails.info();