//Arrow function with this keyword
let nepal = {
    mountains : ['Everest',"fish",'Annapurna'],
    printWithDash:function(){
        setTimeout(()=> console.log(this.mountains.join('-')),3000)
    }
}
nepal.printWithDash();