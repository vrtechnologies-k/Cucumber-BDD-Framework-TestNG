$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ApplyLeave.feature");
formatter.feature({
  "line": 2,
  "name": "About Apply Leave Page Functionality",
  "description": "\r\nIn order to ensure My Leave Page Functionality works,\r\nI want to run the cucumber test to verify it is working",
  "id": "about-apply-leave-page-functionality",
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
  "name": "Login Functionality",
  "description": "",
  "id": "about-apply-leave-page-functionality;login-functionality",
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
  "name": "user logs in using \"\u003cUserName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "clicked on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "login should be successful",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "about-apply-leave-page-functionality;login-functionality;",
  "rows": [
    {
      "cells": [
        "URL",
        "UserName",
        "Password"
      ],
      "line": 14,
      "id": "about-apply-leave-page-functionality;login-functionality;;1"
    },
    {
      "cells": [
        "http://timetrack.2xprime.com/",
        "venkatak",
        "Jeswitha@123"
      ],
      "line": 15,
      "id": "about-apply-leave-page-functionality;login-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Login Functionality",
  "description": "",
  "id": "about-apply-leave-page-functionality;login-functionality;;2",
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
  "name": "user navigates to \"http://timetrack.2xprime.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user logs in using \"venkatak\" and \"Jeswitha@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "clicked on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "login should be successful",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://timetrack.2xprime.com/",
      "offset": 19
    }
  ],
  "location": "MyLeave.user_navigates_to_websiteUrl(String)"
});
formatter.result({
  "duration": 7152434682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "venkatak",
      "offset": 20
    },
    {
      "val": "Jeswitha@123",
      "offset": 35
    }
  ],
  "location": "MyLeave.user_logs_in_using_UserName_Password(String,String)"
});
formatter.result({
  "duration": 209320118,
  "status": "passed"
});
formatter.match({
  "location": "MyLeave.clicked_on_login_button()"
});
formatter.result({
  "duration": 7601180564,
  "status": "passed"
});
formatter.match({
  "location": "MyLeave.login_should_be_successful()"
});
formatter.result({
  "duration": 54144884,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Apply Leave Page Functionality",
  "description": "",
  "id": "about-apply-leave-page-functionality;apply-leave-page-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "user click on Apply Leave link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "It should navigate to the Apply Leave Page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user enter all the mandatory fields",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user click on the view button",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user verify the leave type",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Click on the cancel button",
  "keyword": "And "
});
formatter.match({
  "location": "ApplyLeave.user_click_on_Apply_Leave_link()"
});
formatter.result({
  "duration": 1665711060,
  "status": "passed"
});
formatter.match({
  "location": "ApplyLeave.it_should_navigate_to_the_Apply_Leave_Page()"
});
formatter.result({
  "duration": 12301075,
  "status": "passed"
});
formatter.match({
  "location": "ApplyLeave.user_enter_all_the_mandatory_fields()"
});
formatter.result({
  "duration": 1755320162,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u002729\u0027)]\"}\n  (Session info: chrome\u003d52.0.2743.116)\n  (Driver info: chromedriver\u003d2.22.397933 (1cab651507b88dec79b2b2a22d1943c01833cc1b),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 1.05 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.48.2\u0027, revision: \u002741bccdd\u0027, time: \u00272015-10-09 19:59:12\u0027\nSystem info: host: \u0027User-280\u0027, ip: \u0027192.168.5.187\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_05\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.22.397933 (1cab651507b88dec79b2b2a22d1943c01833cc1b), userDataDir\u003dC:\\Users\\venkatak\\AppData\\Local\\Temp\\scoped_dir944_28723}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d52.0.2743.116, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 4bffb495f81210e3731d8874d8faf881\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u002729\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:408)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:647)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:490)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:345)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.isDisplayed(Unknown Source)\r\n\tat Cucumber.Libraries.BaseTest.click(BaseTest.java:125)\r\n\tat Cucumber.Steps.ApplyLeave.user_enter_all_the_mandatory_fields(ApplyLeave.java:35)\r\n\tat ✽.Then user enter all the mandatory fields(ApplyLeave.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ApplyLeave.user_click_on_the_view_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ApplyLeave.user_verify_the_leave_type()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ApplyLeave.click_on_the_cancel_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 25,
  "name": "Logout Functionality",
  "description": "",
  "id": "about-apply-leave-page-functionality;logout-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "user click on Account icon",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user click on Logout button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user logout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyLeave.user_click_on_Account_icon()"
});
formatter.result({
  "duration": 5093013333,
  "status": "passed"
});
formatter.match({
  "location": "MyLeave.user_click_on_Logout_button()"
});
formatter.result({
  "duration": 666126870,
  "status": "passed"
});
formatter.match({
  "location": "MyLeave.user_logout_successfully()"
});
formatter.result({
  "duration": 53793762,
  "status": "passed"
});
formatter.uri("HolidayList.feature");
formatter.feature({
  "line": 2,
  "name": "About Holiday List Page Functionality",
  "description": "\r\nIn order to ensure Holiday List Page Functionality works,\r\nI want to run the cucumber test to verify it is working",
  "id": "about-holiday-list-page-functionality",
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
  "name": "Login Functionality",
  "description": "",
  "id": "about-holiday-list-page-functionality;login-functionality",
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
  "name": "user logs in using \"\u003cUserName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "clicked on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "login should be successful",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "about-holiday-list-page-functionality;login-functionality;",
  "rows": [
    {
      "cells": [
        "URL",
        "UserName",
        "Password"
      ],
      "line": 14,
      "id": "about-holiday-list-page-functionality;login-functionality;;1"
    },
    {
      "cells": [
        "http://timetrack.2xprime.com/",
        "venkatak",
        "Jeswitha@123"
      ],
      "line": 15,
      "id": "about-holiday-list-page-functionality;login-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Login Functionality",
  "description": "",
  "id": "about-holiday-list-page-functionality;login-functionality;;2",
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
  "name": "user navigates to \"http://timetrack.2xprime.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user logs in using \"venkatak\" and \"Jeswitha@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "clicked on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "login should be successful",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://timetrack.2xprime.com/",
      "offset": 19
    }
  ],
  "location": "MyLeave.user_navigates_to_websiteUrl(String)"
});
formatter.result({
  "duration": 399820552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "venkatak",
      "offset": 20
    },
    {
      "val": "Jeswitha@123",
      "offset": 35
    }
  ],
  "location": "MyLeave.user_logs_in_using_UserName_Password(String,String)"
});
formatter.result({
  "duration": 188861452,
  "status": "passed"
});
formatter.match({
  "location": "MyLeave.clicked_on_login_button()"
});
formatter.result({
  "duration": 5609436744,
  "status": "passed"
});
formatter.match({
  "location": "MyLeave.login_should_be_successful()"
});
formatter.result({
  "duration": 69001776,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Apply Holiday List Functionality",
  "description": "",
  "id": "about-holiday-list-page-functionality;apply-holiday-list-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "user click on Holiday List link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "It should navigate to the Holiday List Page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user select the Location as \"\u003cLocation\u003e\" and Period as \"\u003cYear\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "verify the list of Holidays for Prime",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Verfiy the Uagdi festival in Holiday List for India",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "about-holiday-list-page-functionality;apply-holiday-list-functionality;",
  "rows": [
    {
      "cells": [
        "Location",
        "Year"
      ],
      "line": 25,
      "id": "about-holiday-list-page-functionality;apply-holiday-list-functionality;;1"
    },
    {
      "cells": [
        "India",
        "2016"
      ],
      "line": 26,
      "id": "about-holiday-list-page-functionality;apply-holiday-list-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Apply Holiday List Functionality",
  "description": "",
  "id": "about-holiday-list-page-functionality;apply-holiday-list-functionality;;2",
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
  "line": 18,
  "name": "user click on Holiday List link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "It should navigate to the Holiday List Page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user select the Location as \"India\" and Period as \"2016\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "verify the list of Holidays for Prime",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Verfiy the Uagdi festival in Holiday List for India",
  "keyword": "And "
});
formatter.match({
  "location": "HolidaysList.user_click_on_Holiday_List_link()"
});
formatter.result({
  "duration": 539403995,
  "status": "passed"
});
formatter.match({
  "location": "HolidaysList.it_should_navigate_to_the_Holiday_List_Page()"
});
formatter.result({
  "duration": 76495065,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 29
    },
    {
      "val": "2016",
      "offset": 51
    }
  ],
  "location": "HolidaysList.user_select_the_Location_as_and_Period_as(String,String)"
});
formatter.result({
  "duration": 170231479,
  "status": "passed"
});
formatter.match({
  "location": "HolidaysList.verify_the_list_of_Holidays_for_Prime()"
});
formatter.result({
  "duration": 1036196628,
  "status": "passed"
});
formatter.match({
  "location": "HolidaysList.verfiy_the_Uagdi_festival_in_Holiday_List_for_India_and_Christmas_for_US()"
});
formatter.result({
  "duration": 36006294,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Logout Functionality",
  "description": "",
  "id": "about-holiday-list-page-functionality;logout-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "user click on Account icon",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user click on Logout button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user logout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyLeave.user_click_on_Account_icon()"
});
formatter.result({
  "duration": 5083660870,
  "status": "passed"
});
formatter.match({
  "location": "MyLeave.user_click_on_Logout_button()"
});
formatter.result({
  "duration": 607233915,
  "status": "passed"
});
formatter.match({
  "location": "MyLeave.user_logout_successfully()"
});
formatter.result({
  "duration": 33894589,
  "status": "passed"
});
formatter.uri("MyLeave.feature");
formatter.feature({
  "line": 2,
  "name": "About My Leave Page Functionality",
  "description": "\r\nIn order to ensure My Leave Page Functionality works,\r\nI want to run the cucumber test to verify it is working",
  "id": "about-my-leave-page-functionality",
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
  "name": "Login Functionality",
  "description": "",
  "id": "about-my-leave-page-functionality;login-functionality",
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
  "name": "user logs in using \"\u003cUserName\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "clicked on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "login should be successful",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "about-my-leave-page-functionality;login-functionality;",
  "rows": [
    {
      "cells": [
        "URL",
        "UserName",
        "Password"
      ],
      "line": 14,
      "id": "about-my-leave-page-functionality;login-functionality;;1"
    },
    {
      "cells": [
        "http://timetrack.2xprime.com/",
        "venkatak",
        "Jeswitha@123"
      ],
      "line": 15,
      "id": "about-my-leave-page-functionality;login-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Login Functionality",
  "description": "",
  "id": "about-my-leave-page-functionality;login-functionality;;2",
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
  "name": "user navigates to \"http://timetrack.2xprime.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user logs in using \"venkatak\" and \"Jeswitha@123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "clicked on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "login should be successful",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://timetrack.2xprime.com/",
      "offset": 19
    }
  ],
  "location": "MyLeave.user_navigates_to_websiteUrl(String)"
});
formatter.result({
  "duration": 311122687,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "venkatak",
      "offset": 20
    },
    {
      "val": "Jeswitha@123",
      "offset": 35
    }
  ],
  "location": "MyLeave.user_logs_in_using_UserName_Password(String,String)"
});
formatter.result({
  "duration": 215148613,
  "status": "passed"
});
formatter.match({
  "location": "MyLeave.clicked_on_login_button()"
});
formatter.result({
  "duration": 5546264707,
  "status": "passed"
});
formatter.match({
  "location": "MyLeave.login_should_be_successful()"
});
formatter.result({
  "duration": 82889585,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "My Leave Page Functionality",
  "description": "",
  "id": "about-my-leave-page-functionality;my-leave-page-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "user click on My Leave link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "It should navigate to the My Leave Page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user verfiy the user of the account",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user select the leave availabled in last months",
  "keyword": "Then "
});
formatter.match({
  "location": "MyLeave.user_click_on_My_Leave_link()"
});
formatter.result({
  "duration": 47662351,
  "status": "passed"
});
formatter.match({
  "location": "MyLeave.it_should_navigate_to_the_My_Leave_Page()"
});
formatter.result({
  "duration": 5996435,
  "status": "passed"
});
formatter.match({
  "location": "MyLeave.user_verfiy_the_user_of_the_account()"
});
formatter.result({
  "duration": 1153148121,
  "status": "passed"
});
formatter.match({
  "location": "MyLeave.user_select_the_leave_availabled_in_last_months()"
});
formatter.result({
  "duration": 128632118,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Logout Functionality",
  "description": "",
  "id": "about-my-leave-page-functionality;logout-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "user click on Account icon",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user click on Logout button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user logout successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MyLeave.user_click_on_Account_icon()"
});
formatter.result({
  "duration": 5080182309,
  "status": "passed"
});
formatter.match({
  "location": "MyLeave.user_click_on_Logout_button()"
});
formatter.result({
  "duration": 595741134,
  "status": "passed"
});
formatter.match({
  "location": "MyLeave.user_logout_successfully()"
});
formatter.result({
  "duration": 28695252,
  "status": "passed"
});
formatter.match({
  "location": "MyLeave.user_close_the_browser()"
});
formatter.result({
  "duration": 2307432955,
  "status": "passed"
});
formatter.uri("MytimeSheet.feature");
formatter.feature({
  "line": 2,
  "name": "About My timesheet page Functionality",
  "description": "In order to ensure My timesheet Page Functionality works,\r\nI want to run the cucumber test to verify it is working",
  "id": "about-my-timesheet-page-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Login Functionality",
  "description": "",
  "id": "about-my-timesheet-page-functionality;login-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "user navigates to \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user logs in using \"\u003cUserName\u003e\" and \"\u003cPassword\u003e\"",
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
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "about-my-timesheet-page-functionality;login-functionality;",
  "rows": [
    {
      "cells": [
        "URL",
        "UserName",
        "Password"
      ],
      "line": 13,
      "id": "about-my-timesheet-page-functionality;login-functionality;;1"
    },
    {
      "cells": [
        "http://timetrack.2xprime.com/",
        "venkatak",
        "Jeswitha@123"
      ],
      "line": 14,
      "id": "about-my-timesheet-page-functionality;login-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Login Functionality",
  "description": "",
  "id": "about-my-timesheet-page-functionality;login-functionality;;2",
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
  "line": 7,
  "name": "user navigates to \"http://timetrack.2xprime.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user logs in using \"venkatak\" and \"Jeswitha@123\"",
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
      "val": "http://timetrack.2xprime.com/",
      "offset": 19
    }
  ],
  "location": "MyLeave.user_navigates_to_websiteUrl(String)"
});
formatter.result({
  "duration": 9781334,
  "error_message": "org.openqa.selenium.remote.SessionNotFoundException: no such session\n  (Driver info: chromedriver\u003d2.22.397933 (1cab651507b88dec79b2b2a22d1943c01833cc1b),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 8 milliseconds\nBuild info: version: \u00272.48.2\u0027, revision: \u002741bccdd\u0027, time: \u00272015-10-09 19:59:12\u0027\nSystem info: host: \u0027User-280\u0027, ip: \u0027192.168.5.187\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_05\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.22.397933 (1cab651507b88dec79b2b2a22d1943c01833cc1b), userDataDir\u003dC:\\Users\\venkatak\\AppData\\Local\\Temp\\scoped_dir944_28723}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d52.0.2743.116, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 4bffb495f81210e3731d8874d8faf881\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:408)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:647)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:311)\r\n\tat Cucumber.Libraries.BaseTest.getURL(BaseTest.java:422)\r\n\tat Cucumber.Steps.MyLeave.user_navigates_to_websiteUrl(MyLeave.java:26)\r\n\tat ✽.Given user navigates to \"http://timetrack.2xprime.com/\"(MytimeSheet.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "venkatak",
      "offset": 20
    },
    {
      "val": "Jeswitha@123",
      "offset": 35
    }
  ],
  "location": "MyLeave.user_logs_in_using_UserName_Password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyLeave.clicked_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyLeave.login_should_be_successful()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "My timesheet Page Functionality",
  "description": "",
  "id": "about-my-timesheet-page-functionality;my-timesheet-page-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "user click on My timesheet Leave link",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "It should navigate to the My timesheet Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user click on the Add row button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user verify the list of projects and activities",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user click on the cancel button",
  "keyword": "And "
});
formatter.match({
  "location": "MytimeSheet.user_click_on_My_timesheet_Leave_link()"
});
formatter.result({
  "duration": 5657132,
  "error_message": "org.openqa.selenium.remote.SessionNotFoundException: no such session\n  (Driver info: chromedriver\u003d2.22.397933 (1cab651507b88dec79b2b2a22d1943c01833cc1b),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 3 milliseconds\nBuild info: version: \u00272.48.2\u0027, revision: \u002741bccdd\u0027, time: \u00272015-10-09 19:59:12\u0027\nSystem info: host: \u0027User-280\u0027, ip: \u0027192.168.5.187\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_05\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.22.397933 (1cab651507b88dec79b2b2a22d1943c01833cc1b), userDataDir\u003dC:\\Users\\venkatak\\AppData\\Local\\Temp\\scoped_dir944_28723}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d52.0.2743.116, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 4bffb495f81210e3731d8874d8faf881\n*** Element info: {Using\u003did, value\u003dancTimesheetMgmt}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:408)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:647)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:403)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:345)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.isDisplayed(Unknown Source)\r\n\tat Cucumber.Libraries.BaseTest.click(BaseTest.java:125)\r\n\tat Cucumber.Steps.MytimeSheet.user_click_on_My_timesheet_Leave_link(MytimeSheet.java:22)\r\n\tat ✽.When user click on My timesheet Leave link(MytimeSheet.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MytimeSheet.it_should_navigate_to_the_My_timesheet_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MytimeSheet.user_click_on_the_Add_row_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MytimeSheet.user_verify_the_list_of_projects_and_activities()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MytimeSheet.user_click_on_the_cancel_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 23,
  "name": "Logout Functionality",
  "description": "",
  "id": "about-my-timesheet-page-functionality;logout-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "user click on Account icon",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user click on Logout button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user logout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyLeave.user_click_on_Account_icon()"
});
formatter.result({
  "duration": 5004943693,
  "error_message": "org.openqa.selenium.remote.SessionNotFoundException: no such session\n  (Driver info: chromedriver\u003d2.22.397933 (1cab651507b88dec79b2b2a22d1943c01833cc1b),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 3 milliseconds\nBuild info: version: \u00272.48.2\u0027, revision: \u002741bccdd\u0027, time: \u00272015-10-09 19:59:12\u0027\nSystem info: host: \u0027User-280\u0027, ip: \u0027192.168.5.187\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_05\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.22.397933 (1cab651507b88dec79b2b2a22d1943c01833cc1b), userDataDir\u003dC:\\Users\\venkatak\\AppData\\Local\\Temp\\scoped_dir944_28723}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d52.0.2743.116, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 4bffb495f81210e3731d8874d8faf881\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027Hi\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:408)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:164)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:647)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:490)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:345)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.isDisplayed(Unknown Source)\r\n\tat Cucumber.Libraries.BaseTest.click(BaseTest.java:125)\r\n\tat Cucumber.Steps.MyLeave.user_click_on_Account_icon(MyLeave.java:73)\r\n\tat ✽.When user click on Account icon(MytimeSheet.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyLeave.user_click_on_Logout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyLeave.user_logout_successfully()"
});
formatter.result({
  "status": "skipped"
});
});