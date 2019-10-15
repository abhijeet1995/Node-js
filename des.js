// let thingsToDo = {
//     morning:'exercise',
//     afternoon:'work',
//     eveing:'code',
//     night:['sleep','dream']
// }

// let {morning , afternoon} = thingsToDo;
// morning = 'Run'
// console.log(morning,'-----',afternoon)

// let student = student =>{
//     console.log(`${student.name} from ${student.university}`)
// }

// student({
//     name:'abhijeet',
//     university:'Makut'
// })
// let student = student =>{
//         let {name,university} = student
//         console.log(`${name} from ${university}`)
//     }
    
//     student({
//         name:'abhijeet',
//         university:'Makut'
//     })
    
let student = ({name, university}) =>{
        console.log(`${name} from ${university}`)
    }
    
    student({
        name:'abhijeet',
        university:'Makut'
    })
    