<?php
if (isset($_POST["site-name"])){ $sitename = $_POST["site-name"];}
if (isset($_POST["download-data"])){ $downloaddata = $_POST["download-data"];}
$file = "txt/".$_FILES['linked-list']['name'];
move_uploaded_file($_FILES['linked-list']['tmp_name'], $file);
if(isset($_FILES['linked-list']['name']))
{
    $filestatus = "Загружений файл: ".$_FILES['linked-list']['name']." ";
    $filestatus.= "Розмір: ".$_FILES['linked-list']['size']."байт";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
    <meta name="description" content="Letsvisual" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Archive up</title>
    <link rel="stylesheet" href="css/libs.min.css">
	<link rel="stylesheet" href="css/main.css">
</head>
<body>
    <section class="arch-container">
        <header><h1>Archive up</h1></header>
        <form action="index.php" method="post" enctype="multipart/form-data">
            <p>
                <label for="site-name">Domain name & data: </label>
                <input type="text" id="site-name" name="site-name" placeholder="domain.com">
                <input type="text" id="download-data" name="download-data" placeholder="YYYYMMDD">
            </p>
            <p>
                <label for="linked-list">Non linck file: </label>
                <input type="file" id="linked-list" name="linked-list">
            </p>
            <p>
                <input type="submit" value="Отправить">
            </p>
        </form>
    </section>
    <?php
        echo '<section class="arch-list-link"><header><h2>List command for wayback machine</h2></header>';
        if (isset($sitename) && $sitename != null && isset($downloaddata) && $downloaddata != null){
            echo '<ul>';
            echo '<li id="copytext">wayback_machine_downloader http://'.$sitename.'/ -t '.$downloaddata.' <button id="userButton">К</button></li> ';
            echo '<li id="copytext1">grep -rl http://'.$sitename.'/ . | xargs sed -i \'s,http://'.$sitename.'/,/,g\' <button id="userButton1">К</button></li>';
            echo '<li id="copytext2">grep -rl https://'.$sitename.'/ . | xargs sed -i \'s,https://'.$sitename.'/,/,g\' <button id="userButton2">К</button></li>';
            echo '<li id="copytext3">grep -rl https://'.$sitename.'/ . | xargs sed -i \'s,https://'.$sitename.'/,/,g\' <button id="userButton3">К</button></li>';
            echo '<li id="copytext4">grep -r -P -o \'(?<=href=\"http:\/\/).*(?=\/\")\' <button id="userButton4">К</button></li>';
        }else{echo 'Enter the name of the domain and the date of the recovery of the drop';}
        echo '</section>';
    ?>
    <?php

    $output = shell_exec('ping 8.8.8.8');

    echo $output;

    ?>



























<!--    Creates folders with list links -->
    <?php
    $lines = file('txt/url.txt');
    foreach ($lines as $numline =>  $line) {
        $qwe = explode("/", $line);
       foreach ($qwe as $num =>  $value){
           if (preg_match("/http:/i",$value) || preg_match("/https:/i",$value) || preg_match("/[a-z0-9]\.[a-z]/i",$value) || $value == null || ctype_space($value) ){
               //echo $ww;
               //echo $numline.'=='.$num.'~~~'.$value.'</br>';
               //$ww=$num;
           }else{
               $value=preg_replace('/\s+/', '',$value);
               if (isset($value) && !isset($ww))
               {
                   $path='test/'.$value;
                   if (!file_exists($path)) {
                       mkdir($path, 0755);
                   }
               }elseif(isset($ww)) {
                    $path=$ww.'/'.$value;
                   if (!file_exists($path)) {
                       mkdir($path, 0755);
                   }
                }
           //   echo $path.'</br>';
               $ww=$path;
           }
       }
      // echo 'Last folder path -- '.$path.'</br>';
        $fd = fopen("$path/inde.html", 'w') or die("Error no file create");
        $str = '<!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Business for Sale</title>
        <meta http-equiv="refresh" content="0;URL=https://siteredirect.ua/" />
    </head>
    <body></body>
</html>';
        fwrite($fd, $str);
        fclose($fd);
       $ww=null;
    }
    ?>
    <script src="js/libs.min.js" ></script>
    <script src="js/common.js"></script>
</body>
</html>