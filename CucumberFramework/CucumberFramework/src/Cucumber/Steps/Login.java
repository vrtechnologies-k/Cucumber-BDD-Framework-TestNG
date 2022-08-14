package Cucumber.Steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import Cucumber.Libraries.BaseTest;
import Cucumber.PageObjects.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login extends BaseTest {

	WebDriver driver=getDriver();
	LoginPage LP=PageFactory.initElements(driver, LoginPage.class);


	@Given("^user navigates to \"([^\"]*)\"$")
	public void user_navigates_to_websiteUrl(String URL) throws Exception {
		addLables();
		try {
			driver.get(URL);
			resultwriteScenario("About Login Functionality", "user navigates to "+URL+"");
		} catch (Exception e) {
			resultwriteScenario("About Login Functionality", "user not navigates to "+URL+"", e.getMessage(), driver, "UserNavigation");
		}

	}

	@When("^user logs in using \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_logs_in_using_UserName_Password(String UserName, String Password) throws Exception{
		try {
			type(LP.USERNAME, UserName);
			type(LP.PASSWORD, Password);
			resultwriteSteps("user logs in using "+UserName+" and "+Password+"");
		}catch(Exception e) {
			resultwriteSteps("user not logs in using "+UserName+" and "+Password+"", driver, e.getMessage(), "UserLogs");
		}

	}

	@And("^clicked on login button$")
	public void clicked_on_login_button() throws Exception {
		try {
			click(LP.LOGIN);
			resultwriteSteps("clicked on login button");
		}catch(Exception e) {
			resultwriteSteps("user not clicked on login button", driver, e.getMessage(), "ClickLogin");
		}
	}

	@Then("^login should be successful$")
	public void login_should_be_successful() throws Exception{
		try {
			waitForElement(60, driver, LP.ACCOUNTICON);
			VerifyObject(driver, LP.ACCOUNTICON);
			resultwriteSteps("login should be successful");
			RowNo=RowNo+1;
		}catch(Exception e) {
			resultwriteSteps("login not successful", driver, e.getMessage(), "LoginAccountIcon");
			RowNo=RowNo+1;
		}
	}

}
