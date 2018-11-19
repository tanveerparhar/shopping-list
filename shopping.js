var ul=document.querySelector('ul');
var input=document.querySelector('#userinput');
var addBtn=document.querySelector('#enter');

function mainCode(){  
	var s=document.createElement('span');
    var li=document.createElement('li');
	 li.appendChild(document.createTextNode(input.value));
	 s.appendChild(li);
	 li.addEventListener('click',function(event){
	 	li.classList.toggle('done');
	 })
     var del=document.createElement('button');
     del.appendChild(document.createTextNode('delete'));
     del.classList.add("adjust1");
     s.appendChild(del);
     ul.appendChild(s);
     del.addEventListener('click',function(event){
         ul.removeChild(s);
	 });
     input.value='';
 }

//for enter button
addBtn.addEventListener('click',function(event){
     if(input.value.length>0){
     mainCode()
     }	
});

//for input field
input.addEventListener('keypress',function(event){
	 if(event.keyCode===13 && input.value.length>0){
	 mainCode()
	 }
});
