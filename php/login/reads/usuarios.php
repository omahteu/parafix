<?php
// require '../../crud.php';
// require_once '../../crud.php';

echo 'Usuários:<br>';
echo getcwd();
echo realpath(__DIR__ . '/../../core.php');

die;

$crud = new Crud();
echo $crud->read('usuarios', ['usuario, is_staff']);
?>
