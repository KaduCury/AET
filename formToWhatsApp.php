<?php 
    $nome = $_POST["nome"];
    $telefone = $_POST["telefone"];
    $marca = $_POST["marca"];
    $modelo = $_POST["modelo"];
    $mensagem = $_POST["mensagem"];
    global $link;
    $link = "https://wa.me//5514988124334?text=Olá!%20Meu%20nome%20é%20$nome%20e%20meu%20telefone%20é%20$telefone.%20
    Tenho%20um%20carro%20da%20marca%20$marca%20e%20modelo%20$modelo.%20%20%20%20%20$mensagem";
    /*echo(
        "nome: $nome.\n\n 
        telefone: $telefone. \n\n
        marca: $marca. \n\n 
        modelo: $modelo. \n\n 
        mensagem: $mensagem."
    );
    header("Location: $link");
    die();*/
    echo($link);
?>
