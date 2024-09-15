<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Form data ko variables mein store karte hain
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $discussion = htmlspecialchars($_POST['discussion']);

    // Email details
    $to = "vishalkumarb30@gmail.com"; // Yeh aapka email address hai jaha aapko message milega
    $subject = "New Contact Form Message from " . $name;
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Message: $discussion\n";

    // Headers for the email
    $headers = "From: $email";

    // Email send karte hain
    if (mail($to, $subject, $message, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "There was a problem sending the message.";
    }
}
?>