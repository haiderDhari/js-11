/// <reference types="cypress"/>

import BookingPage from "../../pages/BookingPage";

const bookingPage = new BookingPage();

describe("Project03", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/project-3");
  });

  const validateTextAndLabels = () => {
    const text = [
      "Trip type",
      "Cabin Class",
      "From",
      "To",
      "Depart",
      "Return",
      "Number of passengers",
      "Passenger 1",
    ];
    bookingPage.getLabels().each(($el, index) => {
      cy.wrap($el).should("be.visible").and("have.text", text[index]);
    });
  };

  const validateDropDowns = () => {
    bookingPage.getDropDowns().each(($el) => {
      cy.wrap($el).should("be.visible");
    });
  };

  it("Test Case 01-02 - Validate the default Book your trip form", () => {
    bookingPage.getOneWay().should("be.visible").children().should("be.checked");
    bookingPage.getRoundTrip().should("be.visible").children().should("not.be.checked");
    bookingPage.getNumOfPassDropDown().should("have.value", 1);
    bookingPage.getPassengerDropDown().should("have.value", "Adult (16-64)");
    bookingPage.getDatePicker1().should("be.visible").and("be.enabled");
    bookingPage.getDatePicker2().should("be.visible").and("be.disabled");
    bookingPage.getBookButton().should("be.visible").and("be.enabled");
    bookingPage.getRoundTrip().click();
    bookingPage.getRadioButtonRoundTrip().should("be.checked");
    bookingPage.getOneWayButton().should("not.be.checked");

    validateTextAndLabels();
    validateDropDowns();
  });

  it("Test Case 03 - Validate the booking for 1 passenger and one way", () => {
    bookingPage.getOneWay().click();
    bookingPage.getCabinClassDropDown().realClick();
    bookingPage.getCabinClassDropDown().select("Business");
    bookingPage.getFromDropDown().realClick();
    bookingPage.getFromDropDown().select("Illinois");
    bookingPage.getToDropDown().realClick();
    bookingPage.getToDropDown().select("Florida");
    bookingPage.getNumbersOfPasserngersDropDown().realClick();
    bookingPage.getNumbersOfPasserngersDropDown().select("1");
    bookingPage.getPassengerOneDropDown().realClick();
    bookingPage.getPassengerOneDropDown().select("Senior (65+)");
    bookingPage.getBookButton().click();
    
  });

  it("Test Case 04 - Validate the booking for 1 passenger and round trip", () => {
    bookingPage.getRoundTrip().click();
    bookingPage.getCabinClassDropDown().realClick();
    bookingPage.getCabinClassDropDown().select("First");
    bookingPage.getFromDropDown().realClick();
    bookingPage.getFromDropDown().select("California");
    bookingPage.getToDropDown().realClick();
    bookingPage.getToDropDown().select("Illinois");
    bookingPage.getNumbersOfPasserngersDropDown().realClick();
    bookingPage.getNumbersOfPasserngersDropDown().select("1");
    bookingPage.getPassengerOneDropDown().realClick();
    bookingPage.getPassengerOneDropDown().select("Adult (16-64)");
    bookingPage.getBookButton().click();
  });

  it("Test Case 05 - Validate the booking for 2 passengers and one way", () => {
    bookingPage.getOneWay().click();
    bookingPage.getCabinClassDropDown().realClick();
    bookingPage.getCabinClassDropDown().select("Premium Economy");
    bookingPage.getFromDropDown().realClick();
    bookingPage.getFromDropDown().select("New York");
    bookingPage.getToDropDown().realClick();
    bookingPage.getToDropDown().select("Texas");
    bookingPage.getNumbersOfPasserngersDropDown().realClick();
    bookingPage.getNumbersOfPasserngersDropDown().select("2");
    bookingPage.getPassengerOneDropDown().realClick()
    bookingPage.getPassengerOneDropDown().select("Adult (16-64)");
    bookingPage.getPassengerTwoDropDown().select("Child (2-11)");
    bookingPage.getBookButton().click();
    
  });

});