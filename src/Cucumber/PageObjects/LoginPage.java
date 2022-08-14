package Cucumber.PageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage {

	@FindBy(id="UserName")
	public WebElement USERNAME;

	@FindBy(id="Password")
	public WebElement PASSWORD;

	@FindBy(id="btnSubmit")
	public WebElement LOGIN;

	@FindBy(xpath="//a[contains(text(),'Hi')]")
	public WebElement ACCOUNTICON;

	@FindBy(xpath="//a[contains(text(),'Logout')]")
	public WebElement Logout;

	@FindBy(xpath="//p[contains(text(),'Time Tracking System')]")
	public WebElement Timetracksystem;

}
