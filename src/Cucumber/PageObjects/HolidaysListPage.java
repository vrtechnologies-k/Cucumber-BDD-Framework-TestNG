package Cucumber.PageObjects;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;

public class HolidaysListPage {
	
	@FindBy(id="ancHolidayList")
	public WebElement holidaysList;
	
	@FindBy(xpath="//div[text()='Holiday list']")
	public WebElement holidayListlabel;
	
	@FindBy(xpath="//div[2]/div[1]/div[2]/select")
	public WebElement location;
	
	@FindBy(xpath="//div[2]/div[1]/div[4]/select")
	public WebElement year;
	
	@FindBys({
		
		@FindBy(xpath="//table/tbody/tr"),
	})

	public List<WebElement> holidayListgrid;
	
	@FindBy(xpath="//table/tbody/tr/td/span[contains(text(),'Ugadi')]")
	public WebElement ugadiFestival;
}
