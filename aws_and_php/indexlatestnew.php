  
  
  
<?php 
echo shell_exec("python3 /var/www/html/speechy.py");
echo "2";


 ?>

<!DOCTYPE html>

<html>

    <head>

 <title>Bootstrap Theme The Band</title>
<style type="text/css" media="screen">
    #editor { 
        position: absolute;
        top: 0;
        right: 0;
        bottom: -220;
        left: 0;
    }
</style>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">












  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

        <title>Live input record and playback</title>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

  <style>
  body {
      font: 400 15px/1.8 Lato, sans-serif;
      color: #777;
  }
  textarea {
      resize: none;
  }
  </style>

    </head>


<body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="50">


 

<style>
body {font-family: Arial, Helvetica, sans-serif;}
* {box-sizing: border-box;}

input[type=text], select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}

input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #45a049;
}

.container {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
}
</style>

<form id="topic_search_form" onSubmit="return false;"  name="topic_search_form" action="">
<textarea id="topic" rows="20" cols="50">
Put your code Here LemonBoi
</textarea>
<input type="submit" class="topic_submit" name="topic_submit" value="Search" >

 </form>
    <script>
$(function() {  
    $(".topic_submit").click(function() {
alert("clicked");  
    var topic = $("#topic").val();
alert(topic);
    refresh = 'false'
 $.ajax({  
        type: "POST",
      //  url:"fdf9924a.ngrok.io/sendhelp/php123.php",  
        url: "testthing123321.php?idd="+topic,  
        data: {'topic': topic},  
        success: function(dataString) {  
document.getElementById("lolwut").innerHTML = dataString.toString();
var datatypes=dataString.toString().split("ppppp")[1].split("</stdio.h>")[0].split("\n");
var outputfile= dataString.toString().split("tttttttttt")[0].split("uuuuu")[1].split("\n");
//alert(dataString.toString().split("tttttttttt")[0].split("uuuuu")[1].split("\n")[4]);
//var newarr=[];
var k=outputfile[4];
for (i = 0; i < outputfile.length; i++) {
  if (outputfile[i]==k){

outputfile[i]="@@@@@@#####";

}
//alert(outputfile[i]);
//////////////////////alert(arr[i]);
}
      //      alert("boa");
//alert(dataString);
        },    

                            error: function() {

                              alert("not so boa!");

                            }

                          });
 
    });  
}); 
     

    </script>
<header>
  <h2 id="lolwut">...........</h2>
</header>


<style type="text/css" media="screen">
.ace_editor {
                border: 1px solid lightgray;
           //     margin: auto;
                height: 200px;
                width: 100%;
        }
        .scrollmargin {
                height: 200px;
        //text-align: center;
        }

    </style>    
<!---<div class="scrollmargin"></div>
<pre id="editor"></pre>--->


<script src="/ace-builds/src-noconflict/ace.js" type="text/javascript" charset="utf-8"></script>
<script>
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");
</script>
    
<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.js"></script>
    <script src="Gruntfile.js"></script>

</body>

</html>
