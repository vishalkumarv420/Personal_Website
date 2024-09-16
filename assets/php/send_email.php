<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $subject = htmlspecialchars(trim($_POST['subject']));
    $discussion = htmlspecialchars(trim($_POST['discussion']));

    // Validate the name
    if (empty($name)) {
        echo "Name is required";
        exit;
    }

    // Validate the email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    // Validate the subject
    if (empty($subject)) {
        echo "Subject is required";
        exit;
    }

    // Validate the discussion/message
    if (empty($discussion)) {
        echo "Message is required";
        exit;
    }

    // Email recipient (Gmail)
    $to = "vishalkumarb30@gmail.com"; // Replace this with your Gmail address

    // Email content
    $message_plain = "Name: $name\nEmail: $email\nMessage: $discussion\n";
    $message_html = "<html><body>";
    $message_html .= "<h1>Message from $name</h1>";
    $message_html .= "<p><strong>Email:</strong> $email</p>";
    $message_html .= "<p><strong>Message:</strong> $discussion</p>";
    $message_html .= "</body></html>";

    // Define boundary for multipart message
    $boundary = md5(uniqid(rand(), true));

    // Email headers
    $headers = "From: $email\r\n"; // Use the sender's email
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/alternative; boundary=\"$boundary\"\r\n";

    // Email body (plain text and HTML)
    $body = "--$boundary\r\n";
    $body .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding: 7bit\r\n";
    $body .= $message_plain . "\r\n";
    $body .= "--$boundary\r\n";
    $body .= "Content-Type: text/html; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding: 7bit\r\n";
    $body .= $message_html . "\r\n";
    $body .= "--$boundary--";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "There was a problem sending the message.";
    }
}
?>
