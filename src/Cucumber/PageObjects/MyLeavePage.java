package Cucumber.PageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class MyLeavePage {
	
	@FindBy(id="ancMyLeave")
	public WebElement MyLeave;
	
	@FindBy(xpath="//p[contains(text(),'Venkata Reddy Kandula')]")
	public WebElement Avatarname;
	
	@FindBy(xpath="//div[1]/div[2]/div/div[2]/div[1]/div/div[1]/div/div[2]/div/div[1]/select")
	public WebElement LeaveinPast;

}
