//lowercase
let msg1 :string="HELLO EVERYONE"
console.log(msg1.toLowerCase());

//UPPERCASE
let msg2:string="what are u doing know a dayss"
let ToUppcasename:string=msg2.toUpperCase()
console.log(ToUppcasename);

//TileCase
function toTitleCase(str: string): string {
    return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}

const inputString = "najaf ali";
const titleCaseString = toTitleCase(inputString);
console.log(titleCaseString);

