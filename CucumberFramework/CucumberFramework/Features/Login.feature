Feature: About Login Admin Functionality
  
  In order to ensure Admin Login Functionality works,
  I want to run the cucumber test to verify it is working

  Scenario Outline: Login Functionality
    Given user navigates to "<URL>"
    When user logs in using "<UserName>" and "<Password>"
    And clicked on login button
    Then login should be successful

    Examples: 
      | URL                            | UserName               | Password     |
      | https://qaportal.vertexsmb.com | vertuser2@vertex.local | P@ssw0rd-U@t |
