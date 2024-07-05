<?php
header('Content-Type: application/json');
$list = file_get_contents('./db/lista.json');
echo $list;