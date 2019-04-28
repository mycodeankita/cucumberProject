package stepdefin;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AtitudeTest {

	@When("^I meet ([^\"]*)$")
	public  void Imeet(String str) {
		if (str.equals("Watchman"))
		{
			System.out.println("Watchman automate");
		}
		if (str.equals("Shopkeeper"))
		{
			System.out.println("he meets Shopkeeper automate");
			//can write he selenium code
		}
	
	}
	@Given("^I work in ([^\"]*)$")
	public void ln(String str) {
		if (str.equals("lateNight"))
		{
			System.out.println("he works late automate");
		}
		if (str.equals("Mornings"))
		{
			System.out.println("he works in morning automate");
		}
	}
	
	@Given("^We work in ([^\"]*)$")
	public void given1(String str) {
		if (str.equals("Mornings"))
		{
			System.out.println("Morning automate");
		}
	}
	@Then("^I ([^\"]*) him$")
	public void validate1(String str) {
		if (str.equals("greet"))
		{
			System.out.println("good attitude automate");
		}
		if (str.equals("skipGreeting"))
		{
			System.out.println("bad attitude automate");
		}
		
	}
	
	
}
