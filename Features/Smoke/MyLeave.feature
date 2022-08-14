@Smoke
Feature: About My Leave Page Functionality
  
  In order to ensure My Leave Page Functionality works,
  I want to run the cucumber test to verify it is working

  Scenario Outline: Login Functionality
    Given user navigates to "<URL>"
    When user logs in using "<UserName>" and "<Password>"
    And clicked on login button
    Then login should be successful

    Examples: 
      | URL                           | UserName | Password     |
      | http://timetrack.xxxxxxx.com/ | ramyag   | xxxxxxxx@123 |

  Scenario: My Leave Page Functionality
    When user click on My Leave link
    And It should navigate to the My Leave Page
    Then user verfiy the user of the account
    Then user select the leave availabled in last months

  Scenario: Logout Functionality
    When user click on Account icon
    And user click on Logout button
    Then user logout successfully
    Then user close the browser
