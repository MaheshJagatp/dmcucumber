package DemoCucm;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;



public class Demo extends PageObject {
	
	@Before
	public void setUp(){ 
	   
	 }
	
	
	
	public PageObject pg=new PageObject();
	@Given("^Navigate to site$")
	public void Navigate_to_site() {

		pg.website();
		Assert.fail();
		
		
	}
	
	@And ("^I fill registration form$")
	public void I_fill_registration_form() throws InterruptedException {
		
		
	}
	
	@Then ("^I clicked on submit button$")
	public void I_clicked_on_submit_button() {
		//pg.submit();
		Assert.fail();
		
	}
	
	
	@After
	public void closeup(Scenario scenario) throws IOException{ 
		
		if (scenario.isFailed()) {
		      // Take a screenshot...
		    /*  File ss = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
		    FileUtils.copyFile(ss, new File("C:\\Users\\Mahesh\\Desktop\\Screenshot\\image/png"));
		    }*/
			
			
			 final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
		      scenario.embed(screenshot, "C:\\Users\\Mahesh\\Desktop\\Screenshot\\image.png"); // ... and embed it in the report.
		    }
	   
	 }

}
