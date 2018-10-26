#!/bin/bash
g++ -g h.cpp -o h
gdb --batch --command=test.gdb --args ./h 1 > output.txt

