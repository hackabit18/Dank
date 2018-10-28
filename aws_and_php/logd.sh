#!/bin/bash
g++ -g h.cpp -o h
gdb --batch --command=logd.gdb --args ./h 1 > logd.txt
