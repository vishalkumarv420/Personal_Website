<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
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

    // Email details
    $to = "vishalkumarb30@gmail.com"; // Your email address
    $subject = "$subject"; // Define a subject
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Message: $discussion\n";

    // Headers for the email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "There was a problem sending the message.";
    }
}
?>