Feature: Attitude matters
In order to understand attitude
As a ITworking guy
I want to know whom he is wishinng
 

@tester
Scenario: I am a Employee and his attitude

Given I work in lateNight
When I meet Watchman
Then I greet him

Given I work in Mornings
When I meet Shopkeeper
Then I skipGreeting him

Given We work in Mornings
When I meet Shopkeeper
Then I skipGreeting him