// console.log("Hi Man")
        document.getElementById('btn').addEventListener('click' , function(){
        document.getElementById('BTS').innerHTML = 'Create An Account Here'
    })
 
const obj =[{ name: "John", age: 30, city: "New York"}, 
{ name: "Jerry" , age: 30, city: "New Jersey"}]
// 

for (let i=0; i<obj.length; i++){
    var output = '';
    output += `<li>${obj[i].name}</li>`
    document.getElementById("list").innerHTML = output

}   
    console.log(output)


