Feature: Hotel Booking In Adactin Application

Scenario Outline: User login In The Web Application
Given user Launch The Adactin Application
When user Enter The "<username>" In Username Field
And user Enter The "<password>" In Password Field 
Then user Click The Password And It Navigates To Search Hotel Page
Examples:
|username|password|
|suresh321|suresh|


Scenario: User Searching the Hotel location 
When user Selecting the Hotel Location And Click
And user click The Preferred Hotel Name And Click
And user click The Room Type And Click
And user click The Required Number Of Rooms And Click
And user Select The Required Check In Date And Click
And user Select The Required Check Out Date And Click
And user Select The Number of Adults And Click
And user Select The Number of Childrens And Click
Then user Clicking the Search Button And It Navigates To Select Hotel Page

Scenario: User Selecting The Hotel 
When user Confirming the Entered Hotel Details
Then user Clicking The Continue Button And It Navigates To Book A Hotel Page

Scenario: User Booking The Hotel
When user Entering The First Name
And user Entering The Second Name
And user Entering The Billing Address
And user Entering The Credit Card Number
And user Entering The Credit Card Type
And user Entering The Expiry Month
And user Entering The Expiry Year
And user Entering The CVV Number
Then user Clicking The Book Now And It Navigates To Booking Confirmation Page

Scenario: User Logging Out From Adactin Site
When user Clicking Logout button And It Navigates To Successfully Logged Out Page
