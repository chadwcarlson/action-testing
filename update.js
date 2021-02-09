const fs   = require('fs');
var moment = require('moment');
const yaml = require('js-yaml');

const dataFile = "data.yaml";

try {
    // Load and update data.
    let doc = yaml.load(fs.readFileSync(dataFile, 'utf8'));
    let newDate = moment().format('yyyy-MM-DD - mm:ss');
    doc.data.push(newDate);
    // Re-write the data file.
    let yamlStr = yaml.dump(doc);
    fs.writeFile(dataFile, yamlStr, (error) => { 
        if (error) throw err; 
    }) 
} catch (e) {
    console.log(e);
}
