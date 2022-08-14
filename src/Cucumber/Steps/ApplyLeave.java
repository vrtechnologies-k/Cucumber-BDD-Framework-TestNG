package Cucumber.Steps;

import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import Cucumber.Libraries.BaseTest;
import Cucumber.PageObjects.ApplyLeavePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ApplyLeave extends BaseTest {
	
	public ApplyLeave() throws Exception {
		super();
	}
	
	ApplyLeavePage ALP=PageFactory.initElements(getDriver(), ApplyLeavePage.class);
	
	@When("^user click on Apply Leave link$")
	public void user_click_on_Apply_Leave_link() throws Throwable {
	  JavaScriptclick(ALP.Applyleave);
	}

	@When("^It should navigate to the Apply Leave Page$")
	public void it_should_navigate_to_the_Apply_Leave_Page() throws Throwable {
		 Assert.assertEquals(driver.getTitle(), "Apply leave");
	}

	@Then("^user enter all the mandatory fields$")
	public void user_enter_all_the_mandatory_fields() throws Throwable {
	    
		selectByValue(ALP.Leavetype, "Casual");
		click(ALP.startDatecal);
		click(ALP.startdate);
		Thread.sleep(3000);
		click(ALP.endDatecal);
		click(ALP.enddate);
		Thread.sleep(3000);
		type(ALP.reasonRequest, "Going to home town");
		type(ALP.currentProject, "Vertex");
		type(ALP.reportingLeadID, "sudheerb@primetgi.com");
	}

	@Then("^user click on the view button$")
	public void user_click_on_the_view_button() throws Throwable {
	   click(ALP.viewBtn);
	}

	
	@Then("^user verify the leave type$")
	public void user_verify_the_leave_type() throws Throwable {
		if (getText(ALP.leaveType).trim().equalsIgnoreCase("Leave Type: Casual")) {
			System.out.println("Expected and Actual leave type match");
		}
	}
	@And("^Click on the cancel button$")
	public void click_on_the_cancel_button() throws Throwable {
	 waitForElement(60, driver, ALP.cancelBtn);
		click(ALP.cancelBtn);
	}
	
}
