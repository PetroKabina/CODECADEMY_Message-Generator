/* WORDS LIBRARY */
/*
// complies a structure lib(object) -> topic(object) -> partOfSpeech(arr)
// genarated using https://chat.openai.com/
*/
const wordsLib = {
    common : {
        mainConjugations: [
            'and', 'but', 'for', 'nor', 'or',
            'so', 'yet', 'after', 'although', 'as',
            'because', 'before', 'if', 'since', 'though',
            'unless', 'until', 'when', 'while'
        ],
        subsidiaryConjugations : [
            'after', 'although', 'as', 'as if',
            'as long as', 'as much as', 'as soon as', 'as though',
            'because', 'before', 'by the time', 'even if',
            'even though', 'if', 'in case', 'in order that',
            'in the event that', 'lest', 'now that', 'once',
            'only', 'only if', 'provided that', 'since',
            'so', 'supposing', 'than', 'that',
            'though', 'till', 'unless', 'until',
            'when', 'whenever', 'where', 'whereas',
            'wherever', 'whether or not', 'while'
        ],
        articles : [
            'a', 'an', 'the', ''
        ],
    },
    sports : {
        adjectives: [
            'Adrenaline-pumping', 'Competitive', 'Fast-paced', 'Exciting', 'Fun',
            'Intense', 'Relaxing', 'Rewarding', 'Social', 'Stressful',
            'Team-oriented', 'Thrilling', 'Unique', 'Difficult', 'Intimidating',
            'Powerful', 'Prestigious', 'Provocative', 'Stimulating', 'Energetic',
            'Enthusiastic', 'Exhilarating', 'Extreme', 'Fashionable', 'Fit',
            'Fitful', 'Flexible', 'Fluid', 'Focused', 'Action-packed',
            'Active', 'Agile', 'Athletic', 'Bold', 'Brave',
            'Daring', 'Energetic', 'Fearless', 'Fit', 'Hardworking',
            'Honest', 'Intense', 'Passionate', 'Persistent', 'Strong'
        ],
        adverbs: [
            'Admirably', 'Aggressively', 'Briskly', 'Cautiously', 'Competitively',
            'Confidently', 'Eagerly', 'Efficiently', 'Fairly', 'Fiercely',
            'Gracefully', 'Loudly', 'Proudly', 'Quickly', 'Relentlessly',
            'Swiftly', 'Vigorously', 'Boldly', 'Determinedly', 'Enthusiastically',
            'Intensely', 'Passionately', 'Steadily', 'Strategically', 'Tirelessly',
            'Toughly', 'Vividly', 'Wholeheartedly', 'Zealously', 'Agilely',
            'Cleverly', 'Diligently', 'Effectively', 'Firmly', 'Heartily',
            'Mightily', 'Nimbly', 'Readily', 'Robustly', 'Skillfully',
            'Stoutly', 'Valiantly', 'Vividly', 'Willingly', 'Worthily',
            'Zestfully', 'Bravely', 'Decisively', 'Industriously', 'Persistently'
        ],
        nouns : [
            'Sportscaster', 'Sportsmanship', 'Stadium', 'Strike', 'Teammate',
            'Tennis court', 'Tie', 'Time-out', 'Touchdown', 'Tournament',
            'Track and field', 'Trainer', 'Trophy', 'Umpire', 'Underdog',
            'Hat trick', 'Hockey', 'Home plate', 'Home run', 'Infield',
            'Inning', 'Jump shot', 'Kickoff', 'Lay up', 'League',
            'Locker room', 'Offense', 'Opponent', 'Outfield', 'Penalty',
            'Pitcher', 'Pro', 'Preseason', 'Puck', 'Quarterback',
            'Recreational', 'Referee', 'Score', 'Scoreboard', 'Semifinal',
            'Serve', 'Singles', 'Soccer', 'Spectator sport', 'Amateur',
            'Arena', 'Athletic', 'Backboard', 'Backhand', 'Batter'
        ],
        verbs: [
            'Compete', 'Train', 'Strive', 'Struggle', 'Achieve',
            'Endure', 'Exceed', 'Outperform', 'Score', 'Succeed',
            'Surpass', 'Perform', 'Participate', 'Fight', 'Win',
            'Play', 'Practice', 'Improve', 'Master', 'Challenge',
            'Push', 'Progress', 'Excel', 'Conquer', 'Race',
            'Endeavor', 'Contribute', 'Surge', 'Race', 'Push through',
            'Advance', 'Outplay', 'Outlast', 'Overcome', 'Breakthrough',
            'Outshine', 'Outpace', 'Outdo', 'Outrun', 'Outfight',
            'Strategize', 'Lead', 'Support', 'Tackle', 'Defend',
            'Attack', 'Dominate', 'Motivate', 'Inspire', 'Perform'
        ],
    },
    rock: {
        adjectives: [
            'Loud', 'Energetic', 'Gritty', 'Raw', 'Powerful',
            'Edgy', 'Dynamic', 'Melodic', 'Legendary', 'Iconic',
            'Soulful', 'Aggressive', 'Innovative', 'Fierce', 'Rebellious',
            'Intense', 'Electrifying', 'Bold', 'Revolutionary', 'Passionate',
            'Vibrant', 'Explosive', 'Distinctive', 'Fiery', 'Bluesy',
            'Raucous', 'Expressive', 'Anthemic', 'Captivating', 'Thrilling',
            'Riff-driven', 'Searing', 'Pounding', 'Hypnotic', 'Unforgettable',
            'Searing', 'Provocative', 'Sonic', 'Raucous', 'Funky',
            'Swaggering', 'Punchy', 'Uncompromising', 'Amped-up', 'Blistering',
            'Daring', 'Charismatic', 'Intoxicating', 'Hard-hitting', 'Melancholic'
        ],
        adverbs : [
            'Loud', 'Energetic', 'Gritty', 'Raw', 'Powerful',
            'Edgy', 'Dynamic', 'Melodic', 'Legendary', 'Iconic',
            'Soulful', 'Aggressive', 'Innovative', 'Fierce', 'Rebellious',
            'Intense', 'Electrifying', 'Bold', 'Revolutionary', 'Passionate',
            'Vibrant', 'Explosive', 'Distinctive', 'Fiery', 'Bluesy',
            'Raucous', 'Expressive', 'Anthemic', 'Captivating', 'Thrilling',
            'Riff-driven', 'Searing', 'Pounding', 'Hypnotic', 'Unforgettable',
            'Searing', 'Provocative', 'Sonic', 'Raucous', 'Funky',
            'Swaggering', 'Punchy', 'Uncompromising', 'Amped-up', 'Blistering',
            'Daring', 'Charismatic', 'Intoxicating', 'Hard-hitting', 'Melancholic'
        ],
        nouns : [
            'Guitar', 'Drums', 'Vocals', 'Bass', 'Stage',
            'Crowd', 'Concert', 'Amplifier', 'Sound', 'Music',
            'Performance', 'Riff', 'Chorus', 'Melody', 'Beat',
            'Energy', 'Singer', 'Audience', 'Headliner', 'Festival',
            'Musician', 'Song', 'Show', 'Electricity', 'Pulse',
            'Thrill', 'Harmony', 'Tempo', 'Crowd-surfing', 'Mosh pit',
            'Venue', 'Reverb', 'Solo', 'Loudness', 'Performance',
            'Rockstar', 'Stage dive', 'Encore', 'Gig', 'Lyrics',
            'Bassline', 'Drumstick', 'Pick', 'Playlist', 'Chord',
            'Distortion', 'Vibe', 'Groove', 'Amplification', 'Feedback'
        ],
        verbs : [
            'Rock', 'Jam', 'Shred', 'Erupt', 'Pulsate',
            'Thunder', 'Roar', 'Thrash', 'Crunch', 'Resonate',
            'Explode', 'Revv', 'Vibrate', 'Rage', 'Sizzle',
            'Groove', 'Scream', 'Blaze', 'Pound', 'Charge',
            'Fuse', 'Electrify', 'Reverberate', 'Stomp', 'Rip',
            'Blast', 'Strum', 'Echo', 'Rumble', 'Surge',
            'Crescendo', 'Ferment', 'Amp', 'Riff', 'Crank',
            'Explode', 'Intensify', 'Quake', 'Revitalize', 'Unleash',
            'Jolt', 'Propel', 'Galvanize', 'Overdrive', 'Melt',
            'Shatter', 'Energize', 'Tremor', 'Echo', 'Resonate'
        ],
    },
    random: {
        adjectives: [
            'Beautiful', 'Brave', 'Bright', 'Calm', 'Charming',
            'Cheerful', 'Clever', 'Confident', 'Cozy', 'Creative',
            'Cute', 'Dazzling', 'Delightful', 'Elegant', 'Enchanting',
            'Exciting', 'Fantastic', 'Friendly', 'Funny', 'Glamorous',
            'Gorgeous', 'Graceful', 'Happy', 'Healthy', 'Hopeful',
            'Incredible', 'Joyful', 'Kind', 'Lovely', 'Lucky',
            'Magical', 'Marvelous', 'Modern', 'Nice', 'Optimistic',
            'Perfect', 'Playful', 'Positive', 'Powerful', 'Pretty',
            'Radiant', 'Relaxed', 'Smart', 'Successful', 'Sunny',
            'Super', 'Sweet', 'Talented', 'Thankful', 'Unique'
        ],
        adverbs: [
            'Randomly', 'Quickly', 'Slowly', 'Swiftly', 'Carefully',
            'Unexpectedly', 'Smoothly', 'Effortlessly', 'Steadily', 'Quietly',
            'Loudly', 'Frequently', 'Rarely', 'Regularly', 'Happily',
            'Sadly', 'Briskly', 'Eagerly', 'Angrily', 'Patiently',
            'Generously', 'Cautiously', 'Vigorously', 'Gracefully', 'Enthusiastically',
            'Seriously', 'Safely', 'Freely', 'Honestly', 'Naturally',
            'Pleasantly', 'Roughly', 'Politely', 'Correctly', 'Incorrectly',
            'Perfectly', 'Hastily', 'Gently', 'Hungrily', 'Thirstily',
            'Joyfully', 'Beautifully', 'Powerfully', 'Reluctantly', 'Sensibly',
            'Wisely', 'Cleverly', 'Carelessly', 'Curiously', 'Optimistically'
        ],
        nouns: [
            'Dog', 'Cat', 'Book', 'House', 'Tree',
            'Car', 'City', 'Country', 'River', 'Mountain',
            'Ocean', 'Beach', 'School', 'Teacher', 'Student',
            'Doctor', 'Hospital', 'Music', 'Movie', 'Art',
            'Science', 'Technology', 'Food', 'Drink', 'Friend',
            'Family', 'Love', 'Time', 'Money', 'Job',
            'Dream', 'Success', 'Failure', 'Happiness', 'Sadness',
            'Fear', 'Hope', 'Future', 'Past', 'Present',
            'Nature', 'Life', 'Death', 'Game', 'Sport',
            'adverbsenture', 'Journey', 'Memory', 'Knowledge', 'Wisdom'
        ],
        verbs: [
            'Run', 'Jump', 'Play', 'Sing', 'Dance',
            'Think', 'Write', 'Read', 'Eat', 'Sleep',
            'Walk', 'Talk', 'Swim', 'Fly', 'Cook',
            'Drive', 'Study', 'Teach', 'Learn', 'Work',
            'Create', 'Destroy', 'Build', 'Destroy', 'Laugh',
            'Cry', 'Smile', 'Feel', 'Touch', 'Move',
            'Stay', 'Leave', 'Join', 'Quit', 'Win',
            'Lose', 'Fall', 'Rise', 'Drop', 'Catch',
            'Understand', 'Imagine', 'Believe', 'Succeed', 'Fail',
            'Change', 'Grow', 'Remember', 'Forget', 'Give'
        ],
    },
};

/*
// Variables section
*/
let ready = null;
let topicEntry = null;
let repetitionTimes = null;
const userMessages = { 
    greeting : 'Hello friend! I am a message generator and can provide you random sentences per your input.',
    readinessConfirm : 'Press "y" to continue\nand "n" or ^C to exit...\n[y/n]: ',
    selectTopic : 'Please select topic:\n1. Rock music\n2. Sport motivation\n3. Random',
    repetitionTimes : 'Please enter repetition times to see a desired number of generated sentences:',
    noAvailableTopic : 'No available topic selected, please try again',
}

/* FUNCTIONS SECTION */
/*
// gets array and return a random element from this array
*/
const randWordSelector = ( wordsArr ) => {
    randWordId = Math.floor(Math.random() * wordsArr.length);
    return wordsArr[randWordId];
}

/*
// takes message section content and position in the entire message
// formats words depending on their position and returns a message part as a string
*/
const msgPartForm = (section, position)  => {
    msgPart = section.map((word, index) => {
        let len = section.length;
        // initial format for a word
        word = word.toLowerCase();
        // format word up to its position in sentence
        // first letter of the sentence is uppercase
        if (index === 0 && position === 'beginning') {
            word = word[0].toUpperCase() + word.slice(1);
        };
        // add a space between the words
        if ( ( index > 0 && index < len || index != len - 1 ) && word != '') {
            word = ' ' + word;
        };
        // add punctuation
        if ( index === len - 1 && position === 'end' ) {
            word = word + '.';
        } else if ( index === len - 1 && position != 'end' ) {
            word = word + ',';
        };

        return word;
    }
);

    // transform an array of words to a string
    msgPart = msgPart.join('').toString();
    return msgPart;
}

/*
// gets library, topic and part of speech
// returns a word as an object using a random selector
// lib structure should be lib(object) -> topic(object) -> partOfSpeech(arr)
*/
const wordObj = (lib, topic, partOfSpeech) => {
    //console.log(lib.partOfSpeech.topic)
    selector = lib[topic][partOfSpeech];
    word = {
        partOfSpeech: partOfSpeech,
        content: randWordSelector(selector),
    }
    return word;
}

/* 
// gets topic and repetition time and returns message(s)
// default repetition time is 10
// default topic is "3. Random nonsense"
*/
const messageGenerator = (lib, topic, repTimes) => {
    for ( let i=0; i < repTimes; i++) {
        // define message elements
        let mainConj_1                = wordObj(lib, 'common', 'mainConjugations')
        let mainArt_1                 = wordObj(lib, 'common', 'articles')
        let mainadjectivesectives_1   = wordObj(lib, topic, 'adjectives')
        let mainObjNoun_1             = wordObj(lib, topic, 'nouns')
        let mainVrb_1                 = wordObj(lib, topic, 'verbs')
        let subClconj_1               = wordObj(lib, 'common', 'subsidiaryConjugations')
        let subClSubjNoun_1           = wordObj(lib, topic, 'nouns')
        let subCladverbs1             = wordObj(lib, topic, 'adverbs')
        let subClVrb1                 = wordObj(lib, topic, 'verbs')
        let subClObjNoun              = wordObj(lib, topic, 'nouns')

        // define message structure
        const mainPart                = [ mainConj_1.content, mainArt_1.content, mainadjectivesectives_1.content, mainObjNoun_1.content, mainVrb_1.content ];
        const subPart                 = [ subClconj_1.content, subClSubjNoun_1.content, subCladverbs1.content, subClVrb1.content, subClObjNoun.content ];    
        let message                   = { mainPart, subPart };

        //console.log(message)
        
        //format message
        let messageToDisplay = {
            mainPart: msgPartForm(message.mainPart, 'beginning'), 
            subPart: msgPartForm(message.subPart, 'end')
        };
            
        renderedMessage = messageToDisplay.mainPart + messageToDisplay.subPart;

        console.log( renderedMessage );
    }
}

// creates user input interface
"use strict";
const ps = require("prompt-sync");
const prompt = ps({sigint: true});

/* FUNCTIONS TEST SECTION */
//console.log(wordObj(wordsLib, 'mainConjugations', 'common'))
//messageGenerator(wordsLib, 'sports', 10);

/* USER INTERACTION */
/*
// console.log() and prompt() are separated here
// due to 
*/
const main = () => {
    console.log( userMessages.greeting );
    console.log( userMessages.readinessConfirm );
    ready = prompt().toLowerCase();

    // https://www.codecademy.com/article/getting-user-input-in-node-js
    //console.log(ready);
    while(ready === 'y') {
        console.log( userMessages.selectTopic ); 
        topicEntry = prompt();
            switch( Number( topicEntry ) ) {
                case 1: 
                    topicSelector = 'rock';
                    break;
                case 2:
                    topicSelector = 'sports';
                    break;
                case 3:
                    topicSelector = 'random';
                    break;
                default:
                    console.log ( userMessages.noAvailableTopic );
                    continue;
            }
        console.log( userMessages.repetitionTimes );
        repetitionTimes = prompt('');
        const result = repetitionTimes + 
        ' messages for ' + 
        topicSelector + 
        ' topic:\n';
        console.log( result );
        messageGenerator( wordsLib, topicSelector, repetitionTimes );
        console.log( '\n' + userMessages.readinessConfirm );
        ready = prompt();
    }
}

main();