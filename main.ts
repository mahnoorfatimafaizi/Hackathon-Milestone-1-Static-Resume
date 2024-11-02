class ResumeBuilder {
  constructor() {
    console.log("Static Resume Loaded");
  }

  displayMessage() {
    console.log("Welcome to Mahnoor Fatima's Static Resume!");
  }
}

const resume = new ResumeBuilder();
resume.displayMessage();
