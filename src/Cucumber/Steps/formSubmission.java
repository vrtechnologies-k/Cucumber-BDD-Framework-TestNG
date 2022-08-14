package Cucumber.Steps;

import java.util.List;

import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import Cucumber.Libraries.BaseTest;
import Cucumber.PageObjects.HomePage;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class formSubmission extends BaseTest{
	
	public formSubmission() throws Exception{
		
		super();
	}
	
	HomePage homePage = PageFactory.initElements(getDriver(), HomePage.class);
	
	
	@When("^user enter the mandatory details$")
	public void user_enter_the_mandatory_details(DataTable testdata) throws Throwable {
	 
		List<List<String>> data = testdata.raw();
		
		type(homePage.nameEditBox, data.get(0).get(0));
		type(homePage.emailEditBox, data.get(0).get(1));
		type(homePage.passwordEditBox, data.get(0).get(2));
		click(homePage.checkBox);
		selectByValue(homePage.select, data.get(0).get(3));
		click(homePage.radiobtn);
		type(homePage.DOB, data.get(0).get(4));
		
		//String alertmsg =getText(homePage.alertMessage);
	}

	@And("^clicked on submit button$")
	public void clicked_on_submit_button() throws Throwable {
	
		click(homePage.submitBtn);
	}

	@Then("^validate the form submission successfully$")
	public void validate_the_form_submission_successfully() throws Throwable {
	
		Assert.assertTrue(homePage.alertMessage.isDisplayed());
	
	}


	
	
	

}
