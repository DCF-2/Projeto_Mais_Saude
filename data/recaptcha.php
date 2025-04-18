<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $recaptchaSecret = '6LcAUBsrAAAAADBq-wQic-3AYHVTDSbZoCAegEi5';
  $recaptchaResponse = $_POST['g-recaptcha-response'];

  // Verifica com a API do Google
  $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$recaptchaSecret&response=$recaptchaResponse");
  $responseKeys = json_decode($response, true);

  if (intval($responseKeys["success"]) !== 1) {
    echo 'Por favor, complete o reCAPTCHA.';
  } else {
    echo 'Verificação de reCAPTCHA bem-sucedida!';
  }
}
?>
