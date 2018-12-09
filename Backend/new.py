from unidecode import unidecode
import subprocess
try:
    code = open('h.cpp', 'r', encoding="utf-8")
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


    datatype = open('output.txt', 'r', encoding="utf-8")
    # print(datatype.readlines())
    logd = open('logd.gdb', 'w')
    logd.write('set width 0\nset height 0\nset verbose off\n')
    prevline = ' '
    i = 1
    for line in datatype:
        if ' = ' in line and line[0].isdigit() == False:
            if prevline[0].isdigit() == True:
                if i == 1:
                    logd.write('b main\nr\njump main\n')
                    logd.write('info locals\n')
                    i = 0
                else:
                    logd.write('b ' + prevline[0: prevline.index('\t')] + '\n'
                               + 'jump ' + prevline[0: prevline.index('\t')] + '\n')
                    logd.write('info locals\n')
            x = line.index(' ')
            logd.write('ptype ' + line[0: x] + '\n')
        prevline = line
    logd.close()
    res = subprocess.check_output(["bash", "logd.sh"])
    logd_txt = open('logd.txt', 'r' , encoding="utf-8")
    datatypes = open('datatypes.txt', 'w')
    for line in logd_txt:
        line = str(line.strip())
        if line[0: 7] == 'type = ':
            datatypes.write(line + '\n')
    logd_txt.close()
    datatypes.close()

    output_txt = open('output.txt', 'r', encoding="utf-8")
    for line in output_txt:
        if line == '\n':
            break
    lines = output_txt.readlines()
    output_txt.close()
    new_output = open('output.txt', 'w', encoding="utf-8")
    new_output.write(''.join(lines))
    new_output.close()

    output_txt = open('output.txt', 'r', encoding="utf-8" )
    new_output = open('logFile.txt', 'w')
    for line in output_txt:
        line = str(unidecode(line.strip())).replace("'","")
        if line == '':
            new_output.write('@@@@@@#####`!`!')
        else:
            new_output.write(line+'`!`!')
    output_txt.close()
    new_output.close()

    datatypes_txt = open('datatypes.txt', 'r', encoding="utf-8")
    new_datatypes = open('new_datatypes.txt', 'w')
    for line in datatypes_txt:
        line = line.strip()
        new_datatypes.write(line+'`!`!')
    datatypes_txt.close()
    new_datatypes.close()
except Exception as e:
    #exc_type, exc_obj, exc_tb = sys.exc_info()
    #fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
    #print(exc_type, fname, exc_tb.tb_lineno)
    logd = open('errboi.txt', 'w')
    logd.write("teri maaaaaaa"+str((e)))
    logd.close()

