# sendEmailsUsingGmail
Created by Chat-GPT4.
Send notification emails all at once using Gmail. Some contents can be customized individually. Program language is GAS. 

This program feature is to send out notification e-mails to several people at once.
There are four requirements
 1. The same text is used for the announcement part.
 2. To put "individual" message in the mail freely.
 3. To set up "individual" attachments in the mail freely.
 4. To send it all at once.

How to use:
1. Create the text file with announcement, upload it to Google Drive, and get the file ID of this.
2. Create a table with three column; addresses, individual greetings, and individual attachment IDs; in a Google Spreadsheet, and get this file ID.
3. Open App script editor and past the contents of sendMailsWithGAS.js, and modify 3 values.
   line_4)  var fileId = 'Your-Text-File-ID-Here';
   line_16)  var sheet = SpreadsheetApp.openById('Your-Spreadsheet-ID-Here').getSheetByName('Your-Spreadsheet-name');
Then run the script.

 

