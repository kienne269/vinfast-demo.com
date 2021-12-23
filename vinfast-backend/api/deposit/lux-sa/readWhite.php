<?php
header('Content-type: image/png;');
$p = 'http://localhost/vinfast/vinfast-frontend/src/assets/images/360/lux-sa/white/file.png';
$a = file_get_contents($p);
echo $a;
