import json
import re
pattern = re.compile(r'\s+')
file = open('output.txt', 'r')
lines = file.readlines()
strLine = ''.join(lines)
strLine = re.sub(pattern, '', strLine)
# print(strLine)
dicts = {}
keys = len(lines)
for i in range(0, keys):
        dicts[i] = lines[i]
# r = {'is_claimed': 'True', 'rating': 3.5}
# r = json.dumps(r)
# loaded_r = json.loads(r)
# print(loaded_r)
r = json.dumps(dicts, indent=2)
loaded_r = json.loads(r)
with open('data.json', 'w') as outfile:
    json.dump(loaded_r, outfile)
# str = ', '.join("{!s}={!r}".format(key, val) for (key, val) in dicts.items())
# data = json.loads(str)
# print(data)