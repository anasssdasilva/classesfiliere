<?php

chdir('..');
include_once 'services/classesService.php';
extract($_POST);

$fs = new classesService();

if ($op != '') {
    if ($op == 'add') {
        $fs->create(new classes(0, $code, $filiere));
    } elseif ($op == 'update') {
        $fs->update(new classes($id, $code, $filiere));
    } elseif ($op == 'delete') {
        $fs->delete($id);
    }
else if($op=='hrap'){
        echo json_encode($fs->graphed());

}
}else if($op == '' && isset($idfilier)){
    echo json_encode($fs->findByIdFiliere($idfilier));
}
else{
  echo json_encode($fs->findAll());
}

header('Content-type: application/json');
?>
