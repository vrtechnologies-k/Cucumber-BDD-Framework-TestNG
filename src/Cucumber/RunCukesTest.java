package Cucumber;

import java.io.File;
import java.util.HashMap;
import java.util.Map;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import com.cucumber.listener.ExtentCucumberFormatter;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.TestNGCucumberRunner;

@CucumberOptions(features={"Features/Ecommerce"},glue={"Cucumber/Steps"},monochrome=true,tags={"@Smoke"},plugin = {"pretty", "html:target/cucumber","com.cucumber.listener.ExtentCucumberFormatter"})

public class RunCukesTest {
	
	@BeforeClass
	public static void setup() throws Exception {
		
		ExtentCucumberFormatter.initiateExtentCucumberFormatter();
		File directory=new File(".//");
		ExtentCucumberFormatter.loadConfig(new File(directory.getCanonicalPath()+"//config//extent-config.xml"));
		
		ExtentCucumberFormatter.addSystemInfo("Browser Name", "Chrome");
		
		ExtentCucumberFormatter.addSystemInfo("Browser Version", "51.0.2704.103");
		
		ExtentCucumberFormatter.addSystemInfo("Selenium Version", "2.48.2");
		
		Map<String, String> systemInfo = new HashMap<String, String>();
		systemInfo.put("Cucumber version", "v1.2.3");
		systemInfo.put("Extent Cucumber Reporter version", "v1.1.0");
		ExtentCucumberFormatter.addSystemInfo(systemInfo);
}
	
	@Test(groups = "Cucumber", description = "TestNGCucumberRunner to invoke Cucumber")
    public void runCukes() {
        new TestNGCucumberRunner(getClass()).runCukes();
    }

}
