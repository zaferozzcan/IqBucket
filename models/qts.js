const { model } = require("./subjects");

module.exports = qts = [
    {
        question: "What is an iframe and how it works?",
        answer: "An iframe is an HTML document which can be embedded inside another HTML page.",
        tech: "HTML5",
        level: "entry",
        source: "github.com/FuelFrontend ",
    },
    {
        question: "What is the purpose of the alt attribute on images? ",
        answer: "The alt attribute provides alternative information for an image if a user cannot view it. The alt attribute should be used to describe any images except those which only serve a decorative purposes, in which case it should be left empty.",
        tech: "HTML5",
        level: "entry",
        source: "developer.mozilla.org"
    }, {
        question: "What is the difference between span and div?",
        answer: "div is a block element span is inline element For bonus points, you could point out that it’s illegal to place a block element inside an inline element, and that while div can have a p tag, and a p tag can have a span, it is not possible for span to have a div or p tag inside.",
        tech: "HTML5",
        level: "entry",
        source: 'thatjsdude.com'
    }, {
        question: "What were some of the key goals and motivations for the HTML5 specification?  ",
        answer: "HTML5 was designed to replace HTML 4, XHTML, and the HTML DOM Level 2. The key goals and motivations behind the HTML5 specification were to:Deliver rich content (graphics, movies, etc.) without the need for additional plugins, such as Flash.Provide better semantic support for web page structure through new structural element tags.Provide a stricter parsing standard to simplify error handling, ensure more consistent cross-browser behaviour, and simplify compatibility with documents written to older standards.Provide better cross-platform support whether running on a PC, Tablet, or Smartphone.",
        tech: "HTML5",
        level: "entry",
        source: "toptal.com "
    }
]

// {
//     question:,
//         answer:,
//     tech:,
//         level:,
//     source
// }