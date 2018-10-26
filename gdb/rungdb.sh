#!/bin/bash
g++ -g h.cpp -o h
gdb --batch --command=variables.gdb --args ./h 1 > out.txt


