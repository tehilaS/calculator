'use strict'
function moduleCalculator(){
    let num1;
    let num2;
    let mathematics;
    function getUserValue(){
         num1= document.getElementById("num1").value;
         num2= document.getElementById("num2").value;
         mathematics= document.querySelector('input[name="arithmetic"]:checked');
        
        console.log(changeStringToNum(num1)+changeStringToNum(num2)+mathematics);

        
    }
    
    function changeStringToNum(num){
        return Number.parseInt(num);
        
    }
    function calculator(){
        if(mathematics.value == "multiple"){
           return num1*num2;
           }
          
        else if(mathematics.value == "devide"){
            return num1/num2;
        }
            
        
        else if(mathematics.value == "add"){
                return num1+num2;
                }
           
        
        else{
            return num1-num2;
        }
        
    }
    function appendToHtml(){
        
    }
    
    return {
        getUserValue:getUserValue,
        calculator:calculator
    }

}
 var button = document.getElementById("resultBtn");
 button.addEventListener("click",function() {
     var t = moduleCalculator();
     console.log(t.getUserValue());
     console.log(t.calculator());
 }); 

