

<?php
//echo "<script>alert('hahah');</script>";
$myfile = fopen("h.cpp", "w") or die("Unable to write file!");
//$txt = "Jsdassdohn Doe\n";
//fwrite($myfile, $txt);
//$txt = "Jane Doe\n";
//echo shell_exec("cd /var/www/html && python new.py");
//echo "fsafsafsa";*/
fwrite($myfile, $_POST["topic"]);
fclose($myfile);

echo shell_exec("php testthing1.php");
//fwrite($myfile, $_POST["topic"]);
//fclose($myfile);
$myfile = fopen("output.txt", "r") or die("Unable to open file!");
$strboi= fread($myfile,filesize("output.txt"));
//$cars = array("Volvo", "BMW", "Toyota");
echo $strboi;
//$lollol= shell_exec("sudo python /var/www/html/new.py ");
//$txt = "JsdAAdassdohn Doe\n";
//echo $lollol;
//echo $strboi;
//$your_array = explode("\n", $strboi);
//echo $your_array[0];
//echo join("uuuuu",$your_array);
/*
if ($myfile) {
    while (($line = fgets($myfile)) !== false) {
       echo $line;
    }

    fclose($handle);
} else {
    echo "error opening the file.";
}
*/ 
fclose($myfile);

//echo "asdasd";
//<script>alert('hey wat u mean!!')</script>
if(isset($_FILES['file']) and !$_FILES['file']['error']){
    $fname = "11" . ".wav";
    echo "<script>alert('hey wat u mean!!')</script>";

  move_uploaded_file($_FILES['file']['tmp_name'], "/var/www/html/recs" . $fname); 

}
?>
