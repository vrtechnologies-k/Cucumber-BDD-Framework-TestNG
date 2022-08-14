$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SubmitForm.feature");
formatter.feature({
  "line": 2,
  "name": "About form Submission Functionality",
  "description": "\r\nIn order to ensure form Submission Functionality works,\r\nI want to run the cucumber test to verify it is working",
  "id": "about-form-submission-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "form Submission Functionality",
  "description": "",
  "id": "about-form-submission-functionality;form-submission-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "user navigates to \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user enter the mandatory details",
  "rows": [
    {
      "cells": [
        "venkat",
        "venkat@gmail.com",
        "venkat@123",
        "Male",
        "01-08-1988"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "clicked on submit button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#But"
    }
  ],
  "line": 13,
  "name": "validate the form submission successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "about-form-submission-functionality;form-submission-functionality;",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 16,
      "id": "about-form-submission-functionality;form-submission-functionality;;1"
    },
    {
      "cells": [
        "https://rahulshettyacademy.com/angularpractice/"
      ],
      "line": 17,
      "id": "about-form-submission-functionality;form-submission-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "form Submission Functionality",
  "description": "",
  "id": "about-form-submission-functionality;form-submission-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user navigates to \"https://rahulshettyacademy.com/angularpractice/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user enter the mandatory details",
  "rows": [
    {
      "cells": [
        "venkat",
        "venkat@gmail.com",
        "venkat@123",
        "Male",
        "01-08-1988"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "clicked on submit button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#But"
    }
  ],
  "line": 13,
  "name": "validate the form submission successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://rahulshettyacademy.com/angularpractice/",
      "offset": 19
    }
  ],
  "location": "MyLeave.user_navigates_to_websiteUrl(String)"
});
formatter.result({
  "duration": 6457975100,
  "status": "passed"
});
formatter.match({
  "location": "formSubmission.user_enter_the_mandatory_details(DataTable)"
});
formatter.result({
  "duration": 597000600,
  "status": "passed"
});
formatter.match({
  "location": "formSubmission.clicked_on_submit_button()"
});
formatter.result({
  "duration": 87113900,
  "status": "passed"
});
formatter.match({
  "location": "formSubmission.validate_the_form_submission_successfully()"
});
formatter.result({
  "duration": 27501400,
  "status": "passed"
});
});