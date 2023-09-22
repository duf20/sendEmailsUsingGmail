import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Your Gmail credentials
username = 'duf20040404@gmail.com'
password = 'j9mmgg'

# Email details
subject = 'Test Subject'
body = 'I wish you receive thie mail.'

# Recipient list (Replace these with actual email addresses)
recipients = ['gressdin@gmail.com', 'dufinsta@gmail.com']

# Create the email
message = MIMEMultipart()
message['From'] = username
message['Subject'] = subject
message.attach(MIMEText(body, 'plain'))

# Connect to Gmail and send the email
server = smtplib.SMTP('smtp.gmail.com', 587)
server.starttls()
server.login(username, password)

for recipient in recipients:
    message['To'] = recipient
    server.sendmail(username, recipient, message.as_string())

server.quit()
