import subprocess
code = open('h.cpp', 'r')
lines = 0
for line in code:
    lines = lines + 1
code.close()
test = open('test.gdb', 'w')
test.write('set width 0\nset height 0\nset verbose off\n')
for i in range(0, lines-1):
    test.write('b ' + str(i + 1) + '\n')

test.write('r < input.txt\nset $start = 1\nset $end = ' + str(100000000) + '\n'
           'while($start < $end)\n\tinfo locals\n\tcontinue\n\t'
           'set $start = $start + 1\nend')
test.close()
output_txt = open('output.txt', 'w')
res = subprocess.check_output(["bash", "run.sh"])
output_txt.close()


datatype = open('output.txt', 'r')
# print(datatype.readlines())
logd = open('logd.gdb', 'w')
logd.write('set width 0\nset height 0\nset verbose off\n')
prevline = ' '
datatype = open('output.txt', 'r')
logd = open('logd.gdb', 'w')
logd.write('set width 0\nset height 0\nset verbose off\n')
prevline = '\t'
i = 1
for line in datatype:
    if ' = ' in line and line[0].isdigit() == False:
        if prevline[0].isdigit():
            if i == 1:
                logd.write('b main\nr\njump main\n')
                i = i + 1
            else:
                logd.write('b ' + prevline[0: prevline.index('\t')] + '\n'
                           + 'jump ' + prevline[0: prevline.index('\t')] + '\n')
                i = i + 1
                logd.write('info locals\n')
        if i > 2:
            x = line.index(' ')
            logd.write('ptype ' + line[0: x] + '\n')
            # print('ptype ' + line[0: x] + '\n')
    prevline = line
logd.close()
res = subprocess.check_output(["bash", "logd.sh"])
logd_txt = open('logd.txt', 'r')
datatypes = open('datatypes.txt', 'w')
for line in logd_txt:
    line = line.strip()
    if line[0: 7] == 'type = ':
        datatypes.write(line + '\n')
logd_txt.close()
datatypes.close()

output_txt = open('output.txt', 'r')
for line in output_txt:
    if line == '\n':
        break
lines = output_txt.readlines()
output_txt.close()
new_output = open('output.txt', 'w')
new_output.write(''.join(lines))
new_output.close()




















