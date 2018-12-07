Feature("Select option in Material-UI");

Scenario("Test select option", I => {
  I.amOnPage("/");
  I.click("Super Secret Password");
  I.see("1-2-3-4-5");
  I.selectOption("gender", "Female");
  I.wait(3);
  I.click("OK");
});
