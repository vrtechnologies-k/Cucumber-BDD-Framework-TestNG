package Cucumber.PageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ApplyLeavePage {
	
	@FindBy(id="ancApplyleave")
	public WebElement Applyleave;
	
	@FindBy(id="ddlLeaveType")
	public WebElement Leavetype;
	
	@FindBy(id="txtStartDate")
	public WebElement startDatecal;
	
	@FindBy(xpath="//a[contains(text(),'29')]")
	public WebElement startdate;
	
	@FindBy(id="txtEndDate")
	public WebElement endDatecal;
	
	@FindBy(xpath="//a[contains(text(),'30')]")
	public WebElement enddate;
	
	@FindBy(tagName="textArea")
	public WebElement reasonRequest;
	
	@FindBy(name="CurrentProject")
	public WebElement currentProject;
	
	@FindBy(name="PrimaryLead")
	public WebElement reportingLeadID;
	
	@FindBy(xpath="//input[@value='View']")
	public WebElement viewBtn;
	
	@FindBy(xpath="//input[@value='Cancel']")
	public WebElement cancelBtn;
	
	@FindBy(xpath="//div[3]/div[5]/div[2]")
	public WebElement leaveType;
	
}
