var postBtn=document.getElementById("post-btn");
var postContainer=document.getElementById("post-container");


if(postBtn){
	postBtn.addEventListener ("click",function() {

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://www.tworksystem.com/wp-json/wp/v2/posts/1133');
    ourRequest.onload= function() {
		if(ourRequest.status >= 200 && ourRequest.status < 400){
			var data = JSON.parse(ourRequest.responseText);
			      createHTML(data);
 
	} else{
		console.log("connected to serveR,but return error");
	}
};
ourRequest.onerror=function(){
console.log("connection error");};

ourRequest.send();
});
}
function createHTML(postsData){
	var ourHTMLString='';
	for(i=0;i<postsData.length;i++){
		ourHTMLString+='<h2>'+ postsData[i].title.rendered + '</h2>';
		ourHTMLString+= postsData[i].content.rendered;
	}
	postContainer.innerHTML=ourHTMLString;
}

