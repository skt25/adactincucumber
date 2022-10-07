$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User login In The Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user Launch The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter The \"\u003cusername\u003e\" In Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"\u003cpassword\u003e\" In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click The Password And It Navigates To Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9,
      "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;1"
    },
    {
      "cells": [
        "suresh321",
        "suresh"
      ],
      "line": 10,
      "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "User login In The Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user Launch The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter The \"suresh321\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"suresh\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click The Password And It Navigates To Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Launch_The_Adactin_Application()"
});
formatter.result({
  "duration": 5733442800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suresh321",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 196608100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suresh",
      "offset": 16
    }
  ],
  "location": "StepDefinition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 94609300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Password_And_It_Navigates_To_Search_Hotel_Page()"
});
formatter.result({
  "duration": 2030639700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User Searching the Hotel location",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-searching-the-hotel-location",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "user Selecting the Hotel Location And Click",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user click The Preferred Hotel Name And Click",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user click The Room Type And Click",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user click The Required Number Of Rooms And Click",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user Select The Required Check In Date And Click",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user Select The Required Check Out Date And Click",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user Select The Number of Adults And Click",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user Select The Number of Childrens And Click",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Clicking the Search Button And It Navigates To Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Selecting_the_Hotel_Location_And_Click()"
});
formatter.result({
  "duration": 351634200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_The_Preferred_Hotel_Name_And_Click()"
});
formatter.result({
  "duration": 317219300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_The_Room_Type_And_Click()"
});
formatter.result({
  "duration": 199776100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_The_Required_Number_Of_Rooms_And_Click()"
});
formatter.result({
  "duration": 210213200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Required_Check_In_Date_And_Click()"
});
formatter.result({
  "duration": 188069300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Required_Check_Out_Date_And_Click()"
});
formatter.result({
  "duration": 202325000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Number_of_Adults_And_Click()"
});
formatter.result({
  "duration": 235724400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Number_of_Childrens_And_Click()"
});
formatter.result({
  "duration": 296345500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Clicking_the_Search_Button_And_It_Navigates_To_Select_Hotel_Page()"
});
formatter.result({
  "duration": 411005700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User Selecting The Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-selecting-the-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "user Confirming the Entered Hotel Details",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user Clicking The Continue Button And It Navigates To Book A Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Confirming_the_Entered_Hotel_Details()"
});
formatter.result({
  "duration": 108813000,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d105.0.5195.127)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-NBIMRHD5\u0027, ip: \u0027192.168.29.71\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.127, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\sures\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52361}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: a0e7d8cba6f6d172a0adf8c37cea4a6e\n*** Element info: {Using\u003did, value\u003dradiobutton_0}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat baseclass.base_Class.clickOnElement(base_Class.java:144)\r\n\tat com.adactin.stepdefiniton.StepDefinition.user_Confirming_the_Entered_Hotel_Details(StepDefinition.java:111)\r\n\tat ✽.When user Confirming the Entered Hotel Details(adactin.feature:25)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_Clicking_The_Continue_Button_And_It_Navigates_To_Book_A_Hotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "User Booking The Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-booking-the-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "user Entering The First Name",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user Entering The Second Name",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user Entering The Billing Address",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user Entering The Credit Card Number",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user Entering The Credit Card Type",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user Entering The Expiry Month",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user Entering The Expiry Year",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Entering The CVV Number",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Clicking The Book Now And It Navigates To Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Entering_The_First_Name()"
});
formatter.result({
  "duration": 21333900,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d105.0.5195.127)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-NBIMRHD5\u0027, ip: \u0027192.168.29.71\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.127, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\sures\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52361}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: a0e7d8cba6f6d172a0adf8c37cea4a6e\n*** Element info: {Using\u003did, value\u003dfirst_name}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy22.sendKeys(Unknown Source)\r\n\tat baseclass.base_Class.sendValue(base_Class.java:148)\r\n\tat com.adactin.stepdefiniton.StepDefinition.user_Entering_The_First_Name(StepDefinition.java:123)\r\n\tat ✽.When user Entering The First Name(adactin.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.user_Entering_The_Second_Name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Entering_The_Billing_Address()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Entering_The_Credit_Card_Number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Entering_The_Credit_Card_Type()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Entering_The_Expiry_Month()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Entering_The_Expiry_Year()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Entering_The_CVV_Number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_Clicking_The_Book_Now_And_It_Navigates_To_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 39,
  "name": "User Logging Out From Adactin Site",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-logging-out-from-adactin-site",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "user Clicking Logout button And It Navigates To Successfully Logged Out Page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_Clicking_Logout_button_And_It_Navigates_To_Successfully_Logged_Out_Page()"
});
formatter.result({
  "duration": 17755400,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d105.0.5195.127)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-NBIMRHD5\u0027, ip: \u0027192.168.29.71\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.127, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\sures\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52361}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: a0e7d8cba6f6d172a0adf8c37cea4a6e\n*** Element info: {Using\u003did, value\u003dlogout}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat baseclass.base_Class.clickOnElement(base_Class.java:144)\r\n\tat com.adactin.stepdefiniton.StepDefinition.user_Clicking_Logout_button_And_It_Navigates_To_Successfully_Logged_Out_Page(StepDefinition.java:173)\r\n\tat ✽.When user Clicking Logout button And It Navigates To Successfully Logged Out Page(adactin.feature:40)\r\n",
  "status": "failed"
});
});