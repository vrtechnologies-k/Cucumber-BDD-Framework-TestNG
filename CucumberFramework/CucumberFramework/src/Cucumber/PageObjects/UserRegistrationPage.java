package Cucumber.PageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class UserRegistrationPage {
	
	@FindBy(xpath="//span[text()='Invite Users']")
	public WebElement InviteUserslink;
	
	@FindBy(xpath="//a[contains(text(),'Invite User')]")
	public WebElement InviteUserBtn;
	
	@FindBy(xpath="//select[@name='Role']")
	public WebElement Role;
	
	@FindBy(xpath="//input[@name='FirstName']")
	public WebElement Firstname;

	@FindBy(xpath="//input[@name='LastName']")
	public WebElement Lastname;
	
	@FindBy(xpath="//input[@name='Email']")
	public WebElement email;
	
	@FindBy(xpath="//input[@name='Phone']")
	public WebElement phone;
	
	@FindBy(xpath="//button[contains(text(),'Send Invite')]")
	public WebElement Sendinvite;
	
	@FindBy(xpath="//p[3]/a")
	public WebElement UserCreatedlink;
	
	@FindBy(xpath="//input[@id='UserName']")
	public WebElement Username;
	
	@FindBy(xpath="//input[@id='Password']")
	public WebElement Password;
	
	@FindBy(xpath="//input[@id='PasswordConfirm']")
	public WebElement confirmPassword;
	
	@FindBy(xpath=".//*[@id='AcceptedTerms']")
	public WebElement termsofService;
	
	@FindBy(xpath="//button[contains(text(),'Complete')]")
	public WebElement Complete;
	
	
	
	
	
	
	

}
