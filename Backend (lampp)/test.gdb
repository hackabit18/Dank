set width 0
set height 0
set verbose off
b 1
b 2
b 3
b 4
b 5
b 6
b 7
b 8
b 9
b 10
b 11
b 12
b 13
b 14
b 15
b 16
b 17
b 18
b 19
b 20
b 21
b 22
b 23
b 24
b 25
b 26
b 27
b 28
b 29
b 30
b 31
b 32
b 33
b 34
b 35
b 36
b 37
b 38
b 39
b 40
b 41
b 42
b 43
r < input.txt
set $start = 1
set $end = 100000000
while($start < $end)
	info locals
	continue
	set $start = $start + 1
end