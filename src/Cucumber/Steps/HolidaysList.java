package Cucumber.Steps;

import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import Cucumber.Libraries.BaseTest;
import Cucumber.PageObjects.HolidaysListPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HolidaysList extends BaseTest {

	public HolidaysList() throws Exception {
		super();
	}

	HolidaysListPage HLP=PageFactory.initElements(getDriver(), HolidaysListPage.class);

	@When("^user click on Holiday List link$")
	public void user_click_on_Holiday_List_link() throws Throwable {
		click(HLP.holidaysList);
	}

	@And("^It should navigate to the Holiday List Page$")
	public void it_should_navigate_to_the_Holiday_List_Page() throws Throwable {
		waitForElement(driver, "//div[text()='Holiday list']");
		VerifyObject(HLP.holidayListlabel);
	}

	@Then("^user select the Location as \"([^\"]*)\" and Period as \"([^\"]*)\"$")
	public void user_select_the_Location_as_and_Period_as(String Location, String Year) throws Throwable {
		waitForElement(driver, "//div[text()='Holiday list']");
	/*	selectByValue(HLP.location, Location);
		selectByValue(HLP.year, Year)*/;
		type(HLP.location, Location);
		type(HLP.year, Year);
	}

	@Then("^verify the list of Holidays for Prime$")
	public void verify_the_list_of_Holidays_for_Prime() throws Throwable {
		int tablecount=HLP.holidayListgrid.size();
		System.out.println("List of Holidays to the Prime for India is :"+tablecount);
		Assert.assertEquals(tablecount, 10);
	}

	@And("^Verfiy the Uagdi festival in Holiday List for India$")
	public void verfiy_the_Uagdi_festival_in_Holiday_List_for_India_and_Christmas_for_US() throws Throwable {
		VerifyObject(HLP.ugadiFestival);
	}
}
