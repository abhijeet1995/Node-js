var name = 'Abhijeet shikhar';
var age =  '24'
var hobbies = true;

function myFunction(USername,Userage,Userhobbies){
    return (
        'Name'  + USername+ 'Age' + Userage + 'Hobbies' + Userhobbies
    );
}

console.log(myFunction(name,age,hobbies));