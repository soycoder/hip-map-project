// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

function create(title, callback) {
    // [START sheets_create]
    gapi.client.sheets.spreadsheets.create({
      properties: {
        title: title
      }
    }).then((response) => {
      // [START_EXCLUDE silent]
      callback(response);
      console.log('Spreadsheet ID: ' + response.result.spreadsheetId);
      // [END_EXCLUDE]
    });
    // [END sheets_create]
  }
  
  function batchUpdate(spreadsheetId, title, find, replacement, callback) {
    // [START sheets_batch_update]
    var requests = [];
    // Change the spreadsheet's title.
    requests.push({
      updateSpreadsheetProperties: {
        properties: {
          title: title
        },
        fields: 'title'
      }
    });
    // Find and replace text.
    requests.push({
      findReplace: {
        find: find,
        replacement: replacement,
        allSheets: true
      }
    });
    // Add additional requests (operations) ...
  
    var batchUpdateRequest = {requests: requests}
  
    gapi.client.sheets.spreadsheets.batchUpdate({
      spreadsheetId: spreadsheetId,
      resource: batchUpdateRequest
    }).then((response) => {
      var findReplaceResponse = response.result.replies[1].findReplace;
      console.log(`${findReplaceResponse.occurrencesChanged} replacements made.`);
      // [START_EXCLUDE silent]
      callback(response);
      // [END_EXCLUDE]
    });
    // [END sheets_batch_update]
  }
  
  function getValues(spreadsheetId, range, callback) {
    // [START sheets_get_values]
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: range
    }).then((response) => {
      var result = response.result;
      var numRows = result.values ? result.values.length : 0;
      console.log(`${numRows} rows retrieved.`);
      // [START_EXCLUDE silent]
      callback(response);
      
      // [END_EXCLUDE]
    });
    // [END sheets_get_values]
  }
  function logQuote(quote){
    console.log(quote);
    console.log(quote.body);
    for (let i = 0; i < el.length; i++) {
        for (let j = 0; j < el[0].length; j++) {
             document.getElementById('data').textContent += el[i][j]+', '; 
        }
    }
  }
  function batchGetValues(spreadsheetId, _ranges, callback) {
    // [START sheets_batch_get_values]
    var ranges = [
      // Range names ...
    ];
    // [START_EXCLUDE silent]
    ranges = _ranges;
    // [END_EXCLUDE]
    gapi.client.sheets.spreadsheets.values.batchGet({
       spreadsheetId: spreadsheetId,
       ranges: ranges
    }).then((response) => {
      var result = response.result;
      console.log(`${result.valueRanges.length} ranges retrieved.`);
      // [START_EXCLUDE silent]
      callback(response);
      // [END_EXCLUDE]
    });
    // [END sheets_batch_get_values]
  }
  
  function updateValues(spreadsheetId, range, valueInputOption, _values, callback) {
    // [START sheets_update_values]
    var values = [
      [
        // Cell values ...
      ],
      // Additional rows ...
    ];
    // [START_EXCLUDE silent]
    values = _values;
    // [END_EXCLUDE]
    var body = {
      values: values
    };
    gapi.client.sheets.spreadsheets.values.update({
       spreadsheetId: spreadsheetId,
       range: range,
       valueInputOption: valueInputOption,
       resource: body
    }).then((response) => {
      var result = response.result;
      console.log(`${result.updatedCells} cells updated.`);
      // [START_EXCLUDE silent]
      callback(response);
      // [END_EXCLUDE]
    });
    // [END sheets_update_values]
  }
  
  function batchUpdateValues(spreadsheetId, range, valueInputOption, _values, callback) {
    // [START sheets_batch_update_values]
    var values = [
      [
        // Cell values ...
      ],
      // Additional rows ...
    ];
    // [START_EXCLUDE silent]
    values = _values;
    // [END_EXCLUDE]
    var data = [];
    data.push({
      range: range,
      values: values
    });
    // Additional ranges to update.
  
    var body = {
      data: data,
      valueInputOption: valueInputOption
    };
    gapi.client.sheets.spreadsheets.values.batchUpdate({
       spreadsheetId: spreadsheetId,
       resource: body
    }).then((response) => {
      var result = response.result;
      console.log(`${result.totalUpdatedCells} cells updated.`);
      // [START_EXCLUDE silent]
      callback(response);
      // [END_EXCLUDE]
    });
    // [END sheets_batch_update_values]
  }
  
  function appendValues(spreadsheetId, range, valueInputOption, _values, callback) {
    // [START sheets_append_values]
    var values = [
      [
        // Cell values ...
      ],
      // Additional rows ...
    ];
    // [START_EXCLUDE silent]
    values = _values;
    // [END_EXCLUDE]
    var body = {
      values: values
    };
    gapi.client.sheets.spreadsheets.values.append({
       spreadsheetId: spreadsheetId,
       range: range,
       valueInputOption: valueInputOption,
       resource: body
    }).then((response) => {
      var result = response.result;
      console.log(`${result.updates.updatedCells} cells appended.`)
      // [START_EXCLUDE silent]
      callback(response);
      // [END_EXCLUDE]
    });
    // [END sheets_append_values]
  }
  function sendArray(){
      var _v = [['a','b','c','d'],['a','b','c','d']];
      return _v;
  }
  
  function pivotTable(spreadsheetId, callback) {
    // Create two sheets for our pivot table
    var requests = [{
      addSheet: {}
    }, {
      addSheet: {}
    }];
    var batchUpdateRequest = {requests: requests};
    gapi.client.sheets.spreadsheets.batchUpdate({
      spreadsheetId: spreadsheetId,
      resource: batchUpdateRequest
    }).then((response) => {
      var sourceSheetId = response.result.replies[0].addSheet.properties.sheetId;
      var targetSheetId = response.result.replies[1].addSheet.properties.sheetId;
      // [START sheets_pivot_tables]
      var requests = [{
        updateCells: {
          rows: {
             values: [{
                pivotTable: {
                  source: {
                    sheetId: sourceSheetId,
                    startRowIndex: 0,
                    startColumnIndex: 0,
                    endRowIndex: 20,
                    endColumnIndex: 7
                  },
                  rows: [{
                    sourceColumnOffset: 1,
                    showTotals: true,
                    sortOrder: 'ASCENDING',
                  }],
                  columns: [{
                    sourceColumnOffset: 4,
                    sortOrder: 'ASCENDING',
                    showTotals: true,
                  }],
                  values: [{
                    summarizeFunction: 'COUNTA',
                    sourceColumnOffset: 4
                  }],
                  valueLayout: 'HORIZONTAL'
                }
              }
            ]
          },
          start: {
            sheetId: targetSheetId,
            rowIndex: 0,
            columnIndex: 0
          },
          fields: 'pivotTable'
        }
      }];
  
      var body = {
        requests
      };
      gapi.client.sheets.spreadsheets.batchUpdate({
        spreadsheetId: spreadsheetId,
        resource: body
      }).then((response) => {
        // [START_EXCLUDE silent]
        callback(response);
        // [END_EXCLUDE]
      });
      // [END sheets_pivot_tables]
    });
  }
  
  function conditionalFormatting(spreadsheetId, callback) {
    // [START sheets_conditional_formatting]
    var myRange = {
      sheetId: 0,
      startRowIndex: 1,
      endRowIndex: 11,
      startColumnIndex: 0,
      endColumnIndex: 4,
    };
    var requests = [{
      addConditionalFormatRule: {
        rule: {
          ranges: [ myRange ],
          booleanRule: {
            condition: {
              type: 'CUSTOM_FORMULA',
              values: [ { userEnteredValue: '=GT($D2,median($D$2:$D$11))' } ]
            },
            format: {
              textFormat: { foregroundColor: { red: 0.8 } }
            }
          }
        },
        index: 0
      }
    }, {
      addConditionalFormatRule: {
        rule: {
          ranges: [ myRange ],
          booleanRule: {
            condition: {
              type: 'CUSTOM_FORMULA',
              values: [ { userEnteredValue: '=LT($D2,median($D$2:$D$11))' } ]
            },
            format: {
              backgroundColor: { red: 1, green: 0.4, blue: 0.4 }
            }
          }
        },
        index: 0
      }
    }];
  
    var body = {
      requests
    };
    gapi.client.sheets.spreadsheets.batchUpdate({
      spreadsheetId: spreadsheetId,
      resource: body
    }).then((response) => {
      var result = response.result;
      console.log(`${result.replies.length} cells updated.`);
      // [START_EXCLUDE silent]
      callback(response);
      // [END_EXCLUDE]
    });
    // [END sheets_conditional_formatting]
  };