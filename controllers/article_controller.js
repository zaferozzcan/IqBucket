const express = require("express");
const Article = require("../models/articles")
const Subject = require("../models/subjects");


const articleRouter = express.Router()




articleRouter.get("/create", (req, res) => {
    Article.create([{
        title: "Know Your Audience",
        content: "Spend a few hours learning everything you can about the company-from as many sources as you can.Talk to friends and contacts, read current news releases, and, yes, spend some time on Google.Often, candidates just look at the information a company is pushing out via the website and social media, but fail to look more in depth at what others are saying.By doing so, you’ll get the larger picture about the company(along with any negative press Get a sense of who the company is and how to embody a similar personality during your interview.Start by reading the company’s blog and Facebook page—the tone of the company’s content on these sites will speak volumes.Or, try reading individual employees’ blogs to figure out what type of people work(and excel) there.Twitter can also be an excellent resource because you can see what the company and its employees are talking about.Are they sarcastically bantering with each other ? Feel free to throw a few jokes in as you’re meeting with people.Are they tweeting up a storm about an event or product launch ? Use it as a conversation starter.No matter what role you’re interviewing for—engineering, sales, marketing—you should always use the product before your first interview(and ideally, a few times).If hired, your goal will be to create value for the people who use that product, and being a user yourself is the first step. Make sure you reach out through your network to find current and previous employees you can talk to, too—they’re often your best source of intel on what it’s really like to work at a company.Before your interview, get a list of the people you’re meeting with from the company.Then learn more about them—including what type of behavior might intrigue them or turn them off.Finally, prep some questions that are specific to each interviewer: Ask for details about her focus at the firm, discuss current events on his specialty, or bring up a common interest you know he or she has outside the office.Different companies use different types of interviews, so ask what you will be faced with.For example, some companies will ask case questions or brain teasers while others will give a standard set of typical interview and leadership questions.Asking the recruiter or HR contact about the interview format ahead of time is totally fair game.And once you know, investing time to become familiar with this style can make a huge difference",
        source: 'https://www.themuse.com/advice/the-ultimate-interview-guide-30-prep-tips-for-job-interview-success'
    },
    {
        title: "Anticipate the Interview Questions",
        content: "Even if you’re a well-oiled interviewing machine, it’s essential to spend time thinking carefully about what skills, accomplishments, and interview answers will resonate with your interviewers most. Your management abilities? Your creativity? The examples you share will probably be slightly different everywhere you interview.Have an answer to Tell me about yourself ready to go. Interviewers always ask it, and you want to be sure to nail this first part of the interview. Don’t be thrown off by the classic What’s your biggest weakness? One foolproof method: Think of something that you struggle with but that you’re working to improve. For example, maybe you’ve never been strong at public speaking, but over the past few years, you’ve taken on leadership roles and volunteered to run meetings to help you be more comfortable when addressing a crowd.You can easily find lists of common interview questions—but don’t prepare by writing out your entire answer; instead, jot down a few notes or bullet points and keep them on hand for the interview itself. You’ll ensure you cover the bases—without reading from a script. Don’t forget about the numbers! Finding some numbers, percentages, increases, or quotas you can use when talking about your responsibilities and accomplishments really sweetens the deal and helps you tell a hiring manager why you’re so awesome. (Here's how to include them, even if you don't work with numbers.).It’s likely you’ll get asked why you’re interested in this particular role and company. (And if you can’t answer this question, you shouldn’t be in the interview!) So to make sure you can, consider why you’re interested in the function and identify a couple of key factors that make it a great fit for you and how it aligns with what motivates you (e.g., I love customer support because I love the constant human interaction and the satisfaction that comes from helping someone solve a problem)Don’t just think about how you’ll answer certain questions; practice looking in the mirror and answering them out loud.This prep work will help you clarify your thoughts and make you much more comfortable during the interview.Do as many mock interviews as you possibly can with a friend.You’ll be much better at answering, “What would you bring to the position?” the 100th time you do it than the first, right?Prepare a few smart questions for when it’s your turn to ask.Make sure they’re thoughtful ones that show you’ve been paying attention and have done your homework when it comes to researching the company and the specific job you’re after.",
        source: 'https://www.themuse.com/advice/the-ultimate-interview-guide-30-prep-tips-for-job-interview-success'
    },
    {
        title: "Pack(and Dress) Accordingly",
        content: "Plan the perfect interview outfit. For companies that have a business or business-casual dress code keep your look basic and conservative for the first interview. Not sure what to wear? If you have a contact or friend who works at the company you're interviewing with, see if he or she can give you a heads up as to what people wear. If you don’t have that luxury, scope out photos on their social media (or their Muse profile!), or hang out at a coffee shop across the street a day or two before and try to get a glimpse at what people are wearing.Make sure you get your outfit cleaned, pressed, and tailored (a modern fit is best). People often have their interviewing suit that’s been sitting in their closet for the past couple of years, and they dust it off for the occasion—you don’t want to be that person.Don’t forget about the little things: Shine your shoes, check for loose hems, and make sure your fingernails look manicured. This is the stuff that you don’t always think people notice, but they do! Do a little pampering, because looking your best helps you feel your best. If that means you need a facial, haircut, razor shave, or even a new interview outfit, then by all means do it! Feeling good about yourself will boost your confidence—and we probably don’t have to tell you that confidence is key to landing your dream job.Print out five copies of your resume. You never know who you’ll be meeting with, and you want to have your resume ready to go in case you're asked for it.Prepare a reference list, whether you think you’ll be asked for it or not. For each reference, include a name, title, organization, division or department, telephone number, and email address, as well as a sentence briefly explaining the relationship (e.g., Carlton was my team leader for two years, during which we collaborated on four major product launches).Prep your your purse, backpack, or briefcase. Whatever bag you carry should be large enough to hold your everyday essentials, plus your interview musts, such as extra resumes and a notepad, as well as a special emergency kit stocked with what you might need in an unexpected situation (think: Band-Aids, a stain stick, an umbrella, and breath mints). Here’s a general checklist of what to bring to an interview so you’re super prepared.Clean out that bag! If you have to dig past candy wrappers, phone chargers, and old receipts to get that resume, you’re going to look a little unorganized. Everything you need should be neatly organized and readily accessible. The less you have to rifle through your bag, the better.",
        source: 'https://www.themuse.com/advice/the-ultimate-interview-guide-30-prep-tips-for-job-interview-success'

    },
    {
        title: "Get Your Head in the Right Place",
        content: "Spend the most time before the interview not rehearsing questions, but reflecting on your career chronology to date. When you know your story inside and out, it’s much easier to apply examples to just about any interview question.Getting ready for a technical interview? Start preparing as early as possible. Working through a prep book or sample questions will not only give you good practice, but it’ll also put you in the right problem-solving mindset.Come up with a go-to phrase that’ll help you avoid dead air if you need time to stall and gather your thoughts. Two strategies that work well are repeating the question thoughtfully before answering or saying (slowly), “Now, that is a great question. I think I would have to say.Brush up on what certain body language conveys. Be aware of what you’re communicating through your posture and stance—and make sure it’s good. (For example, sitting with your arms and legs crossed sends a message that you are closed-off or feel defensive.) Think your movements through ahead of time so you are not distracted (or distracting) during the interview.Use an interview cheat sheet to compile all the details you need to remember, jot down notes about what you want to say and ask, and check off all the essentials of what to bring to the interview. Print one out for every interview, read it over the morning of, and you’ll be good to go! (We made one for you right here!).Oh, and get some sleep. This sounds like something your mom would tell you, but there are few things that will throw you off your game like sleep deprivation.",
        source: 'https://www.themuse.com/advice/the-ultimate-interview-guide-30-prep-tips-for-job-interview-success'
    }

    ])
    console.log("article created");
    res.redirect("/")
})

articleRouter.get("/:id", (req, res) => {
    Article.findById({ _id: req.params.id }, (err, data) => {
        if (!err) {
            console.log(data);
            res.render("../views/index/article.ejs", {
                article: data
            })
        }
    })
})








module.exports = articleRouter;




