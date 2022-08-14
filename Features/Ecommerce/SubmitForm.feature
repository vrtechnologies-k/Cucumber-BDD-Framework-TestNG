@Smoke
Feature: About form Submission Functionality
  
  In order to ensure form Submission Functionality works,
  I want to run the cucumber test to verify it is working

  Scenario Outline: form Submission Functionality
    Given user navigates to "<URL>"
    When user enter the mandatory details
    |venkat|venkat@gmail.com|venkat@123|Male|01-08-1988|
    And clicked on submit button
    #But 
    Then validate the form submission successfully

    Examples: 
      | URL                                             |
      | https://rahulshettyacademy.com/angularpractice/ |

