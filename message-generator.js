// WORDS LIBRARY
const wordsLib = {
    mainConjs : 
        {
            common:
            [
                'after', 'although', 'as', 'because',
                'before', 'even though', 'if', 'once',
                'since', 'so long as', 'though', 'unless',
                'until', 'when', 'whenever', 'whereas', 
                'wherever', 'while'
            ],
        },
    subConjs : 
        {
            common:
            [
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
            ],},
    articles : 
        {
            common:
            [
                'a', 'an', 'the', ''
            ],},
    adj : {
        sports : [
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
        },
    verbs : {
        sports : [
            'Catch up', 'Cool down', 'Give up',
            'Join in', 'Knock out', 'Take up',
            'Try out for', 'Work on', 'Warm up', 
            'Work out' 
        ]
        },
    nouns : {
        sports : [
            'sportscaster', 'sportsmanship', 'stadium', 'strike', 'teammate',
            'tennis court', 'tie', 'time-out', 'touchdown', 'tournament',
            'track and field', 'trainer', 'trophy', 'umpire', 'underdog',
            'hat trick', 'hockey', 'home plate', 'home run', 'infield',
            'inning', 'jump shot', 'kickoff', 'lay up', 'league',
            'locker room', 'offense', 'opponent', 'outfield', 'penalty',
            'pitcher', 'pro', 'preseason', 'puck', 'quarterback',
            'recreational', 'referee', 'score', 'score', 'scoreboard',
            'semifinal', 'serve', 'singles', 'soccer', 'spectator sport',
            'amateur', 'arena', 'athletic', 'backboard', 'backhand',
            'batter', 'baseball', 'basketball', 'bench', 'catcher',
            'champion', 'championship', 'coach', 'competitive', 'defense',
            'doubles', 'dribble', 'dugout', 'fan', 'field goal',
            'finish line', 'football', 'forehand', 'free throw', 'goal',
            'goal line', 'goalkeeper', 'goalpost', 'grand slam', 'half time'
        ]
    },
    adv : {
        sports : [
            'super', 'good', 'sheer', 'rough', 'fine',
            'solo', 'deadly', 'pro', 'clean', 'bad',
            'real', 'better', 'best', 'fair', 'within',
            'wild', 'loud', 'through', 'decent', 'each',
            'big', 'pretty', 'new', 'between', 'daily',
            'outside', 'little', 'true' 
        ] 
    },

}

/* FUNCTIONS SECTION */
// gets array and returns a random element from this array
const randWordSelector = (wordsArr) => {
    randWordId = Math.floor(Math.random() * wordsArr.length);
    return wordsArr[randWordId];
}

const msgPartForm = (section)  => {
msgPart = section.map((word, index) => {
    let len = section.length;
    word = word.toLowerCase();
    if (index === 0 ) {
        word = word.toUpperCase();
    //    console.log(word[0]);
        word = word + ' ';
        } else if (index > 0 && index < len) {
        word = word + ' ';
        } else if (index === len - 1) {
        word = word + '.';
        }
        return word;
    });
    msgPart = msgPart.join('').toString();
    return msgPart;
}

const wordObj = (lib, wordType, topic) => {
    //console.log(lib.wordType.topic)
    topic = 'common';
    selector = lib.wordType.topic;
    return {
        type: wordType,
        content: randWordSelector(selector)
    }
}

// gets topic and repetition time and returns message(s)
// default repetition time is 1
// default topic is "3. Random nonsense"
const messageGenerator = (lib, topic = 'sports', repTime = 1) => {
    
    // define message elements
    let mainConj_1                = wordObj(lib, 'mainConjs', 'common')
    let mainArt_1                 = wordObj(lib, 'articles', 'common')
    let mainAdj_1                 = wordObj(lib, 'adj', topic)
    let mainObjNoun_1             = wordObj(lib, 'nouns', topic)
    let mainVrb_1                 = wordObj(lib, 'verbs', topic)
    let subClconj_1               = wordObj(lib, 'subConjs', 'common')
    let subClSubjNoun_1           = wordObj(lib, 'nouns', topic)
    let subClAdv1                 = wordObj(lib, 'adv', topic)
    let subClVrb1                 = wordObj(lib, 'verbs', topic)
    let subClObjNoun              = wordObj(lib, 'nouns', topic)

    // define message structure
    const mainPart                = [ mainConj_1.content, mainArt_1.content, mainAdj_1.content, mainObjNoun_1.content, mainVrb_1.content ];
    const subPart                 = [ subClconj_1.content, subClSubjNoun_1.content, subClAdv1.content, subClVrb1.content, subClObjNoun.content ];    
    let message                   = { mainPart, subPart };

    console.log(message)
    
    //format message
    message = {
        mainPart: msgPartForm(message.mainPart), 
        subPart: msgPartForm(message.subPart)
    };
        
    return message.mainPart + message.subPart;
}

console.log(wordObj(wordsLib, 'mainConjs', 'common'))

//console.log(messageGenerator(wordsLib));

/* USER INTERACTION */
/*const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });*/

/*const prompt = require ("prompt-sync")({sigint: true})
console.log(`
Hello friend! 
I am a message generator and can provide you random sentences per your input.
If you are ready for details on how to do that, press:
'y' is you are ready
or 'n' for seeng next time! [y/n]:
`);
readline.question('Who are you?', selectorYN)

console.log(`
Please select topic:
1. Rock music
2. Sport motivation
3. Random nonsense
`)

console.log(
`Please enter repetition times to see a desired number of generated sentences:`
)

console.log(selector)*/