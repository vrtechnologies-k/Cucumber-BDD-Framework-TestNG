package Cucumber.Steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import Cucumber.Libraries.BaseTest;
import Cucumber.PageObjects.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class Logout extends BaseTest {

	WebDriver driver=getDriver();

	LoginPage LP=PageFactory.initElements(driver, LoginPage.class);

	@When("^user click on Account icon$")
	public void user_click_on_Account_icon() throws Exception {
		addLables();
		try {
			click(LP.ACCOUNTICON);
			resultwriteScenario("About Logout Functionality", "user clicked on Account icon");
		} catch (Exception e) {
			resultwriteScenario("About Logout Functionality", "user not clicked on Account icon", e.getMessage(), driver, "ClickAccountIcon");	
		}

	}

	@And("^user click on Logout button$")
	public void user_click_on_Logout_button() throws Exception {
		try {
			click(LP.Logout);
			resultwriteSteps("user click on Logout button");
		}catch(Exception e) {
			resultwriteSteps("user not clicked on Logout button", driver, e.getMessage(), "ClickLogout");
		}

	}

	@Then("^user logout successfully$")
	public void user_logout_successfully() throws Exception {
		try {
			VerifyObject(driver, LP.UserLogin);
			resultwriteSteps("user logout successfully");
		}catch(Exception e) {
			resultwriteSteps("user not logout successfully", driver, e.getMessage(), "LogoutFailure");
		}

	}

	@Then("^user close the browser$")
	public void user_close_the_browser() throws Exception {
		try {
			driver.quit();
			resultwriteSteps("user close the browser");
			RowNo=RowNo+1;
			resultWritebook.write();
			resultWritebook.close();
		}catch(Exception e) {
			resultwriteSteps("user not close the browser", driver, e.getMessage(), "closebrowser");
			resultWritebook.write();
			resultWritebook.close();
		}
	}

}
