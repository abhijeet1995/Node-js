// var student = ['Abhi','Sonu',' golu'];
// var studentAge = [21,'22','23'];

// var studentDetails = [...student,...studentAge];
// console.log(studentDetails);

//Spread with object
// var day = {
//     breakfast:'Bread',
//     lunch:'Rice',
// }
// var night = {
//     dinner :'noodle'
// }

// var picnic = {...day,...night}
// console.log(picnic);

//Rest 

var rivers = ['Ganga','Yamana','Gandak'];
var [first,...rest] = rivers

console.log(rest);