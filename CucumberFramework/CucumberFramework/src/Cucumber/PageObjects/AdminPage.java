package Cucumber.PageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AdminPage {
	
	@FindBy(xpath="//span[text()='Dashboard']")
	public WebElement DashBoard;
	
	@FindBy(xpath="//span[text()='Lookup Tax Rates']")
	public WebElement Taxrates;
	
	@FindBy(xpath="//span[text()='Manage SMB Customers']")
	public WebElement ManageSMBCustomers;
	
	@FindBy(xpath="//span[text()='Metrics']")
	public WebElement Metrics;
	
	@FindBy(xpath="//span[text()='Customer ID Report']")
	public WebElement CustomerIDReport;
	
	@FindBy(xpath="//span[text()='Document Center']")
	public WebElement DocumnetCenter;
	
	@FindBy(xpath="//span[text()='Invite Users']")
	public WebElement InviteUsers;
	
	@FindBy(xpath="//span[text()='Premium SMB Customers']")
	public WebElement PremiumSMBCustomers;
	
	@FindBy(xpath="//span[text()='Vertex SMB VARS']")
	public WebElement VertexSMBVars;
	
	@FindBy(xpath="//span[text()='Inline Help Editor']")
	public WebElement InlineHelpEditor;	

	@FindBy(xpath="//span[text()='Update Notification']")
	public WebElement Updatenotification;
	
	@FindBy(xpath="//span[text()='Manage Configuration']")
	public WebElement ManageConfiguration;
	
	@FindBy(xpath="//span[text()='Manage Tax Calendar']")
	public WebElement ManagetaxCalndar;
	
	@FindBy(xpath="//span[text()='Error Monitor']")
	public WebElement Errormonitor;
	
	@FindBy(xpath="//span[text()='Visit Help Center']")
	public WebElement HelpCenter;

}


