$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "About Login Admin Functionality",
  "description": "\r\nIn order to ensure Admin Login Functionality works,\r\nI want to run the cucumber test to verify it is working",
  "id": "about-login-admin-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 14,
  "name": "Login Functionality",
  "description": "",
  "id": "about-login-admin-functionality;login-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "user navigates to \"https://qaportal.vertexsmb.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user logs in using \"vertuser2@vertex.local\" and \"P@ssw0rd-U@t\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "clicked on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "login should be successful",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://qaportal.vertexsmb.com",
      "offset": 19
    }
  ],
  "location": "Login.user_navigates_to_websiteUrl(String)"
});
