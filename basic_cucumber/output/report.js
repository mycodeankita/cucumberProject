$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("\u0027stepdefin\\myfile.feature\u0027");
formatter.feature({
  "line": 1,
  "name": "Attitude matters",
  "description": "In order to understand attitude\r\nAs a ITworking guy\r\nI want to know whom he is wishinng",
  "id": "attitude-matters",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 8,
  "name": "I am a Employee and his attitude",
  "description": "",
  "id": "attitude-matters;i-am-a-employee-and-his-attitude",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@tester"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I work in lateNight",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I meet Watchman",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I greet him",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I work in Mornings",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I meet Shopkeeper",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I skipGreeting him",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "We work in Mornings",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I meet Shopkeeper",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I skipGreeting him",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "lateNight",
      "offset": 10
    }
  ],
  "location": "AtitudeTest.ln(String)"
});
formatter.result({
  "duration": 380827226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Watchman",
      "offset": 7
    }
  ],
  "location": "AtitudeTest.Imeet(String)"
});
formatter.result({
  "duration": 322818,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "greet",
      "offset": 2
    }
  ],
  "location": "AtitudeTest.validate1(String)"
});
formatter.result({
  "duration": 428713,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mornings",
      "offset": 10
    }
  ],
  "location": "AtitudeTest.ln(String)"
});
formatter.result({
  "duration": 253776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopkeeper",
      "offset": 7
    }
  ],
  "location": "AtitudeTest.Imeet(String)"
});
formatter.result({
  "duration": 254709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "skipGreeting",
      "offset": 2
    }
  ],
  "location": "AtitudeTest.validate1(String)"
});
formatter.result({
  "duration": 256109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mornings",
      "offset": 11
    }
  ],
  "location": "AtitudeTest.given1(String)"
});
formatter.result({
  "duration": 313487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopkeeper",
      "offset": 7
    }
  ],
  "location": "AtitudeTest.Imeet(String)"
});
formatter.result({
  "duration": 234650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "skipGreeting",
      "offset": 2
    }
  ],
  "location": "AtitudeTest.validate1(String)"
});
formatter.result({
  "duration": 229985,
  "status": "passed"
});
});