package Cucumber.Steps;

import org.openqa.selenium.support.PageFactory;
import Cucumber.Libraries.BaseTest;
import Cucumber.PageObjects.MytimesheetPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class MytimeSheet extends BaseTest {
	
	public MytimeSheet() throws Exception {
		super();
	}
	
	MytimesheetPage MTP=PageFactory.initElements(getDriver(), MytimesheetPage.class);
	
	
	@When("^user click on My timesheet Leave link$")
	public void user_click_on_My_timesheet_Leave_link() throws Throwable {
	   click(MTP.mytimeSheet);
	}

	@Then("^It should navigate to the My timesheet Page$")
	public void it_should_navigate_to_the_My_timesheet_Page() throws Throwable {
	   waitForElement(60, driver, MTP.timeSheetlabel);
	   VerifyObject(MTP.timeSheetlabel);
	}

	@And("^user click on the Add row button$")
	public void user_click_on_the_Add_row_button() throws Throwable {
	   JavaScriptclick(MTP.addRow);
	}

	@Then("^user verify the list of projects and activities$")
	public void user_verify_the_list_of_projects_and_activities() throws Throwable {
		int pndcnt=MTP.projectNamedd.size();
		int pnacnt=MTP.projectActivitydd.size();
		Assert.assertEquals(pndcnt, 2);
		Assert.assertEquals(pnacnt, 28);
	}

	@And("^user click on the cancel button$")
	public void user_click_on_the_cancel_button() throws Throwable {
	    click(MTP.cancelBtn);
	}


}
