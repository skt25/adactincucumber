package com.PoManager;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.Pom.bookAHotelPage;
import com.Pom.bookingConfirmationPage;
import com.Pom.homePage;
import com.Pom.searchHotelPage;
import com.Pom.selectHotelPage;

public class poManager {
	public static WebDriver driver;
	private homePage hp;
	private searchHotelPage shp;
	private selectHotelPage selecthp;
	private bookAHotelPage bhp;
	private bookingConfirmationPage bcp;
	
	public searchHotelPage getShp() {
		shp = new searchHotelPage(driver);
		return shp;
	}

	public poManager(WebDriver driver2) {
this.driver=driver2;
PageFactory.initElements(driver, this);
}

	public homePage getHp() {
		hp=new homePage(driver);
		return hp;
	}

	public selectHotelPage getSelecthp() {
		selecthp = new selectHotelPage(driver);
		return selecthp;
	}

	public bookAHotelPage getBhp() {
		bhp=new bookAHotelPage(driver);
		return bhp;
	}

	public bookingConfirmationPage getBcp() {
		bcp=new bookingConfirmationPage(driver);
		return bcp;
	}

	

	
}
