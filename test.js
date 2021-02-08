const yaml = require('js-yaml');
const fs   = require('fs');
var moment = require('moment');

// Get document, or throw exception on error
try {
    let doc = yaml.load(fs.readFileSync('test.yaml', 'utf8'));
    let newDate = moment().format('yyyy-MM-DD');
    doc.data.push(newDate);
    let yamlStr = yaml.dump(doc);
    fs.writeFile('test.yaml', yamlStr, (error) => { 
              if (error) throw err; 
    }) 
    let commitMessage = `(${newDate}) Update commit.`
    console.log(commitMessage)
} catch (e) {
    console.log(e);
}