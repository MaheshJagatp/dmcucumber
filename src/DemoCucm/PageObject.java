package DemoCucm;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class PageObject {
	public WebDriver driver;
	public void website() {
	System.setProperty("webdriver.chrome.driver","C:\\chromedriver.exe");
	
	 driver = new ChromeDriver();
	
	driver.get("http://way2automation.com/way2auto_jquery/index.php");
	}

	
	public void signin(String username,String password) throws InterruptedException {
		Thread.sleep(5000l);
		driver.findElement(By.xpath("//div[@id=\"load_box\"]/form/div/div/p/a")).click();
		driver.findElement(By.xpath("//*[@id=\"login\"]/form/fieldset[1]/input")).sendKeys(username);
		driver.findElement(By.xpath("//*[@id=\"login\"]/form/fieldset[2]/input")).sendKeys(password);
		System.out.println("fill signin");
		
		
	}
	public void submit() {
		System.out.println("in submit");
		driver.findElement(By.xpath("//*[@id=\"login\"]/form/div/div[2]")).click();
		
	}



}
