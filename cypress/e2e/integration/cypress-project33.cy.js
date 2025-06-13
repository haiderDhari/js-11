/// <reference types="cypress" />
import BookingPage from "../../pages/BookingPage";

const bookingPage = new project3Page();

describe("Project03", () => {
  beforeEach(() => {
    cy.visit("https://www.techglobal-training.com/frontend/project-3");
  });
});