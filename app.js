var app = require('watson-assistant-skills-merger');
var file1 = require('./skills/skill2.json'); //Location of your skill1
var file2 = require('./skills/skill1.json'); //Location of your skill2
app(file1, file2);