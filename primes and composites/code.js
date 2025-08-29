onEvent("button1","click",function(){
  var a = getNumber("text_input1");
  for(var x =2;x<a;x++){
    console.log(x);
    if(a%x==0){
      setText("label2","composite");
      break;
    }
    else
    setText("label2","prime");
  }
});