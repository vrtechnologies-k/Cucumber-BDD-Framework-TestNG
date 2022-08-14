package Cucumber.PageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage {
	
	@FindBy(xpath="//input[@id='UserName']")
	public WebElement USERNAME;
	
	@FindBy(xpath="//input[@id='Password']")
	public WebElement PASSWORD;
	
	@FindBy(xpath="//button[@type='submit']")
	public WebElement LOGIN;
	
	@FindBy(xpath="//a/i[contains(text(),'account')]")
	public WebElement ACCOUNTICON;
	
	@FindBy(xpath=".//*[@id='logout123']")
	public WebElement Logout;
	
	@FindBy(xpath="//h1[contains(text(),'User Login')]")
	public WebElement UserLogin;

}
