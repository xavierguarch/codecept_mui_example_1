Feature("Basic tests with Material-UI");

Scenario("Test open dialog", I => {
  I.amOnPage("/");
  I.click("Super Secret Password");
  I.see("1-2-3-4-5");
});
