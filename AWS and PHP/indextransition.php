    


         
  
  
<?php 
//echo shell_exec("python3 /var/www/html/speechy.py");
//echo "2";


 ?>

<!DOCTYPE html>

<html>

    <head>
<script src="ace/ext-language_tools.js" ></script>
 <title>Code Editor</title>
<style type="text/css" media="screen">
    #editor { 
position:absolute;       
      top:100px;
width:60%;

height:600px;
        left: 10%;
    }
 #editor2 { 
position:absolute;       
      top:100px;
margin-left:2px;
width:20%;

height:600px;
        right: 10%;
    }

#editor3 { 
position:absolute;       
      top:700px;
margin-left:2px;
width:80%;

height:90px;
        left: 10%;
    }


</style>
<style>
                        body {
                                padding: 20px;
background-image:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo-bg.jpg);
                        }
                        button {
                                margin-top: 720px;
                                line-height: 60px;
                                font-weight: bold;
                                padding: 0 40px;
                                border: none;
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

<form id="topic_search_form" onSubmit="return false;" style="margin-top:790px;position:relative;left:45%;"  name="topic_search_form" action="">

<input type="submit" class="topic_submit" name="topic_submit" value="Execute" >

 </form>
    <script>
var arrq=[];
var outputfile=[];
$(function() {

//$("#lolwut2").load("ace_edit.php");  
//var editor = ace.edit("editor");
 //   editor.setTheme("ace/theme/monokai");
   // editor.session.setMode("ace/mode/javascript");
//alert(editor.getValue());
//var code = editor.getValue();
//alert("www");
//alert(code)
$(".topic_submit").click(function() {    
//alert("clicked");  
   // var topic = $("#topic").val();
var topic = (editor.getValue());
//alert(topic);
var topic2= (editortxt.getValue());
    refresh = 'false'
 $.ajax({  
        type: "POST",
      //  url:"fdf9924a.ngrok.io/sendhelp/php123.php",  
        url: "testthing123321.php?idd="+topic,  
        data: {'topic': topic+"@@@###"+topic2},  
        success: function(dataString) {  
//alert(dataString);
//document.getElementById("lolwut3").innerHTML = dataString.toString();
//alert("boa");
$("#lolwut").load("graphic.php");
//window.location='graphic.php';
 arrq=dataString.toString().split("ppppp")[1].split("</stdio.h>")[0].toString().split("\n");
document.cookie = "username="+arrq[0]+"; ";
 outputfile= dataString.toString().split("tttttttttt")[0].split("uuuuu")[2].split("\n");
//alert(dataString.toString().split("tttttttttt")[0].split("uuuuu")[1].split("\n")[4]);
//var newarr=[];
var k="";
for (i = 0; i < outputfile.length; i++) {
  if (outputfile[i]==k){

outputfile[i]="@@@@@@#####";

}

//alert(outputfile[i]+outputfile[i].length);
 //window.location = "indexlatest.php";
//alert(outputfile[i]);
//////////////////////alert(arr[i]);
}
//  alert(outputfile[3]);              
document.getElementById("clicker").click();
$("#container").append("<b>Appended text</b>");

      //      alert("boa");
//alert(dataString);
        },    

                            error: function() {

                              alert("not so boa!");

                            }

                          });
 
    });  
});

     
//alert(outputfile[3]);

    </script>

<div id="div1"></div>
<h2 id="clicker" onclick="alert(arrq[9]);lolhaha(outputfile,arrq);window.location='graphic.php';" ></h2>
<header>
  <h2 id="lolwut">.</h2>
</header>

<h2 id="lolwut2">.</h2>
<h2 id="lolwut3">.</h2>

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
<div id="editor">#include &ltiostream&gt
using namespace std;

int main() {
	
	// Insert your code here
}
</div>
<pre id="editor2">
Input Text
</pre>
<pre id="editor3">
Response log
</pre>







<script src="/ace-builds/src-noconflict/ace.js" type="text/javascript" charset="utf-8"></script>
<script>
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");
	// var editor = ace.edit(document.getElementById('test'));
	editor.getSession().setUseWorker(false);
	editor.setOptions({fontSize:"20pt"});
	//ace.require("ace/ext/language_tools");
editor.setOptions({ enableBasicAutocompletion: true });
var editortxt = ace.edit("editor2");
    editortxt.setTheme("ace/theme/monokai");
    editortxt.session.setMode("ace/mode/javascript");
        // var editor = ace.edit(document.getElementById('test'));
        editortxt.getSession().setUseWorker(false);
editortxt.setOptions({fontSize:"18pt"});
var editor21 = ace.edit("editor3");
    editor21.setTheme("ace/theme/monokai");
    editor21.session.setMode("ace/mode/javascript");
        // var editor = ace.edit(document.getElementById('test'));
        editor21.getSession().setUseWorker(false);
editor21.setOptions({fontSize:"15pt"});
//alert (editor.getValue());
</script>


<script type="text/javascript" src="jquery-3.3.1.js"></script>
		<script
			src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"
			integrity="sha256-T0Vest3yCU7pafRw9r+settMBX6JkKN06dqBnpQ8d30="
			crossorigin="anonymous"></script>
		<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">

 

        
                
              <script type="text/javascript" >
//lolhaha(2,3);
//alert("ttteee");




<script>
///alert("wwww");
//alert(editor.getValue(););
function lolhaha(data,datatypes){


alert(data.toString());

alert(datatypes.toString());







var datatype_index = 0;
var i;
var acc = document.getElementById('acc');
var currentFunction = ' ';
var prevFunction = '';
var temp_div;
for(i=0; i<data.length; i++) {
    if(data[i] === '@@@@@@#####') {
        continue;
    }
    if(data[i] == 'No locals.') {
        continue;
    }
    var index = data[i].indexOf(' ');
    var str = data[i].substring(0, index);
    if(str === 'Breakpoint') {
        currentFunction = functionName(data[i]);
        if(currentFunction !== prevFunction) {
            if(i != 0) {
                var temp_button = document.createElement('button');
                temp_button.innerHTML = "End";
                temp_div.appendChild(temp_button);
            }
            var head_button = document.createElement('button');
            head_button.setAttribute('class', 'accordion headAccordion');
            prevFunction = currentFunction;
            head_button.innerHTML = prevFunction;
            acc.appendChild(head_button);
            var div = document.createElement('div');
            acc.appendChild(div);
            div.setAttribute('class', 'panel');
        }
        i++;
        if(data[i] == 'No locals.') {
            forSingleElement('No locals', 'No locals variables in this scope', divv);
            continue;
        }
        var divv = document.createElement('div');
        divv.setAttribute('class', 'panel');
        var programLine = document.createElement('button');
        programLine.setAttribute('class', 'accordion');
        var temp_programLineType = data[i].substring(0, data[i].indexOf(' '));
        var temp_programLine = data[i].substring(data[i].indexOf(' '), );
        programLine.innerHTML = 'Before Line ' + temp_programLineType + ':' + temp_programLine;
        div.appendChild(programLine);
        div.appendChild(divv);
        i++;
        temp_div = div;
        if(data[i] == 'No locals.') {
            forSingleElement('No locals', 'No locals variables in this scope', divv);
            continue;
        }
        while(data[i] !== '@@@@@@#####') {
            if(i == data.length-1)
                break;

            // Checking if the variable is a string array
            if(is2DCharArray(datatypes[datatype_index])) {
                var array_arr = returnArray(data[i]);
                var index_of_blank = data[i].indexOf(' ');
                var array_name = data[i].substring(0, index_of_blank);
                for1DArray(array_arr, array_name, datatypes[datatype_index], divv);
            }

            // Checking if the variable is a string
            else if(isCharArray(datatypes[datatype_index])) {
                forSingleElement(data[i], datatypes[datatype_index], divv);
            }

            // Checking if the variable is a 2D array
            else if(is2DArray(datatypes[datatype_index])) {
                var twod_arr = return2DArray(data[i]);
                var index_of_blank = data[i].indexOf(' ');
                var array_name = data[i].substring(0, index_of_blank);
                for2DArray(twod_arr, array_name, datatypes[datatype_index], divv);
            }
            
            // Checking if the variable is a 1D array
            else if(isArray(datatypes[datatype_index])) {
                var array_arr = returnArray(data[i]);
                var index_of_blank = data[i].indexOf(' ');
                var array_name = data[i].substring(0, index_of_blank);
                for1DArray(array_arr, array_name, datatypes[datatype_index], divv);
            }

            // Checking if the variable is a 2D vector
            else if(is2DVector(datatypes[datatype_index])) {
                var array_arr = returnArray(data[i]);
                var index_of_blank = data[i].indexOf(' ');
                var array_name = data[i].substring(0, index_of_blank);
                for2DVector(array_arr, array_name, datatypes[datatype_index], divv);
            }

            // Checking if the variable is a 1D vector
            else if(isVector(datatypes[datatype_index])) {
                var array_arr = returnArray(data[i]);
                var index_of_blank = data[i].indexOf(' ');
                var array_name = data[i].substring(0, index_of_blank);
                for1DVector(array_arr, array_name, datatypes[datatype_index], divv);
            }

            // Checking is the variable is a stack
            else if(isStack(datatypes[datatype_index])) {
                var array_arr = returnArray(data[i]);
                var index_of_blank = data[i].indexOf(' ');
                var array_name = data[i].substring(0, index_of_blank);
                for1DArray(array_arr, array_name, datatypes[datatype_index], divv);
            }

            // Checking is the variable is a quene
            else if(isQuene(datatypes[datatype_index])) {
                var array_arr = returnArray(data[i]);
                var index_of_blank = data[i].indexOf(' ');
                var array_name = data[i].substring(0, index_of_blank);
                for1DArray(array_arr, array_name, datatypes[datatype_index], divv);
            }

            // Checking if the variable is anything else (including single elements)
            else {
                forSingleElement(data[i], datatypes[datatype_index], divv);
            }
            i++;
            datatype_index++;
        }
    }
    if(i == data.length-1) {
        var temp_button = document.createElement('button');
        temp_button.innerHTML = "End";
        div.appendChild(temp_button);
    }
}

/* To display single element */
function forSingleElement(name, type, div) {
    var button = document.createElement('button');
    button.style.margin = "10px";
    button.innerHTML = name;
    button.style.background = getRandomColor();
    button.setAttribute("title", type);
    div.appendChild(button);
}

/* Checks if the string is 1D array using regex */
function isArray(s) {
    var pattern = /type\s=\s.*\s[[0-9]*]/;
    return pattern.test(s);
}

/* Checks if the string is 1D char array using regex */
function isCharArray(s) {
    var pattern = /type\s=\schar\s[[0-9]*]/;
    return pattern.test(s);
}

/* Checks if the string is 2D char array using regex */
function is2DCharArray(s) {
    var pattern = /type\s=\schar\s[[0-9]*][[0-9]*]/;
    return pattern.test(s);
}

/* Checks if the string is 2D array using regex */
function is2DArray(s) {
    var pattern = /type\s=\s.*\s[[0-9]*][[0-9]*]/;
    return pattern.test(s);
}

/* Checks if the string is a 1D vector */
function isVector(s) {
    var flag = false;
    if(s.substring(7, 18) === 'std::vector') {
        flag = true;
    }
    return flag;
}

/* Checks if the string is a 2D vector */
function is2DVector(s) {
    if(s.substring(7, 18) === 'std::vector') {
        var index_of_brac = s.indexOf('<');
        var last_index_of_brac = s.lastIndexOf('>');
        var str = s.substring(index_of_brac+1, last_index_of_brac);
        var vec = str.substring(0, 11);
        var flag = false;
        if(vec === 'std::vector') {
            flag = true;
        }
        return flag;
    }
    else {
        return false;
    }
}

/* Checks if the string is a stack */
function isStack(s) {
    var pattern = /type\s=\sclass\sstd::stack.*/;
    return pattern.test(s);
}

/* Checks if the string is a quene */
function isQuene(s) {
    var pattern = /type\s=\sclass\sstd::quene.*/;
    return pattern.test(s);
}

/* Helper function to convert a string to array */
function returnArray(s) {
    var firstIndex = s.indexOf('{');
    var lastIndex = s.lastIndexOf('}');
    var str = s.substring(firstIndex + 1, lastIndex);
    var arr = str.split(",");
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i].trim();
    }
    return arr;
}

/* Helper function to convert string to 2D array */
function return2DArray(s) {
    var firstIndex = s.indexOf('{');
    var lastIndex = s.lastIndexOf('}');
    var str = s.substring(firstIndex+1, lastIndex);
    var temp = '';
    var a;
    var arr = [];
    var open_index = 0, close_index = 0;
    for(var i=0; i<str.length; i++) {
        if(str.charAt(i) == '{') {
            open_index = i;
            temp = temp + str.charAt(i);
        }
        else if(str.charAt(i) == '}') {
            close_index = i;
            temp = temp + str.charAt(i);
            a = returnArray(temp);
            arr.push(a);
            temp = '';
        }
        else {
            temp = temp + str.charAt(i);
        }
    }
    return arr;
}

/* To display 1D arrays */
function for1DArray(arr, name, type, div) {
    var length = arr.length;
    forSingleElement(name, type, divv);
    for(var i = 0; i < length; i++ ) {
        var button = document.createElement('button');
        button.innerHTML = arr[i];
        button.setAttribute("title", type);
        button.style.background = getRandomColor();
        div.appendChild(button);
    }
}

/* To display 2D arrays */
function for2DArray(arr, name, type, div) {
    div.innerHTML += '<br/>';
    var new_div = document.createElement('div');
    var button_name = document.createElement('button');
    button_name.innerHTML = name;
    new_div.appendChild(button_name);
    button_name.style.background = getRandomColor();
    button_name.style.paddingBottom = '0px';
    button_name.style.marginBottom = '0px';
    new_div.innerHTML += '<br/>';
    var length = [arr.length, arr[0].length];
    for(var i=0; i<length[0]; i++) {
        for(var j=0; j<length[1]; j++) {
            var button = document.createElement('button');
            button.innerHTML = arr[i][j];
            button.style.marginTop = '0px';
            button.style.paddingTop = '0px';
            button.style.marginBottom = '0px';
            button.style.paddingBottom = '0px';
            
            button.setAttribute('title', type);
            button.style.background = getRandomColor();
            new_div.appendChild(button);

        }
        new_div.innerHTML += '<br/>';
    }
    div.appendChild(new_div);
}

/* To display 1D vectors */
function for1DVector(arr, name, type, div){
    var length = arr.length;
    var button = document.createElement('button');
    button.innerHTML = name;
    button.setAttribute('class', 'vector_button');
    button.style.background = getRandomColor();
    button.setAttribute("title", type);
    div.appendChild(button);
    for(var i = 0; i < length; i++ ){
        var but = document.createElement('button');
        but.setAttribute('class', 'vector_button');
        but.innerHTML = arr[i];
        but.setAttribute("title", type);
        but.style.background = getRandomColor();
        div.appendChild(but);
    }
}

/* To display 2D arrays */
function for2DVector(arr, name, type, div) {
    div.innerHTML += '<br/>';
    var new_div = document.createElement('div');
    var button_name = document.createElement('button');
    button_name.innerHTML = name;
    new_div.appendChild(button_name);
    button_name.style.background = getRandomColor();
    button_name.style.paddingBottom = '0px';
    button_name.style.marginBottom = '0px';
    new_div.innerHTML += '<br/>';
    var length = [arr.length, arr[0].length];
    for(var i=0; i<length[0]; i++) {
        for(var j=0; j<length[1]; j++) {
            var button = document.createElement('button');
            button.innerHTML = arr[i][j];
            button.style.marginTop = '0px';
            button.style.paddingTop = '0px';
            button.style.marginBottom = '0px';
            button.style.paddingBottom = '0px';
            
            button.setAttribute('title', type);
            button.style.background = getRandomColor();
            new_div.appendChild(button);

        }
        new_div.innerHTML += '<br/>';
    }
    div.appendChild(new_div);
}

/* Helper function to return name of function from Breakpoint line */
function functionName(s) {
    var commaIndex = s.indexOf(',');
    var blankIndex = s.lastIndexOf(' ');
    var str = s.substring(commaIndex + 2, blankIndex - 3);
    return str;
}

/* Helper function to generate random colour */
function getRandomColor() {
    var letters = 'BCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}





alert("45");

alert(datatypes.toString());
$(document).ready(function(){
alert("2");
  //  $("button").click(function(){
        $("#div1").load("indice.php");
  
});

}


</script>



<div class="acc" id="acc"></div>
		//<script src="js/temp_button.js"></script>
        <script>
        var acc = document.getElementsByClassName("accordion");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight){
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                } 
            });
        }
        </script>




<script>$("#container").append('<b>Appended text</b>');
</script>    

<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.js"></script>
    <script src="Gruntfile.js"></script>

</body>

</html>
