@ui
Feature: Landing Page

  Scenario: Get Started button navigates to the login page
    Given I navigate to the landing page
    Then I should see the "Get Started" button
    When I click "Get Started"
    Then I should be on the login page

  @manual
  Scenario: Landing page layout and branding look correct
    Given I navigate to the landing page
    Then the heading, subtitle and button should be visually aligned
    And the colour scheme and typography should match the design spec
