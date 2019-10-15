// var name = 'Everset';
// var height = 8848;

// var adventure = {name,height};
// console.log(adventure)



// var name = 'Everset';
// var height = 8848;
// var output = function(){
//     console.log(`Mt.${this.name} is ${this.height} meter tall`)
// }
// var adventure = {name,height,output};
// adventure.output();


//////New 

var adventure = {
    name:'Everset',
    height:8848,
    output() {
        console.log(`Mt.${this.name} is ${this.height} meter tall`)
    }
};
    adventure.output()
