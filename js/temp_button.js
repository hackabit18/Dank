/*var output_txt = "Breakpoint 1, main () at h.cpp:7!\
7	    int a = 5;!\
a = 32767!\
b = 0!\
var = std::vector of length 3, capacity 3 = {97 'a', 98 'b', 99 'c'}!\
arr = \"avz\"!\
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
type = std::vector<char>!\
type = char [3]\
type = int!\
type = long!\
type = int!\
type = long!\
type = int!\
type = long"; */

var output_txt = 'Breakpoint 11, main () at h.cpp:12!\
12	    int x = fact(5);!\
x = 0!\
b = {1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5}!\
c = 5!\
uuuu!\
Breakpoint 1, fact (n=5) at h.cpp:4!\
4	    if(n == 1){!\
No locals.!\
uuuu!\
Breakpoint 6, fact (n=5) at h.cpp:8!\
8	        return n*fact(n - 1);!\
No locals.!\
uuuu!\
Breakpoint 1, fact (n=4) at h.cpp:4!\
4	    if(n == 1){!\
No locals.!\
uuuu!\
Breakpoint 6, fact (n=4) at h.cpp:8!\
8	        return n*fact(n - 1);!\
No locals.!\
uuuu!\
Breakpoint 1, fact (n=3) at h.cpp:4!\
4	    if(n == 1){!\
No locals.!\
uuuu!\
Breakpoint 6, fact (n=3) at h.cpp:8!\
8	        return n*fact(n - 1);!\
No locals.!\
uuuu!\
Breakpoint 1, fact (n=2) at h.cpp:4!\
4	    if(n == 1){!\
No locals.!\
uuuu!\
Breakpoint 6, fact (n=2) at h.cpp:8!\
8	        return n*fact(n - 1);!\
No locals.!\
uuuu!\
Breakpoint 1, fact (n=1) at h.cpp:4!\
4	    if(n == 1){!\
No locals.!\
uuuu!\
Breakpoint 5, fact (n=1) at h.cpp:5!\
5	        return 1;!\
No locals.!\
uuuu!\
Breakpoint 9, fact (n=1) at h.cpp:10!\
10	}!\
No locals.!\
uuuu!\
Breakpoint 9, fact (n=2) at h.cpp:10!\
10	}!\
No locals.!\
uuuu!\
Breakpoint 9, fact (n=3) at h.cpp:10!\
10	}!\
No locals.!\
uuuu!\
Breakpoint 9, fact (n=4) at h.cpp:10!\
10	}!\
No locals.!\
uuuu!\
Breakpoint 9, fact (n=5) at h.cpp:10!\
10	}!\
No locals.!\
uuuu!\
Breakpoint 13, main () at h.cpp:13!\
13	    cout<<x;!\
x = 120!\
120[Inferior 1 (process 28720) exited normally]';

var datatypes_txt = 'type = int!\
type = int [25]!\
type = int!\
type = int';

var datatypes = datatypes_txt.split("!");
var data = output_txt.split('!');
var datatype_index = 0;
var i;
var acc = document.getElementById('acc');
var currentFunction = ' ';
var prevFunction = '';
var temp_div;
for(i=0; i<data.length; i++) {
    if(data[i] === 'uuuu') {
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
        var divv = document.createElement('div');
        if(data[i] == 'No locals.') {
            forSingleElement('No locals', 'No locals variables in this scope', divv);
            continue;
        }
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
        while(data[i] !== 'uuuu') {
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
            divv.innerHTML += '<br/>';
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
    button.style.marginLeft = "0";
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
    var button = document.createElement('button');
    button.style.marginLeft = "0";
    button.style.marginRight = "0";
    button.innerHTML = name;
    button.style.background = getRandomColor();
    button.setAttribute("title", type);
    div.appendChild(button);
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