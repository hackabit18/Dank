#!/bin/bash
g++ -g h.cpp -o h 2> error.txt
gdb --batch --command=test.gdb --args ./h 1 > output.txt

