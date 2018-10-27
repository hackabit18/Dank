# Dank

GameToDebug is a C++ visual debugger that allows you to track the changes in your code at every step.

### Instructions to use GameToDebug:
* Put the code in the h.cpp file in the gdb folder.
* Run the new.py script in the gdb folder.
* Certain new files will be generated in the gdb folder, among which, output.txt and datatypes.txt are the log files that will be used to generate the debugger.
* We're sending a request from AWS to localhost using a POST request, thus we get the required log files which we parse in PHP, and then we read them as lists in JavaScript. (Pending. For now, we've added sample variables in the javascript file.)
* Finally, we use HTML, CSS and JavaScript to display the debugging details in an accordion format on the webpage. For an example, open temp_code.html.