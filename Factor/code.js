onEvent("button1","click",function(){
  var a = getNumber("text_input1")
for(var v = 1;v<a;v++){
    if(a%v==0){
      setText("label2",getText("label2")+","+v)
   
       
    }
  }
})
  
  
  
  
  
  
  
