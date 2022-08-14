package Cucumber.JunitRunner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

 @Cucumber.Options(features="Features", glue="Cucumber\\Steps", format={"pretty","html:CucumberHTMLReport", "json:Cucumber.json"})

public class TestRunner {

}
