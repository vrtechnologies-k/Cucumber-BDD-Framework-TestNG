@Smoke
Feature: About Holiday List Page Functionality
  
  In order to ensure Holiday List Page Functionality works,
  I want to run the cucumber test to verify it is working

  Scenario Outline: Login Functionality
    Given user navigates to "<URL>"
    When user logs in using "<UserName>" and "<Password>"
    And clicked on login button
    Then login should be successful

    Examples: 
      | URL                           | UserName | Password     |
      | http://timetrack.xxxxx.com/   | ramyag   | xxxxxxxx@123 |

  Scenario Outline: Apply Holiday List Functionality
    When user click on Holiday List link
    And It should navigate to the Holiday List Page
    Then user select the Location as "<Location>" and Period as "<Year>"
    Then verify the list of Holidays for Prime
    And Verfiy the Uagdi festival in Holiday List for India

    Examples: 
      | Location | Year |
      | India    | 2016 |

  Scenario: Logout Functionality
    When user click on Account icon
    And user click on Logout button
    Then user logout successfully
