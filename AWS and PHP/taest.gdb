set width 0
set height 0
set verbose off
r < input.txt
set $start = 1
set $end = 100000000
while($start < $end)
	info locals
	continue
	set $start = $start + 1
end