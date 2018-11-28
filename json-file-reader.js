

// //1.Confirm that we have loaded module
// exports.loaded = function () {
//   console.log('json-file-reader.js loaded!')
// };

//2.Export method that takes in a filename & callback 
exports.passJSON = function(filename,callback){

  //3.Require fs module
  const fs = require('fs'); 
  
  //4.Use readFile method, pass in fileName and read JSON data
  fs.readFile(filename, function (err, data) {

    //check if data has been recieved
    if (err) {
      //5.If error there was a problem with the json file, log to console
      console.log('Problem reading JSON')
      throw err;
    } else {
      //6.If json data is there log success message.
        
      console.log('Success! JSON DATA confirmed...');
      console.log('Running callback method with json...');

      //7.Parse json
      const json = JSON.parse(data);

      //8.Use the callback and pass in JSON data
      callback(json);
    }
  });
}



