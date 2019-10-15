// function greet(message){
//     return alert(`${message} everyone`)

// }
// greet('Good morning')


// let greet = (message) =>{
//     alert(`${message} everyone`)
// }
// greet("good morning")

let createBlog = (title,body) =>{
    if(!title){
        throw new Error('A title is required')
    }
    if(!body){
        throw new Error('Body cant be empty')
    }
    return `${title} - ${$body}`
}
createBlog('Blog title','Blog body')