function sendEmails() {
  // Define the email subject and body text
  var subject = "send multiple mail test 00";
  var body = "send to discripted two persons";
  
  // Define the list of recipients (Replace these with actual email addresses)
  var recipients = [
    {"name": "duf_me", "email": "duf20040404@gmail.com"},
    {"name": "gress", "email": "gressdin@gmail.com"},
    {"name": "dufinsta", "email": "dufinsta@gmail.com"}
  ];
  
  // Loop through each recipient and send the email
  for (var i = 0; i < recipients.length; i++) {
    var recipient = recipients[i];
    var recipientEmail = recipient.email;
    var recipientName = recipient.name;
    MailApp.sendEmail({
      to: recipientEmail,
      subject: subject,
      body: "Hello " + recipientName + ",\n\n" + body
    });
  }
}
