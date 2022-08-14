package Cucumber.Steps;

import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import Cucumber.Libraries.BaseTest;
import Cucumber.PageObjects.LoginPage;
import Cucumber.PageObjects.MyLeavePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyLeave extends BaseTest {

	public MyLeave() throws Exception {
		super();
	}

	LoginPage LP=PageFactory.initElements(getDriver(), LoginPage.class);
	MyLeavePage MLP=PageFactory.initElements(getDriver(), MyLeavePage.class);

	@Given("^user navigates to \"([^\"]*)\"$")
	public void user_navigates_to_websiteUrl(String URL) throws Exception {
			getURL(URL);
	}

	@When("^user logs in using \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_logs_in_using_UserName_Password(String UserName, String Password) throws Exception{
			type(LP.USERNAME, UserName);
			type(LP.PASSWORD, Password);
	}

	@And("^clicked on login button$")
	public void clicked_on_login_button() throws Exception {
			click(LP.LOGIN);
	}

	@Then("^login should be successful$")
	public void login_should_be_successful() throws Exception{
	
			waitForElement(driver, "//a[contains(text(),'Hi')]");
			VerifyObject(LP.ACCOUNTICON);
	}
	
	@When("^user click on My Leave link$")
	public void user_click_on_My_Leave_link() throws Throwable {
		JavaScriptclick(MLP.MyLeave);
		//click(MLP.MyLeave);
	}

	@And("^It should navigate to the My Leave Page$")
	public void it_should_navigate_to_the_My_Leave_Page() throws Throwable {
	    Assert.assertEquals(driver.getTitle(), "My leave");
	}

	@Then("^user verfiy the user of the account$")
	public void user_verfiy_the_user_of_the_account() throws Throwable {
		waitForElement(driver, "//p[contains(text(),'Venkata Reddy Kandula')]");
		VerifyObject(MLP.Avatarname);
	}

	@Then("^user select the leave availabled in last months$")
	public void user_select_the_leave_availabled_in_last_months() throws Throwable {
	   selectByValue(MLP.LeaveinPast, "6");
	}

	
	@When("^user click on Account icon$")
	public void user_click_on_Account_icon() throws Exception {
		Thread.sleep(5000);	
		click(LP.ACCOUNTICON);
	}

	@And("^user click on Logout button$")
	public void user_click_on_Logout_button() throws Exception {
			click(LP.Logout);
	}

	@Then("^user logout successfully$")
	public void user_logout_successfully() throws Exception {
			VerifyObject(LP.Timetracksystem);
	}

	@Then("^user close the browser$")
	public void user_close_the_browser() throws Exception {
		
		quitDriver();
	}
	
	@Given("^user navigate to facebook website$")
	public void user_navigate_to_facebook_website() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^user validate the homepage title$")
	public void user_validate_the_homepage_title() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^user enter the username$")
	public void user_enter_the_username() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@And("^user enter the password$")
	public void user_enter_the_password() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^user should be successfully logged in$")
	public void user_should_be_successfully_logged_in() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}


}
