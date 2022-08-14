@Smoke
Feature: About Apply Leave Page Functionality
  
  In order to ensure My Leave Page Functionality works,
  I want to run the cucumber test to verify it is working

  Scenario Outline: Login Functionality
    Given user navigates to "<URL>"
    When user logs in using "<UserName>" and "<Password>"
    And clicked on login button
    Then login should be successful

    Examples: 
      | URL                           | UserName | Password     |
      | http://timetrack.2xprime.com/ | venkatak | Jeswitha@123 |

  Scenario: Apply Leave Page Functionality
    When user click on Apply Leave link
    And It should navigate to the Apply Leave Page
    Then user enter all the mandatory fields
    Then user click on the view button
    Then user verify the leave type
    And Click on the cancel button

  Scenario: Logout Functionality
    When user click on Account icon
    And user click on Logout button
    Then user logout successfully
