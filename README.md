# Dank

#IDEA#

While studing various algorithms and data structures understanding of the code written greatly depends on how well we visualise the
code. Teachers, moocs and youtube channels try to do that whether by drawing manually or using a software to do that but there is no generalised way to do this yet. Our idea 'gameToDebug' is solving this problem. Our debugger helps the user to visualise code using graphics and shapes, what is happening in your line of code, which function you are in, what variables are changing in that line of code, we are showing it all using a generalised graphical representation.

#TOOLS & TECHNOLOGIES#

gcc and gdb(GNU debugger), python (Importing: subprocess), PHP, JavaScript, AWS Server, CSS, HTML

#INSTRUCTIONS TO RUN gameToDebug#
* The application is hosted at dank.gametodebug.tech
* You can add your code directly to the code editor.

OR

* Clone the repository.
* Put the code in the h.cpp file in the gdb folder.
* Run the new.py script in the gdb folder.
* Certain new files will be generated in the gdb folder, among which, logFile.txt and new_datatypes.txt are the log files that will be used to generate the debugger.
* In case these files are empty, check the error.txt file for any errors and try again after removing any bugs.
* We're sending a request from AWS to localhost using a POST request, thus we get the required log files which we parse in PHP, and then we read them as lists in JavaScript.
* Finally, we use HTML, CSS and JavaScript to display the debugging details in an accordion format on the webpage. For this, open temp_code.html.

#APPLICATIONS AND FUTURE SCOPE#

gameToDebug will help anyone who is having a hard time solving bugs in his code. Using our application teachers and students can save a lot of time when try to teach and understand the algorithms and data-structures. We believe that our application can help anyone who is try to better understand his code. 
  
  gameToDebug has many future scopes. Currently it has support for only C/C++ but it can be extended to many other languages. We are still having a hard time to figuring out the most appropriate visualise for various data structures present especially when it comes to N dimensional arrays and lists. We are successfully debugging most of the code that anyone can write using C/C++ but are debugger is still not full proof. We believe that working further on this project can revolutionize the way we study and understand our code.

#COPYRIGHT INFORMATION#

All the code in this repository is our own and is using open-source softwares
