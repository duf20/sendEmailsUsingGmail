function sendEmails() {

  // Get the text file from Google Drive
  var fileId = 'Your-Text-File-ID-Here';
  var file = DriveApp.getFileById(fileId);
  var text = file.getBlob().getDataAsString();
  
  // Split the text by lines
  var lines = text.split('\n');
  
  // Extract the subject and body
  var subject = lines[0];
  var body = lines.slice(1).join('\n');

  // Open the Google Sheet containing the recipient data
  var sheet = SpreadsheetApp.openById('Your-Spreadsheet-ID-Here').getSheetByName('Your-Spreadsheet-name');
  var data = sheet.getRange('A:D').getValues(); // Assuming additional file IDs are in column D

  // ... (the rest of your code remains unchanged)
  
  // Loop through each recipient and send the email
  for (var i = 0; i < data.length; i++) {
    var recipientName = data[i][0];
    var recipientEmail = data[i][1];
    var additionalText = data[i][2];
    var attachmentIds = data[i][3];
    
    var finalBody = body;
    var attachments = [];
    
    // Add additional text to the top of the body text if it exists
    if (additionalText) {
      finalBody = additionalText + "\n\n" + body;
    }
    
    // Add multiple attachments if file IDs exist
    if (attachmentIds) {
      var ids = attachmentIds.split(',');  // Split the IDs by comma
      for (var j = 0; j < ids.length; j++) {
        var file = DriveApp.getFileById(ids[j].trim()); // Trim to remove any spaces
        attachments.push(file.getBlob());
      }
    }
    
    if (recipientName && recipientEmail) { // Skip empty rows
      MailApp.sendEmail({
        to: recipientEmail,
        subject: subject,
        body: "Hello " + recipientName + ",\n\n" + finalBody,
        attachments: attachments
      });
    }
  }
}

// Replace 'Your-Text-File-ID-Here' with the actual file ID.
// Replace 'Your-Spreadsheet-ID-Here' with your actual Google Sheet ID 
// and 'Your-Spreadsheet-name' where recipient details are stored.
