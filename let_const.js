let name = 'Abhijeet shikhar';
let age =  24;
let hobbies = true;
age = 30;

function myFunction(USername,Userage,Userhobbies){
    return (
        'Name'  + USername+ 'Age' + Userage + 'Hobbies' + Userhobbies
    );
}

console.log(myFunction(name,age,hobbies));