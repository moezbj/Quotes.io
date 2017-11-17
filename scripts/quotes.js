var quoteList = [{quote : "I love you the more in that I believe you had liked me for my own sake and for nothing else.I love you the more in that I believe you had liked me for my own sake and for nothing else." , author:"-John Keats"}, {quote : "But man is not made for defeat. A man can be destroyed but not defeated." , author:"-Ernest Hemingway"}, {quote : "When you reach the end of your rope, tie a knot in it and hang on." , author:"-Franklin D. Roosevelt"}];
		 var authorList = ["author1", " author2", "author3"];

		function randomquote(){
 			var index = Math.floor(Math.random()*quoteList.length);
 			return index;
 		}
		$(document).ready(function() {
			

			$(".mybutton").on("click", function(){
				item=randomquote();
           		// Only change code below this line.
           		$(".displayquote").html(quoteList[item].quote);
           		$(".displayauthor").html(quoteList[item].author);
     			 // Only change code above this line.
     			});
	
	
 });	

 document.getElementById('twitter').onclick=function(){
 	var citation=document.getElementById('citation').innerHTML;
  window.open('https://twitter.com/intent/tweet?text=' + citation);
 };