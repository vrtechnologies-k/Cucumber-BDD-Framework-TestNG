Feature: Online Shopping Functionality feature
  
  In order to ensure Online Shopping Functionality works,
  I want to run the cucumber test to verify it is working

  Scenario: Online Shopping Functionality
    Given user navigate to the website
    When user logs using username and password
    Then user search for the product
    And user add to the cart
    Then user click on logout button
    And user close the browser
