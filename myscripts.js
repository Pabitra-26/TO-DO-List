var list=[];	
var j=0;

		function myFunction(val){
			list.push(val);
			j+=1;							
		}

		function display(){
			var i;
			var text;
			text="<ul id=\"align\">";
			for(i=0;i<list.length;i++){
							
				text+="<li>"+list[i]+" <button onclick='display_del("+i+")'>Delete</button>   </li><br>";			
			}
			text+="</ul></p>";
			clear();
			percent_completed();
			return text
		}

		function check(val){
			var i=0;
			var flag=0;
			for(i=0;i<list.length;i++){
				if(list[i].toLowerCase()==val.toLowerCase() ){
					flag=1;
					break;
				}
			}
			if(flag==1){
				alert("Task already exists in the list");
				clear();
			}
			else{
				myFunction(val);
			}
		}

		function clear(){
			document.getElementById('enter').value='';			
		}

		function display_del(i){
			list.splice(i,1);
			document.getElementById("demo").innerHTML=display();
			percent_completed();
		}

		function percent_completed(){
			var d= new Date();
			document.getElementById('date').innerHTML=d.toDateString();
			document.getElementById("no").innerHTML=list.length;
			var m=100-((list.length/j)*100);
			if(j==0){
				document.getElementById("per").innerHTML="0%";
			}
			else{		
				document.getElementById("per").innerHTML=m.toFixed(2)+"%";
			}
		}
		
		function add(val,i){
			list[i]=val;
			document.getElementById('demo').innerHTML=display();
		}