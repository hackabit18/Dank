var output_txt = "Breakpoint 1, main () at h.cpp:7!\
7	    int a = 5;!\
a = 32767!\
b = 0!\
arr = {1, 2, 3}!\
abc = {{5, 2}, {3, 4}}!\
uuuu!\
Breakpoint 8, main () at h.cpp:8!\
8	    a = 6;!\
a = 5!\
b = 0!\
uuuu!\
Breakpoint 9, main () at h.cpp:9!\
9	    long b = a + 1;!\
a = 6!\
b = 0!\
uuuu!\
Breakpoint 10, main () at h.cpp:10!\
10	    cout << a << \" \" << b;!\
a = 6!\
b = 7!\
6 7[Inferior 1 (process 3911) exited normally]";

var datatypes_txt = "type = int!\
type = long!\
type = int [3]!\
type = int [2][2]!\
type = int!\
type = long!\
type = int!\
type = long!\
type = int!\
type = long";
alert("lol");
alert(data.toString());
var container = document.getElementById('container');
//var datatypes = datatypes_txt.split("!");
//var data = output_txt.split('!');
var datatype_index = 0;
var i;
var accordion = document.getElementById('accordion');
var currentFunction = ' ';
var prevFunction = '';
for(i=0; i<data.length; i++) {
    if(data[i] === 'uuuu') {
        continue;
    }
    var index = data[i].indexOf(' ');
    var str = data[i].substring(0, index);
    if(str === 'Breakpoint') {
        
        currentFunction = functionName(data[i]);
        if(currentFunction !== prevFunction) {
            prevFunction = currentFunction;
            accordion.innerHTML += '<h3>' + prevFunction + '</h3>';
            var div = document.createElement('div');
            accordion.appendChild(div);
            div.setAttribute('class', 'accordion');
        }
        i++;
        var programLine = document.createElement('h3');
        programLine.innerHTML = data[i];
        div.appendChild(programLine);
        var divv = document.createElement('div');
        div.appendChild(divv);
        i++;
        while(data[i] !== 'uuuu') {
            if(i == data.length-1)
                break;

            // Checking if the variable is a 2D array
            if(is2DArray(datatypes[datatype_index]) == true) {
                var twod_arr = return2DArray(data[i]);
                var index_of_blank = data[i].indexOf(' ');
                var array_name = data[i].substring(0, index_of_blank);
                for2DArray(twod_arr, array_name, datatypes[datatype_index], divv);
            }
            
            // Checking if the variable is a 1D array
            else if(isArray(datatypes[datatype_index]) == true) {
                var array_arr = returnArray(data[i]);
                var index_of_blank = data[i].indexOf(' ');
                var array_name = data[i].substring(0, index_of_blank);
                for1DArray(array_arr, array_name, datatypes[datatype_index], divv);
            }

            // Checking if the variable is anything else (including single elements)
            else {
                forInt(data[i], datatypes[datatype_index], divv);
            }
            i++;
            datatype_index++;
        }
    }
}

/* To display single element */
function forInt(name, type, div) {
    var button = document.createElement('button');
    button.style.margin = "2px";
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

/* Checks if the string is 2D array using regex */
function is2DArray(s) {
    var pattern = /type\s=\s.*\s[[0-9]*][[0-9]*]/;
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
function for1DArray(arr, name, type, div){
    var length = arr.length;
    forInt(name, type, divv);
    for(var i = 0; i < length; i++ ){
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

/* Helper function to return name of function from Breakpoint line */
function functionName(s) {
    var commaIndex = s.indexOf(',');
    var blankIndex = s.lastIndexOf(' ');
    var str = s.substring(commaIndex + 2, blankIndex - 3);
    return str;
}

function getRandomColor() {
    var letters = 'BCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}
