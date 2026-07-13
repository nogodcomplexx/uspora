<?php
/**
 * Kontaktní formulář – Úspora FVE
 * Odesílá data z React formuláře přes SMTP (Websupport).
 * 
 * Umístění: /odeslat_formular.php (v rootu webu)
 */

// === CORS headers pro React frontend ===
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Preflight request (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Pouze POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Povolena pouze metoda POST.']);
    exit();
}

// === SMTP Konfigurace ===
$smtp_host = 'ssl://smtp.websupport.cz';
$smtp_port = 465;
$smtp_user = 'poptavka@uspora-fve.cz';
$smtp_pass = 'Nechcuchvalitkratak159!';

// === Příjemce ===
$prijemce = 'usporafve@gmail.com';

// === Načtení dat ===
$input = json_decode(file_get_contents('php://input'), true);

$jmeno   = isset($input['name'])    ? htmlspecialchars(strip_tags(trim($input['name'])))    : '';
$telefon = isset($input['phone'])   ? htmlspecialchars(strip_tags(trim($input['phone'])))   : '';
$email   = isset($input['email'])   ? htmlspecialchars(strip_tags(trim($input['email'])))   : '';
$zprava  = isset($input['message']) ? htmlspecialchars(strip_tags(trim($input['message']))) : '';

// === Validace ===
if (empty($jmeno) || empty($telefon)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Vyplňte prosím jméno a telefon.']);
    exit();
}

// Honeypot anti-spam
if (!empty($input['website'])) {
    http_response_code(200);
    echo json_encode(['success' => true]);
    exit();
}

// === Funkce pro odesílání přes SMTP ===
function smtp_send($host, $port, $user, $pass, $from, $to, $subject, $body, $reply_to = '') {
    $socket = @fsockopen($host, $port, $errno, $errstr, 15);
    if (!$socket) {
        return "Nelze se připojit k SMTP: $errstr ($errno)";
    }

    // Nastavení timeoutu
    stream_set_timeout($socket, 15);

    // Přečtení uvítací zprávy
    $response = fgets($socket, 512);
    if (substr($response, 0, 3) !== '220') {
        fclose($socket);
        return "SMTP chyba (220): $response";
    }

    // EHLO
    fputs($socket, "EHLO uspora-fve.cz\r\n");
    // Přečíst všechny řádky odpovědi EHLO
    while ($line = fgets($socket, 512)) {
        if (substr($line, 3, 1) === ' ') break;
    }

    // AUTH LOGIN
    fputs($socket, "AUTH LOGIN\r\n");
    $response = fgets($socket, 512);
    if (substr($response, 0, 3) !== '334') {
        fclose($socket);
        return "SMTP AUTH chyba: $response";
    }

    // Username (base64)
    fputs($socket, base64_encode($user) . "\r\n");
    $response = fgets($socket, 512);
    if (substr($response, 0, 3) !== '334') {
        fclose($socket);
        return "SMTP user chyba: $response";
    }

    // Password (base64)
    fputs($socket, base64_encode($pass) . "\r\n");
    $response = fgets($socket, 512);
    if (substr($response, 0, 3) !== '235') {
        fclose($socket);
        return "SMTP heslo chyba: $response";
    }

    // MAIL FROM
    fputs($socket, "MAIL FROM:<$from>\r\n");
    $response = fgets($socket, 512);
    if (substr($response, 0, 3) !== '250') {
        fclose($socket);
        return "SMTP MAIL FROM chyba: $response";
    }

    // RCPT TO
    fputs($socket, "RCPT TO:<$to>\r\n");
    $response = fgets($socket, 512);
    if (substr($response, 0, 3) !== '250') {
        fclose($socket);
        return "SMTP RCPT TO chyba: $response";
    }

    // DATA
    fputs($socket, "DATA\r\n");
    $response = fgets($socket, 512);
    if (substr($response, 0, 3) !== '354') {
        fclose($socket);
        return "SMTP DATA chyba: $response";
    }

    // Hlavičky a tělo emailu
    $headers  = "From: =?UTF-8?B?" . base64_encode("Úspora FVE Web") . "?= <$from>\r\n";
    $headers .= "To: <$to>\r\n";
    if (!empty($reply_to)) {
        $headers .= "Reply-To: <$reply_to>\r\n";
    }
    $headers .= "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "Content-Transfer-Encoding: 8bit\r\n";
    $headers .= "Date: " . date('r') . "\r\n";

    // Odeslání hlaviček + těla
    fputs($socket, $headers . "\r\n" . $body . "\r\n.\r\n");
    $response = fgets($socket, 512);
    if (substr($response, 0, 3) !== '250') {
        fclose($socket);
        return "SMTP odeslání chyba: $response";
    }

    // QUIT
    fputs($socket, "QUIT\r\n");
    fclose($socket);

    return true;
}

// === Sestavení emailu ===
$predmet = 'Nová poptávka z webu uspora-fve.cz';
$telo = "=============================================
  NOVÁ POPTÁVKA Z WEBU USPORA-FVE.CZ
=============================================

Jméno:    {$jmeno}
Telefon:  {$telefon}
E-mail:   {$email}

Zpráva:
{$zprava}

=============================================
Odesláno: " . date('d.m.Y H:i:s') . "
IP adresa: " . $_SERVER['REMOTE_ADDR'] . "
=============================================";

$reply_to = (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) ? $email : '';

// === Odeslání hlavního emailu ===
$vysledek = smtp_send($smtp_host, $smtp_port, $smtp_user, $smtp_pass, $smtp_user, $prijemce, $predmet, $telo, $reply_to);

if ($vysledek === true) {
    // Potvrzovací email zákazníkovi
    if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $potvrzeni_predmet = 'Děkujeme za váš zájem – Úspora FVE';
        $potvrzeni_telo = "Dobrý den, {$jmeno},

děkujeme za váš zájem o fotovoltaiku pro ohřev vody.

Vaši poptávku jsme přijali a budeme vás kontaktovat do 24 hodin na čísle {$telefon}.

S pozdravem,
Tým Úspora FVE
+420 777 366 239
www.uspora-fve.cz";

        // Potvrzení posíláme tiše, chyba neovlivní odpověď
        @smtp_send($smtp_host, $smtp_port, $smtp_user, $smtp_pass, $smtp_user, $email, $potvrzeni_predmet, $potvrzeni_telo);
    }

    echo json_encode(['success' => true, 'message' => 'Poptávka byla úspěšně odeslána.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Nepodařilo se odeslat email. Zkuste to prosím znovu.', 'debug' => $vysledek]);
}
