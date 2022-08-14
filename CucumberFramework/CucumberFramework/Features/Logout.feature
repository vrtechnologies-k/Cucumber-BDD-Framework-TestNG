Feature: Logout Functionality feature
  
  In order to ensure Logout Functionality works,
  I want to run the cucumber test to verify it is working

  Scenario: Logout Functionality
    When user click on Account icon
    And user click on Logout button
    Then user logout successfully
    Then user close the browser
