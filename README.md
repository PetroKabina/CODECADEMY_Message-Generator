# [CODECADEMY PORTFOLIO PROJECT] Message-Generator
# [Kanban for the project](https://www.codecademy.com/journeys/full-stack-engineer/paths/fscj-22-building-interactive-websites/tracks/fscj-22-portfolio-project-javascript-syntax/modules/fscp-22-mixed-messages-0a2e7c49-03e1-4825-a480-508f02de0208/kanban_projects/mixed-messages)
# Description

Message-generator provides a simple user interface that allows user to select a topic and repetition times and randomly generate a message in console. 

### Prerequisites
**Environment**
[NodeJS](https://nodejs.org/en/download)
[NPM](https://docs.npmjs.com/cli/v10/configuring-npm/install)
**Libraries**: ansi-regex, prompt-sync, strip-ansi
all of this can be installed for NodeJS envronment
`npm install prompt-sync`
**More details** in [Codecademy](https://www.codecademy.com/article/getting-user-input-in-node-js)

### Regular scenario of customer interaction:

How to run the code:
```> node.exe .\message-generator.js```

**Expected execution result:**
```> node.exe .\message-generator.js     
Hello friend! I am a message generator and can provide you random sentences per your input.
Press "y" to continue
and "n" or ^C to exit...
[y/n]:
y
Please select topic:
1. Rock music
2. Sport motivation
3. Random
3
Please enter repetition times to see a desired number of generated sentences:
4
4 messages for random topic:

 Until radiant sadness believe, than sadness swiftly think hope.
 Since the lovely country play, wherever money seriously teach game.
 Unless a incredible teacher stay, when fear rarely remember doctor.
 Before an gorgeous death forget, as failure happily change dog.

Press "y" to continue
and "n" or ^C to exit...
[y/n]:
n
```
Message structure is complex - it uses one main independent clause and one subordinate clause.
General pattern for messages generated is as follows:
```**(Main cl.: (*conj. + article + adj. + s. obj. noun + v.*)) + (Sub. cl.:(*conj. + s. subj. noun + adv. + v. + pl. obj. noun*))**```

**Example**: _When a happy atom splits than it simply releases neutrons._ (don't search any sense in this sentence, this is just for an example :) )
- **Main clause**: "_When a happy atom splits_"
- **Subordinate clause**: "_then it simply releases neutrons_"
Decomposing the above parts we can move to sentence elements:
* Main clause: 
	* "_When_" - Conjunction
	* "_a_" - article
	* "_happy_" - adjective
	* "_atom_* - singular noun
	* "_splits_" - verb
- Subordinate clause: 
	- "_then_" - conjunction
	- "_it_" - subjective noun
	- "_simply_" - adverb
	- "_releases_" - verb
	- "_neutrons_" - plural objective noun 

# Features
1. Stores words database to serve as a basis for message generation
2. Runs through database per selected topic
3. Generates random messages based on the following topics:
* Rock music
* Sport motivation
* Random nonsense
# Original task description

For this project, you will build a **message generator program**. **Every time a user runs a program, they should get a new, randomized output.** You’re welcome to take the project in a couple of different forms, like an astrology generator, inspirational message, or nonsensical jokes. To make your program truly random, the message that it outputs should be made up of at least three different pieces of data. Take what you know of JavaScript syntax so far to build the program and customize it to your liking.
## Project Objectives:
* Build a message generator program using JavaScript
* Use Git version control
* Use command line
* Develop locally on your computer
* Prerequisites:
1. JavaScript
2. Git and GitHub
3. Command line
## Useful links
[University of Bristol. Complex sentences.](https://www.bristol.ac.uk/academic-language/media/BEAP/3.4/index.html#:~:text=A%20complex%20sentence%20is%20made,indicating%20sophisticated%20connections%20between%20ideas.)