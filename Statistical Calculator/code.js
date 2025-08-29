onEvent("button1","click",function(){
  var y = 120;
  var y2=120;
  var x = 67;
  var n = getNumber("text_input1");
  
  for(var c = 0;c<n;c++){
    if(c<6){
      textInput("e"+c,"");
      setPosition("e"+c,x,y,50,50);
      y=y+60;
    } 
   
    else{
      textInput("e"+c,"");
      setPosition("e"+c,x+80,y2,50,50);
      y2=y2+60;
    }
  }
});

onEvent("button4","click",function(){

  

  var n = getNumber("text_input1");
  var mn = [];
  var total = 0 ;
  var mean ;
  for(var c = 0 ; c<n;c++ ){
    appendItem(mn,getNumber("e"+c));
    total = total + mn[c];
  
}
mean = total/mn.length;
setScreen("screen2");
setText("label1",mean);
console.log(mean);
});
onEvent("button3","click",function(){
  var m = getNumber("text_input1");
var x =[];
var temp ;
for(var n = 0;n<m;n++){
  // x=getNumber("e"+n);
appendItem(x,getNumber("e"+n));
  
}
  
    console.log(x);
for(var i = 0 ; i<m;i++){
  
  for(var u=i+1;u<m;u++){
 if(x[i]>x[u]){
      temp=x[i];
      x[i]=x[u];
      x[u]=temp;
    }
  }
  console.log(x)
  if(m%2!=0){
 var med =  (m-1)/2
 console.log( x[med])
}
else{
   var med1 =( x[m/2]+x[m/2-1])/2;
  console.log(med1)
}
}
  
  
  
  
  
  
  
  
});


onEvent("button5","click",function(){
    var m = getNumber("text_input1");
var x =[];
var temp ;
for(var n = 0;n<m;n++){
  // x=getNumber("e"+n);
appendItem(x,getNumber("e"+n));
  
}
  
  for(var i = 0 ; i<m;i++){
  
  for(var u=i+1;u<m;u++){
 if(x[i]==x[u]){
      temp=x[i];
    if( x[i]==x[u]){
        x[u]=temp;
        console.log(temp);
        setScreen("screen3")
        setText("label2",temp)
    }
    }
  }
  }
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
})
