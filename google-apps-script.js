/**
 * EVERLIFE → GOOGLE SHEETS ARCHIVE
 *
 * Open a Google Sheet, choose Extensions → Apps Script, replace the editor
 * with this file, then deploy it as a Web App that executes as you. Paste
 * the resulting /exec URL into Everlife's Google Sheets screen.
 */
function doPost(request) {
  const book = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = book.getSheetByName('Life Events') || book.insertSheet('Life Events');

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Received At', 'Archive Owner', 'Character', 'Event', 'Details',
      'Game Date', 'Age', 'Location', 'Career', 'Test'
    ]);
    sheet.setFrozenRows(1);
  }

  const data = JSON.parse((request && request.postData && request.postData.contents) || '{}');
  sheet.appendRow([
    new Date(), data.owner || '', data.character || '', data.event || '',
    data.details || '', data.date || '', data.age ?? '', data.location || '',
    data.career || '', Boolean(data.test)
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
