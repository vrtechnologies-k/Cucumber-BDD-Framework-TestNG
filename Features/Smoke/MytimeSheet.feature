@Smoke
Feature: About My timesheet page Functionality
  In order to ensure My timesheet Page Functionality works,
  I want to run the cucumber test to verify it is working

  Scenario Outline: Login Functionality
    Given user navigates to "<URL>"
    When user logs in using "<UserName>" and "<Password>"
    And clicked on login button
    Then login should be successful

    Examples: 
      | URL                           | UserName | Password     |
      | http://timetrack.xxxxxxx.com/ | ramyag   | xxxxxxxx@123 |

  Scenario: My timesheet Page Functionality
    When user click on My timesheet Leave link
    Then It should navigate to the My timesheet Page
    And user click on the Add row button
    Then user verify the list of projects and activities
    And user click on the cancel button

  Scenario: Logout Functionality
    When user click on Account icon
    And user click on Logout button
    Then user logout successfully
