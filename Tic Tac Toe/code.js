 var c = 0 ;
var score1 = 0 ;
var score2 = 0;
hideElement("label1");


function chances(chance){
  if(c%2==0){
    setText("button"+chance,"0");
    
  }
else{
  setText("button"+chance,"X");
}

}

 function winner(){
  if(getText("button1")== getText("button2")&& getText("button2")==getText("button3")&&getText("button1")!=""){
    return true ;
    
  }
  else if(getText("button4")== getText("button5")&& getText("button5")==getText("button6")&&getText("button6")!=""){
    return true ;
  }
 else if(getText("button7")== getText("button8")&& getText("button8")==getText("button9")&&getText("button8")!=""){
    return true;
 }
 else if(getText("button1")== getText("button4")&& getText("button4")==getText("button7")&&getText("button1")!=""){
    return true;
 }
 else if(getText("button2")== getText("button5")&& getText("button5")==getText("button8")&&getText("button8")!=""){
    return true;
 }
 else if(getText("button3")== getText("button6")&& getText("button6")==getText("button9")&&getText("button9")!=""){
    return true;
 }
 else if(getText("button7")== getText("button8")&& getText("button8")==getText("button9")&&getText("button8")!=""){
    return true;
 }
 else if(getText("button1")== getText("button5")&& getText("button5")==getText("button9")&&getText("button9")!=""){
    return true;
 }
 else if(getText("button3")== getText("button5")&& getText("button5")==getText("button9")&&getText("button9")!=""){
    return true;
 }
 else{
   return false;
 
 }

  }
  
  
function checking(){
  if(winner()){
   if(c%2==0){
     console.log("Player 2 is the winner");
     showElement("label1")
    setText("label1","PLAYER 2 IS THE WINNER")
    score1++
    setText("label4",score1);
    
   }
   else{
     console.log("Player 1 is the winner")
     showElement("label1");
    setText("label1","PLAYER 1 IS THE WINNER")
   score2++
   setText("label3",score2)
   }
  }
  else if(c==9){
    console.log("Draw")
  }
 
  
  
  
  
}






onEvent("button1","click",function(){
  

if(getText("button1")==""&& !winner()){
  
  c++;
chances(1);
checking();
}
});

onEvent("button2","click",function(){
  if(getText("button2")==""&& !winner()){
  c++;
   chances(2);
   
   checking();
  }
   
});
onEvent("button3","click",function(){
  if(getText("button3")==""&& !winner()){
  c++;
  chances(3);
  checking();}
});
onEvent("button4","click",function(){
  if(getText("button4")==""&& !winner()){
  c++;
  chances(4);
  checking();}
});
onEvent("button5","click",function(){
  if(getText("button5")==""&& !winner()){
  c++;
  chances(5);
  checking();}
});
onEvent("button6","click",function(){
  if(getText("button6")==""&& !winner()){
  c++;
  chances(6);
  checking();}
});
onEvent("button7","click",function(){
  if(getText("button7")==""&& !winner()){
  c++;
  chances(7);
  checking();}
});
onEvent("button8","click",function(){
  if(getText("button8")==""&& !winner()){
  c++;
  chances(8);
  checking();
  }
});
onEvent("button9","click",function(){
  if(getText("button9")==""&& !winner()){
  c++;
  chances(9);
  checking();}
});
