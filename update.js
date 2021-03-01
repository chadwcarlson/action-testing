const fs   = require('fs');
var moment = require('moment');
const yaml = require('js-yaml');

const dataFile = "data.yaml";

// Conditional (to mimic no-update days). Only update on odd days.
if ((Number(moment().format('DD')) % 2) == 1) {
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
}
