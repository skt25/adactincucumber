package com.adactin.runner;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.properties.fileReaderManager;

import baseclass.base_Class;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src//test//java//com//adactin//feature", glue = "com.adactin.stepdefiniton",
monochrome = true ,
dryRun = false,
strict = true ,
plugin = {"html:Reports/HtmlReport",
		"pretty",
		"json:Reports/JsonReport.json",
		"com.cucumber.listener.ExtentCucumberFormatter:Reports/ExtentReport.html"
}

)

public class Runner {
	public static WebDriver driver;

	@BeforeClass
	public static void setUp() throws IOException {
		String browser = fileReaderManager.getInstance().getInstanceCR().getBrowser();
		driver = base_Class.browserlaunch(browser);
//		System.setProperty("webdriver.chrome.driver",
//				"C:.\\chromeDriver\\chromedriver.exe");
//
//		driver = new ChromeDriver();
//		
//
//		driver.manage().window().maximize();
	}

	@AfterClass
	public static void tearDown() {
		driver=base_Class.quit();
	}

}
