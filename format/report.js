$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DemoCucm\\Demo.feature");
formatter.feature({
  "line": 1,
  "name": "Way 2 Automation",
  "description": "",
  "id": "way-2-automation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 115467,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Reg page of way 2 automation",
  "description": "",
  "id": "way-2-automation;reg-page-of-way-2-automation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Navigate to site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I fill registration form",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I clicked on submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "Demo.Navigate_to_site()"
});
formatter.result({
  "duration": 11019740093,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.fail(Assert.java:64)\r\n\tat DemoCucm.Demo.Navigate_to_site(Demo.java:34)\r\n\tat ✽.Given Navigate to site(DemoCucm\\Demo.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Demo.I_fill_registration_form()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Demo.I_clicked_on_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4090581,
  "error_message": "java.lang.NullPointerException\r\n\tat DemoCucm.Demo.closeup(Demo.java:63)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:44)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:40)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:195)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:183)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:177)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:83)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:77)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:82)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
});