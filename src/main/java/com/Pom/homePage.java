package com.Pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class homePage {
	public static WebDriver driver;

	@FindBy(id = "username")
	private WebElement userid;
	@FindBy(id = "password")
	private WebElement password;
	@FindBy(id = "login")
	private WebElement login;
	
	public homePage(WebDriver driver) {
this.driver=driver;
PageFactory.initElements(driver, this);
}

	public WebElement getUserid() {
		return userid;
	}

	public WebElement getPassword() {
		return password;
	}

	public WebElement getLogin() {
		return login;
	}
	
	

}
