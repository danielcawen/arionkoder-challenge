@ui
Feature: Login

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I log in with email "user@example.com" and password "password123"
    Then I should be redirected to the dashboard

  Scenario: Logout redirects to the landing page
    Given I am on the login page
    When I log in with email "user@example.com" and password "password123"
    And I click the logout button
    Then I should be on the landing page

  Scenario Outline: Invalid credentials show an error
    Given I am on the login page
    When I log in with email "<email>" and password "<password>"
    Then I should see the error message "Invalid credentials"

    Examples:
      | email             | password  |
      | wrong@example.com | password123 |
      | user@example.com  | wrongpass   |
