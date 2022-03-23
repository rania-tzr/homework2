var person1 = {
    name: "Rania",
    discord_id:"Rania#5482",
        
    }
  
  
var person2 = {
    name: "Rania",
    discord_id:"Dounia#5582"
   
}
 
function compare(person1,person2){
    
  for(var i in person1){
     if(person1[i]==person2[i]){
         return true;
      }
      
}
return false;
}

console.log(compare(person1,person2));