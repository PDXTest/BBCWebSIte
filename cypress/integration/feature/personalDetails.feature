Feature: Login to BBC website and update the postcode

    Scenario:Login to BBC Website
        Given User launch the BBC website
        When User enter "chandubhirud@yahoo.com", "login2bbc" and click on submit button
        Then User validate the home page

    Scenario:Login to BBC Website and update the postcode
        Given User launch the BBC website
        When User enter "chandubhirud@yahoo.com", "login2bbc" and click on submit button
        Then user clicks on Account and settings
        And user click on Continue to Settings button
        Then user update the postcode