<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Teezus News</title>
</head>
<body>
    <form>
        News: <input id ="newstext" name = "city">
        <input id = "news" type = "button" value = "click for Teezy News" onclick ="loadData()">
    </form>


    <div id ="text"></div>
    <div id ="information"></div>
    <div id ="paper"></div>

    <script>
    document.getElementById("newstext").addEventListener('click',loadData);


    function loadData(){
        
        
        var newsElement = document.getElementById("newstext");
        var newsName = newsElement.value;
        
        //step 1
        var xhr = new XMLHttpRequest();
        console.log(xhr);
        //step 2
        xhr.open('GET','https://newsapi.org/v2/top-headlines?country=us'+ newsName +'&apiKey=0839cc440e15485f8bfc20033f9d0420',true);

        //step 3
        xhr.onload = function(){
            if(xhr.status == 200){
                console.log(xhr.responseText);
                
                //step 5
                var parsed =JSON.parse(xhr.responseText)
                console.log(parsed);

                document.getElementById("text").innerText = "Author: "+ parsed.articles[0].author;
                document.getElementById("information").innerText = "Headline: "+ parsed.articles[0].content;
                document.getElementById("paper").innerText = "Story: "+ parsed.articles[0].description;

            }
        }

        //step 4
        xhr.send();
    }


    </script>
    
</body>
</html>