var a = "";
var stop = 0;
var count = 0 
hideElement("label4")
hideElement("button32")
function word(x){
  a = a+x ;
  setText("label1",a);
  onEvent("button31","click",function(){
    a=""
    setText("label1",a)
  })
 
}
//Code for deleting the data from the table when Run button is clicked
readRecords("Checking",{},function(y){
  for(var i = 0 ; i<y.length;i++){
    deleteRecord("Checking",{id:y[i].id},function(){

    });
  }
});



function check(){
  //Code for checking the duplicates
   readRecords("Checking",{},function(z){
     
    for(var x = 0 ; x<z.length;x++){
      if(a==z[x].fruits){
        showElement("label4");
        showElement("button32")
          stop=1;
        setText("label1","");
        a="";
        
    onEvent("button32","click",function(){
      hideElement("label4")
      hideElement("button32")
      stop=0
    })
      
      }
    }
  });
  
  
  
  
  readRecords("Words",{},function(y){
    
    for(var i = 0 ; i<y.length ; i++){
      if(a==y[i].Fruits && stop == 0){
        createRecord("Checking",{fruits:a},function(){
          
        });
      setText("label2",getText("label2")+","+a);
      setText("label1","");
      a="";
      count++;
      if(count==5){
        playSound()
        setScreen("screen1")
      }
      }
    }
  });
  
 
}
onEvent("button14","click",function(){
  setScreen("screen")
  
  
})

onEvent("button1","click",function(){
// setText("label1",getText("label1")+getText("button1")); 
word(getText("button1"))
check()
});

onEvent("button2","click",function(){
// setText("label1",getText("label1")+getText("button2")); 
word(getText("button2"))
check()
});

onEvent("button3","click",function(){
// setText("label1",getText("label1")+getText("button3")); 
word(getText("button3"))
check()
});
onEvent("button","click",function(){
// setText("label1",getText("label1")+getText("button3")); 
word(getText("button"))
check()
});

onEvent("button13","click",function(){
// setText("label1",getText("label1")+getText("button3")); 
word(getText("button13"))
check()
});

onEvent("button12","click",function(){
// setText("label1",getText("label1")+getText("button3")); 
word(getText("button12"))
check()
});

 onEvent("button5","click",function(){
// setText("label1",getText("label1")+getText("button3")); 
word(getText("button5"))
check()

onEvent("button16","click",function(){
// setText("label1",getText("label1")+getText("button3")); 
word(getText("button16"))
check()
});



onEvent("button15","click",function(){
// setText("label1",getText("label1")+getText("button3")); 
word(getText("button15"))
check()
});

onEvent("button18","click",function(){
// setText("label1",getText("label1")+getText("button3")); 
word(getText("button18"))
check()
});
})

onEvent("button9","click",function(){
// setText("label1",getText("label1")+getText("button3")); 
word(getText("button9"))
check()
});

onEvent("button8","click",function(){
// setText("label1",getText("label1")+getText("button3")); 
word(getText("button8"))
check()
});

onEvent("button4","click",function(){
// setText("label1",getText("label1")+getText("button3")); 
word(getText("button4"))
check()
});

onEvent("button17","click",function(){
// setText("label1",getText("label1")+getText("button3")); 
word(getText("button17"))
check()
});

onEvent("button10","click",function(){
// setText("label1",getText("label1")+getText("button3")); 
word(getText("button10"))
check()
});

onEvent("button11","click",function(){
// setText("label1",getText("label1")+getText("button3")); 
word(getText("button18"))
check()
});

onEvent("button7","click",function(){
// setText("label1",getText("label1")+getText("button3")); 
word(getText("button7"))
check()
});

onEvent("button6","click",function(){
// setText("label1",getText("label1")+getText("button3")); 
word(getText("button6"))
check()
});

onEvent("button27","click",function(){
// setText("label1",getText("label1")+getText("button3")); 
word(getText("button27"))
check()
});

onEvent("button26","click",function(){
// setText("label1",getText("label1")+getText("button3")); 
word(getText("button26"))
check()
});

onEvent("button25","click",function(){
// setText("label1",getText("label1")+getText("button3")); 
word(getText("button25"))
check()
});

onEvent("button24","click",function(){
// setText("label1",getText("label1")+getText("button3")); 
word(getText("button24"))
check()
});

onEvent("button23","click",function(){
// setText("label1",getText("label1")+getText("button3")); 
word(getText("button23"))
check()
});

onEvent("button30","click",function(){
// setText("label1",getText("label1")+getText("button3")); 
word(getText("button30"))
check()
});

onEvent("button22","click",function(){
// setText("label1",getText("label1")+getText("button3")); 
word(getText("button22"))
check()
});

onEvent("button21","click",function(){
// setText("label1",getText("label1")+getText("button3")); 
word(getText("button21"))
check()
});

onEvent("button20","click",function(){
// setText("label1",getText("label1")+getText("button3")); 
word(getText("button20"))
check()
});

onEvent("button19","click",function(){
// setText("label1",getText("label1")+getText("button3")); 
word(getText("button19"))
check()
});

onEvent("button28","click",function(){
// setText("label1",getText("label1")+getText("button3")); 
word(getText("button28"))
check()
});

onEvent("button29","click",function(){
// setText("label1",getText("label1")+getText("button3")); 
word(getText("button29"))
check()
});

onEvent("button31","click",function(){
  
  setText("label1","")
  
  })







