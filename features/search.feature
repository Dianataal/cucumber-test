Feature: Search on Rahvaraamat.ee
  As a user
  I want to search for a book on Rahvaraamat.ee
  So that I can find the desired book

  Scenario: Search for a book
    Given I am on the Rahvaraamat.ee website
    When I enter "Harry Potter" into the search bar and press Enter
    Then I should see search results for "Harry Potter"
