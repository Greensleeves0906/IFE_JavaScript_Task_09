//前序
var arrQuery = [];
function DLR(root){	
	arrQuery.push(root);
	for (var i = 0; i < root.children.length; i++) {		
		DLR(root.children[i]);	
	}
}	

//后序

function LRD(root){
	for (var i = 0; i < root.children.length; i++) {
			LRD(root.children[i]);
	}
	arrQuery.push(root);
}

function changeColor(arrQuery){
	for (var i=0; i<arrQuery.length; i++){
		(function(i){
			setTimeout(function(){
				arrQuery[i].style.backgroundColor="#92959a";
			},i*1000);
		})(i);
	}
}


function CLEAR(){
		var allDiv = document.getElementsByTagName('div');
		for (var i = 0; i < allDiv.length; i++) {
			allDiv[i].style.backgroundColor="white";
		}
}	


function SEARCH(arrQuery){
	var ele = document.getElementById("ele").value;
	var arrText = [];
	for (var i = 0; i < arrQuery.length; i++) {
		arrText[i] = arrQuery[i].firstChild.nodeValue;
	}
	var num = arrText.indexOf(ele);
	setTimeout(function(){
		arrQuery[num].style.backgroundColor = "#e74f4d";
	},num*1000);
}

function changeBlue(x){
	x.style.backgroundColor="#b2d235";
}

function DELETE(x){
	var pNode = x.parentNode;//先获取父节点
	pNode.removeChild(x);//再删除父节点的待删子节点
}
function ADD(x){
	var add = document.getElementById("add").value;
	var div = document.createElement("div");
	var text = document.createTextNode(add);
	div.appendChild(text);
	x.appendChild(div);
}
function init(){
	var root = document.getElementById('root');
	var add = document.getElementById("add").value;
	var TARGET;
	root.onclick = function(){
		TARGET = event.target
		changeBlue(TARGET);
	};
	document.getElementById('delete').onclick = function(){
		if(!TARGET){
			alert("请选中待删节点");
		}
		else{
			DELETE(TARGET);		
		}

	};
	document.getElementById("addEle").onclick = function(){
		if(!TARGET){
			alert("请选中待添加父节点");
		}else if(!add){
			alert("请输入添加节点内容");
		}else{
			ADD(TARGET);		
		}
	}
	document.getElementById("DLR").onclick = function(){
		CLEAR();
		DLR(root);
		changeColor(arrQuery);
	}
		document.getElementById("LRD").onclick = function(){
		CLEAR();
		LRD(root);
		changeColor(arrQuery);
	}
		document.getElementById("DLRsearch").onclick = function(){
			CLEAR();
			DLR(root);
			changeColor(arrQuery);
			SEARCH(arrQuery);
	}
		document.getElementById("LRDsearch").onclick = function(){
			CLEAR();
			LRD(root);
			changeColor(arrQuery);
			SEARCH(arrQuery);	
	}
}
init();