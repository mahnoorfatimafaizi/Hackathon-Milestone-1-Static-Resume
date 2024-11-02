var ResumeBuilder = /** @class */ (function () {
    function ResumeBuilder() {
        console.log("Static Resume Loaded");
    }
    ResumeBuilder.prototype.displayMessage = function () {
        console.log("Welcome to Mahnoor Fatima's Static Resume!");
    };
    return ResumeBuilder;
}());
var resume = new ResumeBuilder();
resume.displayMessage();
