<script type="text/javascript">
function mbtlist(json) {
var ListBlogLink = "https://www.regionlitoral.net";
var ListCount = 5;
var TitleCount = 10;
var ListLabel ="parana";
var Ciudad =" ";
var Categoria ="Tierra de Palmares";
var ChrCount = 40;
var ImageSize = 400;
  document.write("<div><div class='videos'><ul>"); 
    for (var i = 0; i < ListCount; i++) {  
        var listing= ListUrl = ListTitle = ListConten = ListContent =ListImage =thumbUrl =sk = ""; 
        for (var j = 0; j < json.feed.entry[i].link.length; j++) { 
            if (json.feed.entry[i].link[j].rel == 'alternate') { 
              break; 
            } 
        } ListUrl=  json.feed.entry[i].link[j].href ; 
        if (json.feed.entry[i].title!= null) { 
          ListTitle= json.feed.entry[i].title.$t.substr(0, TitleCount); 
        } 
        ListConten = json.feed.entry[i].content.$t; 
        ListContent= ListConten.replace(/(<([^>]+)>)/ig,"").substr(0, ChrCount);
        if (json.feed.entry[i].media$thumbnail) { 
            thumbUrl = json.feed.entry[i].media$thumbnail.url;
            sk= thumbUrl.replace("/s72-c/","/s"+ImageSize+"/"); 
            ListImage= sk.replace("?imgmax=800","") ;                        
        } 
        else if (json.feed.entry[i].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/) != null) { 
          ListImage =  json.feed.entry[i].content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)[1]; 
        } else {  
            ListImage= "'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7bqoI613nZxexzoyGam5ITlLdz3NUb6XUF1HxPs9qBm8RxSsoETjjyVHKoqlJ0r1bsm1uTS9-un2N-B99ahdoHh4fcff6y4I0c9DBM0lAiE6kOr6fHdL5HpuwNcCu9u3USxAatDmldIs/s200/Icon.png'"; 
        } 
        var listing = "<li><div class='videos-item'><a class='box-image img-effect' href='"+ListUrl+"' style='background:url(\""+ListImage+"\") no-repeat center center;background-size: cover'></a><div class='recent-content'><h3 class='recent-title'><a href='"+ListUrl+"'>"+ListTitle.substr(0, 50)+"</a></h3></div></div></li>"; 
    document.write(listing); 
} document.write("</ul></div></div>");
 } </script>  