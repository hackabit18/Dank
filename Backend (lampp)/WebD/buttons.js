var output_txt = "Breakpoint 1, main () at h.cpp:7!\
7	    int a = 5;!\
a = 32767!\
b = 0!\
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
type = int!\
type = long!\
type = int!\
type = long!\
type = int!\
type = long";

var container = document.getElementById('container');
var datatypes = datatypes_txt.split("!");
var data = output_txt.split('!');
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
            forInt(data[i], datatypes[datatype_index++], divv);
            i++;
        }
    }
}


function forInt(name, type, div) {
    var button = document.createElement('button');
    button.style.margin = "2px";
    button.innerHTML = name;
    button.style.background = getRandomColor();
    button.setAttribute("title", type);
    div.appendChild(button);
}

function isArray(s){
//    var pattern = /type\s=\s[A-Za-z][A-Za-z0-9]*\s\([^)]+\)/i;
    var pattern = /type\s=\s.*\s[[0-9]*]/;
    return pattern.test(s);
}
//alert(isArray("type = long long [3][5]"));

function returnArray(s){
    var firstIndex = s.indexOf('{');
    var lastIndex = s.lastIndexOf('}');
    var str = s.substring(firstIndex + 1, lastIndex);
    var arr = str.split(",");
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i].trim();
    }
    return arr;
}

for1DArray(returnArray("arr = {5, 2, 3, 6, 7}"), "int [5]", divv);

function for1DArray(arr, type, div){
    var length = arr.length;
    forInt("arr", type, divv);
    for(var i = 0; i < length; i++ ){
        var button = document.createElement('button');
        button.innerHTML = arr[i];
        button.setAttribute("title", type);
        button.style.background = getRandomColor();
        div.appendChild(button);
    }
//    var button = document.createElement('button');
//    var button1 = document.createElement('button');
//    button.innerHTML = name;
//    button1.innerHTML = name;
//    button.style.background = getRandomColor();
//    div.appendChild(button);
//    div.appendChild(button1);
}

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