package Cucumber.PageObjects;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;

public class MytimesheetPage {
	
	@FindBy(id="ancTimesheetMgmt")
	public WebElement mytimeSheet;
	
	@FindBy(xpath="//div[contains(text(),'Timesheet')]")
	public WebElement timeSheetlabel;
	
	@FindBy(xpath="//input[@value='Add Row']")
	public WebElement addRow;
	
	@FindBys({
		
		@FindBy(id="drpProjectName")
	})

	public List<WebElement> projectNamedd;
	
	@FindBys({
		
		@FindBy(id="drpProjectActivity")
	})
	public List<WebElement> projectActivitydd;
	
	@FindBy(xpath="//div[3]/div[3]/input[8]")
	public WebElement cancelBtn;
}
