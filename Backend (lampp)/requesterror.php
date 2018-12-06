<?php
$handle = fopen("error.txt", "r");

$myarr=array("");
if ($handle) {
	//echo "string";
    while (($line = fgets($handle)) !== false) {
        array_push($myarr, $line); 

    }

    fclose($handle);
} else {
	echo "errorboi";
    // error opening the file.
} 
//echo $myarr[1];
function clean($string) {
   $string = str_replace(' ', '-', $string); // Replaces all spaces with hyphens.

   return preg_replace('/[^A-Za-z0-9\-]/', '', $string); // Removes special chars.
}
echo "@@!!###";
echo clean(join($myarr));
//echo join($myarr);


?>