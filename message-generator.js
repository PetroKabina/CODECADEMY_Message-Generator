/* FUNCTIONS SECTION */
const wordsLib = {
mainConjs : [
    'after', 'although', 'as', 'because',
    'before', 'even though', 'if', 'once',
    'since', 'so long as', 'though', 'unless',
    'until', 'when', 'whenever', 'whereas', 
    'wherever', 'while'
    ],
subConjs : [
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
}
}

const messageGenerator = (topic = NaN, repTime = 1) => {

    let id = 1;

    mainConj_1              = wordsLib.mainConjs[id]
    mainArt_1               = wordsLib.articles[id]
    mainAdj_1               = wordsLib.adj.sports[id]
    mainObjNoun_1           = wordsLib.nouns.sports[id]
    mainVrb_1               = wordsLib.verbs.sports[id]
    subClconj_1             = wordsLib.subConjs[id]
    subClSubjNoun_1         = wordsLib.nouns.sports[id]
    subClAdv1               = wordsLib.adj.sports[id] + 'ly'
    subClVrb1               = wordsLib.verbs.sports[id]
    subClObjNoun            = wordsLib.nouns.sports[id]

    message = 
    mainConj_1 + ' ' +
    mainArt_1 + ' ' +
    mainAdj_1 + ' ' +
    mainObjNoun_1 + ' ' +
    mainVrb_1 + ' ' +
    subClconj_1 + ' ' +
    subClSubjNoun_1 + ' ' +
    subClAdv1 + ' ' +
    subClVrb1 + ' ' +
    subClObjNoun + '.'

    return message;
}

console.log(messageGenerator());

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