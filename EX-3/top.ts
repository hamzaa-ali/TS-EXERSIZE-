
//lowerCase
let myName:string="ALi HamZA"
let lowCasename:string=myName.toLowerCase()
console.log(lowCasename);//output is ali hamza

//UPPERCASE
//output is ALI HAMZA
console.log(myName.toUpperCase())

//titlecase
console.log(myName.replace (/\bw/g,c=>c.toUpperCase()))

