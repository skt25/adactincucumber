package com.Pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class bookAHotelPage {
	public static WebDriver driver;
	@FindBy(id = "first_name")
	private WebElement firstname;
	@FindBy(id = "last_name")
	private WebElement lastname;
	@FindBy(id = "address")
	private WebElement address;
	@FindBy(id = "cc_num")
	private WebElement cardnumber;
	@FindBy(id = "cc_type")
	private WebElement cardtype;
	@FindBy(id = "cc_exp_month")
	private WebElement cardexpmonth;
	@FindBy(id = "cc_exp_year")
	private WebElement cardexpyear;
	@FindBy(id = "cc_cvv")
	private WebElement cardcvvnum;
	@FindBy(id = "book_now")
	private WebElement booknowbutton;

	public bookAHotelPage(WebDriver driver4) {
		this.driver = driver4;
		PageFactory.initElements(driver, this);
	}

	public WebElement getFirstname() {
		return firstname;
	}

	public WebElement getLastname() {
		return lastname;
	}

	public WebElement getAddress() {
		return address;
	}

	public WebElement getCardnumber() {
		return cardnumber;
	}

	public WebElement getCardtype() {
		return cardtype;
	}

	public WebElement getCardexpmonth() {
		return cardexpmonth;
	}

	public WebElement getCardexpyear() {
		return cardexpyear;
	}

	public WebElement getCardcvvnum() {
		return cardcvvnum;
	}

	public WebElement getBooknowbutton() {
		return booknowbutton;
	}

}
