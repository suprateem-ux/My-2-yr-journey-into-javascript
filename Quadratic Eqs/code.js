onEvent("button1","click",function(){
  var a = getNumber("text_input1");
  var b = getNumber("text_input3");
  var c = getNumber("text_input4");
  
  var d = b*b-4*a*c;
  
  if(d==0){
    var x = -b/2*a;
    setText("label5","Roots are equal.The root is"+" "+x);
  }
  
  else if(d>0){
    var x1 = (-b+Math.sqrt(d))/2*a;
    var x2 = (-b-Math.sqrt(d))/2*a;
    setText("label5","Roots are real"+" "+x1+","+x2);
  }
else{
    var x3 = (Math.sqrt(-d))/2*a;
    var x4 = -b/2*a;
    setText("label5","Roots are unimaginary which are"+" "+x3+","+x4);
  }
  
  
  
  
  
  
  
  
  
  
  
  
})