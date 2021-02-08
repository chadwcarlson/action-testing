const yaml = require('js-yaml');
const fs   = require('fs');
var moment = require('moment');

// Get document, or throw exception on error
try {
    let doc = yaml.load(fs.readFileSync('test.yaml', 'utf8'));
    doc.data.push(moment().format('yyyy-mm-dd:hh:mm:ss'));
    let yamlStr = yaml.dump(doc);
    fs.writeFile('test.yaml', yamlStr, (error) => { 
              if (error) throw err; 
    }) 
} catch (e) {
    console.log(e);
}