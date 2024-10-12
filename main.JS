
const reverse =document.getElementById ('reverse');
const count=document.getElementById('count');
const upper=document.getElementById('upperfirstcharachter');
const writing =document.getElementById('writingplace');
const result = document.getElementById('result');
const firstcase = document.getElementById('Stringcase');

const stringLength = (string) => {
    string.length ;
    };
    
     const reverseString = (string) => string.split("").reverse("").join("");
    
     const numberOfWords = (string) => string.split(" ").length;
    
    //A function that takes two parameters 
     const stringCase = (string, type) =>
    type == "uppercase" ? string.toUppercase () : string.toLowerCase();
    
     const upperFirstCharachter = (string) =>
    string.split(" ").map(str => str[0].toUpperCase() + str.slice(1)).join(' ');
    
     
    
    
alert('u really have no occupation so that u come here and reverse ur name')
reverse.onclick = () => {
writingplace.value = reverseString (writingplace.value)
writingplace.style.backgroundColor='white'
}
count.onclick =() => {
    result.innerText = numberOfWords(writingplace.value);
    result.style.color='red'
}
upper.onclick = ()=> { 
    result.innerText = upperFirstCharachter(writingplace.value);
    result.style.color ='red'
}
firstcase.onclick =() => {
    result.innerText = stringCase(writingplace.value);
    result.style.color='red'
}




















