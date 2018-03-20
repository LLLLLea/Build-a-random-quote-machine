$(document).ready(function(){  
      var content="";  
      var author=""; 
      var getQuote = function(){  
        $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?",function(json){  
            content = json["quoteText"];  
            author = json["quoteAuthor"];  
            $("#quote-text").html(content); 
            if(author!=="")
              $("#quote-author").html("-- "+author);  
        });  
    } 
  $(".btn").click(function(){  
      getQuote();  
  });
  $(".fa-weibo").click(function(){
    console.log(content+author);
    window.open('http://service.weibo.com/share/share.php?url=http://www.baidu.com');
  });
 
});