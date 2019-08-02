$(document).ready(function(){
       $("#1").click(function(){
        $.ajax({
            type:"GET",
            url:"book.json",
            success:function(data)
            {   var x=$("#opt").val();
                var output=" ";
                for(var i in data)
                {   
                    var name=data[i].name;
                    var author=data[i].author;
                    var genre=data[i].genre;
                    var description=data[i].descript;
                    var img=data[i].img;
                    var price=data[i].price;

                   
                    if(genre==x){
                        output+="<div class='col col-sm-4 col-4 d-flex align-items-stretch'><div class='card'> <img src='"+img+"'width='200px'height='150px'class='card-img-top'><div class='card-body'Book Name :>"+name+"<br>Author :"+author+"<br>Genre :"+genre+"<br>Description :"+description+"<br>Price :"+price+"<br></div></div><br><br></div><br><br>";  
                    }
                    if(x=="select"){ 
                        output+="<div class='col col-sm-4 col-4 d-flex align-items-stretch'><div class='card'> <img src='"+img+"'width='200px'height='150px'class='card-img-top'><div class='card-body'Book Name :>"+name+"<br>Author :"+author+"<br>Genre :"+genre+"<br>Description :"+description+"<br>Price :"+price+"<br></div></div><br><br></div><br><br>";
                    }
                   
                    console.log(x);
                    console.log(data[i].genre);
                }
                $("#book").html(output);
            }
        });
    });
});