package baseclass;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.google.common.io.Files;

public class base_Class {
	public static WebDriver driver;

	public static WebDriver browserlaunch(String browser) {
		if (browser.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver",
					"C:\\Users\\sures\\OneDrive\\Desktop\\chromedriver\\chromedriver.exe");

			driver = new ChromeDriver();

			driver.manage().window().maximize();

		}
		return driver;

	}

	public static void getUrl(String url) {
		driver.get(url);
	}

	public static void navigateTo(String url) {
		driver.navigate().to(url);
	}

	public static void navigateBack() {
		driver.navigate().back();
	}

	public static void navigateForward() {
		driver.navigate().forward();
	}

	public static void refresh() {
		driver.navigate().refresh();
	}

	public static void confirmAlert() {
		driver.switchTo().alert().accept();
		driver.switchTo().defaultContent();
	}

	public static void dismissAlert() {
		driver.switchTo().alert().dismiss();
		driver.switchTo().defaultContent();
	}

	public static void promptAlert(String key) {
		driver.switchTo().alert().sendKeys(key);
		driver.switchTo().alert().accept();
		driver.switchTo().defaultContent();
	}

	public static void dropDown(WebElement element, String type, String value) {
		Select s = new Select(element);
		if (type.equalsIgnoreCase("selectbyvalue")) {
			s.selectByValue(value);
		} else if (type.equalsIgnoreCase("selectbyindex")) {
			int index = Integer.parseInt(value);
			s.selectByIndex(index);
		} else if (type.equalsIgnoreCase("selectbyvisibletext")) {
			s.selectByVisibleText(value);
		}
	}

	public static void getActionsMethod(WebElement element, String action) {
		Actions a = new Actions(driver);
		if (action.equalsIgnoreCase("rightclick")) {
			a.contextClick(element).build().perform();
		} else if (action.equalsIgnoreCase("click")) {
			a.click(element).build().perform();
		} else if (action.equalsIgnoreCase("movetoelement")) {
			a.moveToElement(element).build().perform();
		} else if (action.equalsIgnoreCase("doubleclick")) {
			a.doubleClick(element).build().perform();
		}
	}

	public static void switchToFrame(WebElement element) {
		driver.switchTo().frame(element);
	}

	public static String getWindowHandle() {
		String id = driver.getWindowHandle();
		return id;
	}

	public static Set<String> getWindowHandles() {
		Set<String> ids = driver.getWindowHandles();
		return ids;
	}

	public static String getTitle() {
		String title = driver.getTitle();
		return title;
	}

	public static String getCurrentUrl() {
		String url = driver.getCurrentUrl();
		return url;
	}

	public static String getText(WebElement element) {
		String text = element.getText();
		return text;
	}

	public static String getAttribute(WebElement element, String name) {
		String attribute = element.getAttribute(name);
		return attribute;
	}

	public static void clickOnElement(WebElement element) {
		element.click();
	}

	public static void sendValue(WebElement element, String value) {
		element.sendKeys(value);
	}

	public static List<WebElement> getOptions(WebElement element) {
		Select s = new Select(element);
		List<WebElement> options = s.getOptions();
		return options;
	}

	public static List<WebElement> getAllSelectedOptions(WebElement element) {
		Select s = new Select(element);
		List<WebElement> options = s.getAllSelectedOptions();
		return options;
	}

	public static WebElement getFirstSelectedOption(WebElement element) {
		Select s = new Select(element);
		WebElement option = s.getFirstSelectedOption();
		return option;
	}

	public static boolean isMultiple(WebElement element) {
		Select s = new Select(element);
		boolean value = s.isMultiple();
		return value;
	}

	public static void clear(WebElement element) {
		element.clear();
	}

	public static WebDriver quit() {
		driver.quit();
		return driver;
	}

	public static void takeScreenShot(String filename) throws IOException {
		TakesScreenshot ss = (TakesScreenshot) driver;
		File source = ss.getScreenshotAs(OutputType.FILE);
		File destination = new File(filename);
		Files.copy(source, destination);
	}

	public static boolean isEnabled(WebElement element) {
		boolean is = element.isEnabled();
		return is;
	}

	public static boolean isDisplayed(WebElement element) {
		boolean is = element.isDisplayed();
		return is;
	}

	public static boolean isSelected(WebElement element) {
		boolean is = element.isSelected();
		return is;
	}

	public static void radioButton(WebElement element) {
		element.click();
	}

	public static void scrollOnElement(WebElement element) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].scrollIntoView()", element);
	}

	public static void waitforElementVisibility(WebElement element, int seconds) {
		WebDriverWait wb = new WebDriverWait(driver, seconds);
		wb.until(ExpectedConditions.visibilityOf(element));
	}

	public static void implicitWait(int seconds) {
		driver.manage().timeouts().implicitlyWait(seconds, TimeUnit.SECONDS);
	}

	public static void robotActions(String action) throws AWTException {
		Robot r = new Robot();
		if (action.equalsIgnoreCase("toenter")) {
			r.keyPress(KeyEvent.VK_ENTER);
			r.keyRelease(KeyEvent.VK_ENTER);

		}
	}

	static String value;

	public static String readDatafromsheet(String path, String sheetname, int row, int cell) throws IOException {
		File f = new File(path);
		FileInputStream fis = new FileInputStream(f);
		Workbook wb = new XSSFWorkbook(fis);
		org.apache.poi.ss.usermodel.Sheet sheetAt = wb.getSheet(sheetname);
		Row r = sheetAt.getRow(row);
		Cell c = r.getCell(cell);
		CellType cellType = c.getCellType();
		if (cellType.equals(CellType.STRING)) {
			value = c.getStringCellValue();
		} else if (cellType.equals(CellType.NUMERIC)) {
			double numericCellValue = c.getNumericCellValue();
			int data = (int) numericCellValue;
			value = Integer.toString(data);
		}
		return value;
	}

}
