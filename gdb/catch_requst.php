<?php
echo $_POST["api_paste_code"];
$st=fopen("h.cpp", "w") or die("h.cpp nahi khul rahi");
fwrite($st, explode("@@@###", $_POST["api_paste_code"])[0]);
fclose($st);
$st1=fopen("input.txt", "w") or die("h.cpp nahi khul rahi");
fwrite($st1, explode("@@@###", $_POST["api_paste_code"])[1]);
fclose($st1);
exec("cd /opt/lampp/htdocs/GameToDebug && python3 new.py");
$handle = fopen("logFile.txt", "r");

$myarr=array("");
if ($handle) {
    while (($line = fgets($handle)) !== false) {
        array_push($myarr, $line); 
    }

    fclose($handle);
} else {
	echo "errorboi";
    // error opening the file.
} 
//echo $myarr[1];
echo "uuuuu".join($myarr);
echo"tttttttttt";
$handle = fopen("new_datatypes.txt", "r");
$myarr=array("");
if ($handle) {
    while (($line = fgets($handle)) !== false) {
        array_push($myarr, $line); 
    }

    fclose($handle);
} else {
	echo "errorboi";
    // error opening the file.
} 
//echo $myarr[1];
echo "ppppp".join($myarr);
?>
