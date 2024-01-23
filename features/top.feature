Feature: Check Top Weekly Books Carousel on Rahvaraamat.ee
  As a user
  I want to verify if "Harry Potter" appears in the top weekly books carousel

  Scenario: Verify "Harry Potter" in Top Weekly Books Carousel
    Given I am on the Rahvaraamat.ee website
    When I check the top weekly books carousel
    Then I should see "Harry Potter" in the top weekly books carousel
