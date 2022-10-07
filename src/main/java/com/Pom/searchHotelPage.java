package com.Pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class searchHotelPage {
	public static WebDriver driver;
	@FindBy(id = "location")
	private WebElement location;
	@FindBy(id = "hotels")
	private WebElement hotel;
	@FindBy(id = "room_type")
	private WebElement roomtype;
	@FindBy(id = "room_nos")
	private WebElement numberofrooms;
	@FindBy(id = "datepick_in")
	private WebElement checkindate;
	@FindBy(id = "datepick_out")
	private WebElement checkoutdate;
	@FindBy(id = "adult_room")
	private WebElement adultsperroom;
	@FindBy(id = "child_room")
	private WebElement numofchild;
	@FindBy(id = "Submit")
	private WebElement searchbutton;
	
	public searchHotelPage(WebDriver driver) {
		this.driver=driver;
		PageFactory.initElements(driver, this);
		}

	public WebElement getLocation() {
		return location;
	}
	public WebElement getHotel() {
		return hotel;
	}
	public WebElement getRoomtype() {
		return roomtype;
	}
	public WebElement getNumberofrooms() {
		return numberofrooms;
	}

	public WebElement getCheckindate() {
		return checkindate;
	}

	public WebElement getCheckoutdate() {
		return checkoutdate;
	}

	public WebElement getAdultsperroom() {
		return adultsperroom;
	}

	public WebElement getNumofchild() {
		return numofchild;
	}

	public WebElement getSearchbutton() {
		return searchbutton;
	}
	
	
}



