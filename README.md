# [CODECADEMY PORTFOLIO PROJECT] Message-Generator
# [Kanban for the project](https://www.codecademy.com/journeys/full-stack-engineer/paths/fscj-22-building-interactive-websites/tracks/fscj-22-portfolio-project-javascript-syntax/modules/fscp-22-mixed-messages-0a2e7c49-03e1-4825-a480-508f02de0208/kanban_projects/mixed-messages)
# Description

Message-generator provides a simple user interface that allows user to select a topic and repetition times and randomly generate a message in console. 

### Regular scenario of customer interaction:

Initial message:

```Hello friend! 
I am a message generator and can provide you random sentences per your input.
If you are ready for details on how to do that, press 'y' is you are ready or 'n' for seeng next time! [y/n]:
y
```

Topic selector:
```
Please select topic:
1. Rock music
2. Sport motivation
3. Random nonsense
2
```

Repetition times:
```
Please enter repetition times to see a desired number of generated sentences:
3
```

Final output:
```
Generated sentences:
* If a healthy sportsman runs then he ragingly faces sthrengths
* When a nervous pain enters then she healthy joggs hills
* Whatever an unhealthy food appears then he simply struggles days
```

Invitation to start over:
```
Want some more? Press 'y' to start over or 'n' to exit! [y/n]:
```

Message structure is complex - it uses one main independent clause and one subordinate clause.
General pattern for messages generated is as follows:
>**Main cl.: (*conj. + article + adj. + s. obj. noun + v.*)) + (Sub. cl.:(*conj. + s. subj. noun + adv. + v. + pl. obj. noun*))**

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