package Cucumber.Libraries;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.Alert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Select;

public class BaseTest extends Utilities {

	protected static WebDriver driver;
	/**
	 * make the driver as static for different classes if driver not null in the class
	 */
	protected WebDriver getDriver() {

		if (driver == null) {
			driver = new FirefoxDriver();
			driver.manage().window().maximize();
		}

		return driver;
	}

	/**
	 * Type value in given webelement field
	 * 
	 * @param webelement
	 * @param value
	 * @throws InterruptedException 
	 */

	public void type(WebElement key, String value) throws InterruptedException {
		if (key.isDisplayed()) {
			key.sendKeys(value);
		} else {
			assert false : "Element is not found";
		}
	}

	/**
	 * Type value in given webelement field using JavaScript Executor
	 * 
	 * @param WebDriver
	 * @param webelement
	 * @param value
	 * @throws InterruptedException 
	 */

	public void JavaScripttype(WebElement key, String value) throws InterruptedException {
		if (key.isDisplayed()) {
			JavascriptExecutor jse = ((JavascriptExecutor) driver);
			jse.executeScript("arguments[0].value='"+value+"';", key);
		} else {
			assert false : "Element is not found";
		}
	}

	/**
	 * Click on the given webelement field
	 * 
	 * @param webelement
	 * @throws InterruptedException 
	 */

	public void click(WebElement key) {

		if (key.isDisplayed()) {
			key.click();
		} else {
			assert false : "Element is not found";
		}
	}

	/**
	 * Click on the given webelement field using JavaScript Executor
	 * @param WebDriver
	 * @param webelement
	 * @throws InterruptedException 
	 */

	public void JavaScriptclick(WebElement key) {

		if (key.isDisplayed()) {
			JavascriptExecutor jse=(JavascriptExecutor)driver;
			jse.executeScript("arguments[0].click();",key);
		} else {
			assert false : "Element is not found";
		}
	}

	/**
	 * Click on the given maskedit textboxes webelement field and send the data into the WebElement Field
	 * maskedit textboxes (Phone Number, Zip etc......)
	 * @param webelement
	 * @param String
	 * @throws InterruptedException 
	 */

	public void clickandtype(WebElement key, String value) {

		if (key.isDisplayed()) {
			key.click();
			key.sendKeys(value);
		} else {
			assert false : "Element is not found";
		}
	}

	/**
	 * Get innerText of given webelement from html doc
	 * 
	 * @param key
	 * @return visible inner html text
	 */

	public String getText(WebElement key) {

		if (key.isDisplayed()) {
			key.getText();
		} else {
			assert false : "Element is not found";
		}
		return key.isDisplayed() ? key.getText() : null;
	}

	/**
	 * Get Attribute name based on id, name, class, value of given webelement from html doc
	 * 
	 * @param key
	 * @param String
	 * @return visible inner html text
	 */

	public String getAttribute(WebElement key, String AttributeName) {

		if (key.isDisplayed()) {
			key.getAttribute(AttributeName);
		} else {
			assert false : "Element is not found";
		}
		return key.isDisplayed() ? key.getAttribute(AttributeName) : null;
	}

	/**
	 * Verify the given webelement field every 5 secs and if exits skip the remaining time and continue else loop will iterate until given time ends..
	 * 
	 * @param int
	 * @param WebDriver
	 * @param WebElement
	 * @return visible inner html text
	 */

	protected void waitForElement(int timeout, final WebDriver aDriver,
			final WebElement element) {
		FluentWait<WebDriver> wait = new FluentWait<WebDriver>(aDriver).withTimeout(
				60, TimeUnit.SECONDS).pollingEvery(5, TimeUnit.SECONDS);

		ExpectedCondition<Boolean> expectation = new ExpectedCondition<Boolean>() {
			@Override
			public Boolean apply(WebDriver aDriver) {
				return element.isDisplayed();
			}
		};
		try {
			wait.until(expectation);
		} catch (Throwable error) {
			error.getMessage();
		}
	}

	/**
	 * Verifying the webelement field using isDisplayed method
	 * @param WebDriver
	 * @param webelement
	 * @throws InterruptedException 
	 */

	public boolean VerifyObject(final WebDriver aDriver, WebElement element) throws Exception {
		try {
			aDriver.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);
			if (element.isDisplayed())
				;
			return true;
		} catch (NoSuchElementException e) {
			return false;
		}
	}

	/**
	 * Clear the input value from webelement field
	 * @param webelement
	 * @throws InterruptedException 
	 */

	public void clear(final WebElement key) {
		if (key.isDisplayed()) {
			key.clear();
		} else {
			assert false : "Element is not found";
		}
	}

	/**
	 * Select value in given webelement field
	 * 
	 * @param webelement
	 * @param value
	 */

	public void selectByValue(final WebElement key, final String value) {
		if (key.isDisplayed()) {
			new Select(key).selectByVisibleText(value);
			;
		} else {
			assert false : "Element is not found";
		}
	}

	/**
	 * Switch to the Frame based on the id or name
	 * 
	 * @param WebDriver
	 * @param String
	 */

	public void switchToFrame(String frameName) {
		driver.switchTo().frame(frameName);
	}

	/**
	 * Switch to the Frame based on the frame index
	 * 
	 * @param WebDriver
	 * @param int
	 */

	public void switchToFrame(int frameindex) {
		driver.switchTo().frame(frameindex);
	}

	/**
	 * Switch to the Frame based on the WebElement field
	 * 
	 * @param WebDriver
	 * @param WebElement
	 */

	public void switchToFrame(WebElement frameName) {
		driver.switchTo().frame(frameName);
	}

	/**
	 * Switch to the default Content
	 * 
	 * @param WebDriver
	 */

	public void switchToMain() {
		driver.switchTo().defaultContent();
	}

	/**
	 * Switch to the Alert window and then Accept
	 * 
	 * @param WebDriver
	 */

	public void switchToAlertAccept() {
		Alert alert=driver.switchTo().alert();
		alert.accept();
	}	

	/**
	 * Switch to the Alert window and then Dismiss
	 * 
	 * @param WebDriver
	 */

	public void switchToAlertDismiss() {
		Alert alert=driver.switchTo().alert();
		alert.dismiss();
	}

	/**
	 * Switch to the Alert Prompt box and then type value and Accept
	 * 
	 * @param WebDriver
	 * @param String
	 */

	public void switchToAlertPrompttypeandAccept(String value) {
		Alert alert=driver.switchTo().alert();
		alert.sendKeys(value);
		alert.accept();
	}

	/**
	 * Return true if alert present else return false
	 * 
	 * @param WebDriver
	 */

	public boolean isAlertPresent() {

		try {
			driver.switchTo().alert();		   
			return true;		 
		} catch (Exception e) {
			return false;
		}
	}

	/**
	 * if condition to compare expected and actual
	 * 
	 * @param String expected
	 * @param String actual
	 */

	public void ifcondition(String expected, String actual) {

		if (expected.equals(actual)) {

			System.out.println("expected matches with actual");
		}
	}

	/**
	 * Switch to the child window from parent window
	 * 
	 * @param String
	 * @param WebDriver
	 */

	public void switchToChildWindow(String parentHandler) {

		for (String winHandle : driver.getWindowHandles()) {
			if (!winHandle.equals(parentHandler)) {
				driver.switchTo().window(winHandle);
			}
		}
	}

	/**
	 * Close the Child Window and Switch to the Parent Window
	 * 
	 * @param String
	 * @param WebDriver
	 */

	public void switchTomainWindow(String parentHandler) {

		driver.close();
		driver.switchTo().window(parentHandler);
	}

	public static void getCurrentDriver() {

		driver=new FirefoxDriver();
		driver.manage().window().maximize();	
	}

	public static void loadPage(String URL) {
		driver.get(URL);
	}

	public static void quitCurrentDriver() {
		driver.quit();
	}

}
