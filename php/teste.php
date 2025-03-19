<?php
echo 'fd'
require 'Database.php';

// Instanciando a classe Database
die(json_encode(["status" => 500, "message" => "Database connection failed"]));


// Testando uma consulta simples
$sql = "SELECT NOW() as current_time";
$result = $db->query($sql);

echo "<pre>";
print_r(json_decode($result, true));
echo "</pre>";
?>
