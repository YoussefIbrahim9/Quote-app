// variables

let quotes = 
[
    [ "Be yourself; everyone else is already taken." ,"Oscar Wilde"],
    ["I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", "Marilyn Monroe"],
    ["So many books, so little time.", "Frank Zappa"],
    ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "Albert Einstein"],
    ["A room without books is like a body without a soul.","Marcus Tullius Cicero"],
    ["Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.","Bernard M. Baruch"],
    ["You know you're in love when you can't fall asleep because reality is finally better than your dreams.", "Seuss"],
    ["You only live once, but if you do it right, once is enough.","Mae West"],
    ["Be the change that you wish to see in the world.","Mahatma Gandhi"],
    ["In three words I can sum up everything I've learned about life: it goes on.","Robert Frost"],
    ["If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.","Rowling"],
    ["If you tell the truth, you don't have to remember anything.","Mark Twain"],
    ["Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself","Lewis"],
    ["I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", "Maya Angelou"],
    ["Always forgive your enemies; nothing annoys them so much.","Oscar Wilde"],
    ["Live as if you were to die tomorrow. Learn as if you were to live forever.", "Mahatma Gandhi"],
    ["We accept the love we think we deserve.", "Stephen Chbosky"],
    ["Without music, life would be a mistake.", "Friedrich Nietzsche"],
    ["I am so clever that sometimes I don't understand a single word of what I am saying.", "Oscar Wilde"],
    ["To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", "Ralph Waldo Emerson"],
    ["Good friends, good books, and a sleepy conscience: this is the ideal life", "Mark Twain"],
    ["I restore myself when I'm alone.", "Marilyn Monroe"],
    ["Silly things do cease to be silly if they are done by sensible people in an impudent way.", "Jane Austen"],
    ["Listen up - there's no war that will end all wars.", "Haruki Murakami"],
    ["Never attempt to teach a pig to sing; it wastes your time and annoys the pig.", "Robert Heinlein"],
    ["Spring is the time of plans and projects.", "Leo Tolstoy"],
    ["It's not what happens to you, but how you react to it that matters.", "Epictetus"],
    ["You miss 100% of the shots you don't take.", "Wayne Gretzy"],
    ["Do not take life too seriously. You will not get out alive.", "Elbert Hubbard"],
    ["The best revenge is massive success.", "Frank Sinatra"],
    ["If you try to fail, and succeed, which have you done?", "George Carlin"],
    ["Threats are the last resort of a man with no vocabulary.", "Tamora Pierce"],
    ["In the middle of difficulty lies opportunity", "Albert"],
    ["Sleep, those little slices of death — how I loathe them.", "Edgar Allan Poe"],
    ["People are capable, at any time in their lives, of doing what they dream of.", "Paulo Coelho"],
];

var generatedNumber;
var duplicatedNumber = [];
var btn = document.getElementById("btn");


// button function
btn.onclick = function addQuote(){

    // function to generate a random number from the range 0 to 33
    function randomNumber(){
        var num = Math.round((Math.random() * 100));
        if(num >= 0 && num<= 33)
            return num;
        else{
            return randomNumber();
        }
    };


    // function to check whether the number is duplicate or not
    function IsDuplicate(){
        generatedNumber = randomNumber();
        if(duplicatedNumber.includes(generatedNumber)){
            IsDuplicate();
        }
        else{
            duplicatedNumber.push(generatedNumber);
        }
    }

    IsDuplicate();

    // Display the quote in the website
    document.getElementById("add").innerHTML =
    `<p>"${quotes[generatedNumber][0]}"</p>
    <span>-- ${quotes[generatedNumber][1]} --</span>`

}













