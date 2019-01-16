<?php
$pdo = new PDO('mysql:host=localhost;dbname=Blog', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$id = $_GET['id'];
$query = $pdo->prepare
(
    'SELECT Title, Contents, Id
   FROM Post
   WHERE Id = ? '
);
$query->execute([$id]);
$change = $query->fetch(PDO::FETCH_ASSOC);


$id = $_GET['id'];
if (empty($_POST) == false ) {
   var_dump($_POST);
   $title = $_POST['title'];
   $content = $_POST['contents'];
   $query = $pdo->prepare
   (
       'UPDATE Post
       SET Title = ?, Contents = ?
       WHERE Id = ?'
   );
   $query->execute([$title, $content, $id]);
   header('Location: index.php');
   exit();
}
$template = 'change_content';
include 'blog.phtml';
?>

