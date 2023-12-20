package com.adactin.stepdefiniton;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.PoManager.poManager;
import com.adactin.runner.Runner;
import com.properties.fileReaderManager;

import baseclass.base_Class;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition extends base_Class {
	public static WebDriver driver = Runner.driver;
	poManager pom = new poManager(driver);

	@Given("^user Launch The Adactin Application$")
	public void user_Launch_The_Adactin_Application() throws Throwable {
		String url = fileReaderManager.getInstance().getInstanceCR().getUrl();
		driver.get(url);
	}
	@When("^user Enter The \"([^\"]*)\" In Username Field$")
	public void user_Enter_The_In_Username_Field(String username) throws Throwable {
	sendValue(pom.getHp().getUserid(), username);
	System.out.println(username);

	}

	@When("^user Enter The \"([^\"]*)\" In Password Field$")
	public void user_Enter_The_In_Password_Field(String password) throws Throwable {
	sendValue(pom.getHp().getPassword(), password);
	}

//	@When("^user Enter The Username In Username Field$")
//	public void user_Enter_The_Username_In_Username_Field() throws Throwable {
//		// String username =
//		// readDatafromsheet("C:\\Users\\sures\\eclipse-workspace\\AdactinPomPractise\\excel\\ddworkbook.xlsx",
//		// "sheet1", 1, 0);
//		sendValue(pom.getHp().getUserid(), "suresh321");
//	}
//
//	@When("^user Enter The Password In Password Field$")
//	public void user_Enter_The_Password_In_Password_Field() throws Throwable {
//		// WebElement passentry = driver.findElement(By.id("password"));
//		sendValue(pom.getHp().getPassword(), "suresh");
//	}

	@Then("^user Click The Password And It Navigates To Search Hotel Page$")
	public void user_Click_The_Password_And_It_Navigates_To_Search_Hotel_Page() throws Throwable {
		clickOnElement(pom.getHp().getLogin());
	}

	@When("^user Selecting the Hotel Location And Click$")
	public void user_Selecting_the_Hotel_Location_And_Click() throws Throwable {
		dropDown(pom.getShp().getLocation(), "selectByVisibleText", "Sydney");

	}

	@When("^user click The Preferred Hotel Name And Click$")
	public void user_click_The_Preferred_Hotel_Name_And_Click() throws Throwable {
		dropDown(pom.getShp().getHotel(), "selectByVisibleText", "Hotel Creek");

	}

	@When("^user click The Room Type And Click$")
	public void user_click_The_Room_Type_And_Click() throws Throwable {
		dropDown(pom.getShp().getRoomtype(), "selectByVisibleText", "Deluxe");

	}

	@When("^user click The Required Number Of Rooms And Click$")
	public void user_click_The_Required_Number_Of_Rooms_And_Click() throws Throwable {
		dropDown(pom.getShp().getNumberofrooms(), "selectByValue", "1");

	}

	@When("^user Select The Required Check In Date And Click$")
	public void user_Select_The_Required_Check_In_Date_And_Click() throws Throwable {
		sendValue(pom.getShp().getCheckindate(), "27/09/2022");

	}

	@When("^user Select The Required Check Out Date And Click$")
	public void user_Select_The_Required_Check_Out_Date_And_Click() throws Throwable {
		sendValue(pom.getShp().getCheckoutdate(), "29/09/2022");

	}

	@When("^user Select The Number of Adults And Click$")
	public void user_Select_The_Number_of_Adults_And_Click() throws Throwable {
		dropDown(pom.getShp().getAdultsperroom(), "selectByValue", "1");

	}

	@When("^user Select The Number of Childrens And Click$")
	public void user_Select_The_Number_of_Childrens_And_Click() throws Throwable {
		dropDown(pom.getShp().getNumofchild(), "selectByValue", "1");
	}

	@Then("^user Clicking the Search Button And It Navigates To Select Hotel Page$")
	public void user_Clicking_the_Search_Button_And_It_Navigates_To_Select_Hotel_Page() throws Throwable {
		clickOnElement(pom.getShp().getSearchbutton());

	}

	@When("^user Confirming the Entered Hotel Details$")
	public void user_Confirming_the_Entered_Hotel_Details() throws Throwable {
		clickOnElement(pom.getSelecthp().getRadiobutton());

	}

	@Then("^user Clicking The Continue Button And It Navigates To Book A Hotel Page$")
	public void user_Clicking_The_Continue_Button_And_It_Navigates_To_Book_A_Hotel_Page() throws Throwable {
		clickOnElement(pom.getSelecthp().getContinuebutton());

	}

	@When("^user Entering The First Name$")
	public void user_Entering_The_First_Name() throws Throwable {
		sendValue(pom.getBhp().getFirstname(), "suresh");
	}

	@When("^user Entering The Second Name$")
	public void user_Entering_The_Second_Name() throws Throwable {
		sendValue(pom.getBhp().getLastname(), "krishna");
	}

	@When("^user Entering The Billing Address$")
	public void user_Entering_The_Billing_Address() throws Throwable {
		sendValue(pom.getBhp().getAddress(), "jhbashdbfb");
	}

	@When("^user Entering The Credit Card Number$")
	public void user_Entering_The_Credit_Card_Number() throws Throwable {
		sendValue(pom.getBhp().getCardnumber(), "1234567890123456");
	}

	@When("^user Entering The Credit Card Type$")
	public void user_Entering_The_Credit_Card_Type() throws Throwable {
		dropDown(pom.getBhp().getCardtype(), "selectByVisibleText", "American Express");

	}

	@When("^user Entering The Expiry Month$")
	public void user_Entering_The_Expiry_Month() throws Throwable {
		dropDown(pom.getBhp().getCardexpmonth(), "selectByVisibleText", "January");

	}

	@When("^user Entering The Expiry Year$")
	public void user_Entering_The_Expiry_Year() throws Throwable {
		dropDown(pom.getBhp().getCardexpyear(), "selectByVisibleText", "2022");

	}

	@When("^user Entering The CVV Number$")
	public void user_Entering_The_CVV_Number() throws Throwable {
		sendValue(pom.getBhp().getCardcvvnum(), "123");

	}

	@Then("^user Clicking The Book Now And It Navigates To Booking Confirmation Page$")
	public void user_Clicking_The_Book_Now_And_It_Navigates_To_Booking_Confirmation_Page() throws Throwable {
		clickOnElement(pom.getBhp().getBooknowbutton());

	}

	@When("^user Clicking Logout button And It Navigates To Successfully Logged Out Page$")
	public void user_Clicking_Logout_button_And_It_Navigates_To_Successfully_Logged_Out_Page() throws Throwable {
		clickOnElement(pom.getBcp().getLogoutbutton());

	}

}
