package com.Pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class bookingConfirmationPage {
	public static WebDriver driver;

	@FindBy(id = "logout")
	private WebElement logoutbutton;
	
	public bookingConfirmationPage(WebDriver driver2) {
		this.driver=driver2;
		PageFactory.initElements(driver, this);
		
	}
	public WebElement getLogoutbutton() {
		return logoutbutton;
	}
	
}
