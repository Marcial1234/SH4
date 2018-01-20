# Git Summary Sheet for DApp Teens

## MAIN TODOs
- When deploying your changes, first you `git pull`
- Fix conflicts, if any, and re-commit
- Then you `git push`

# Description
Decentralized development, before decentraization was cool! (actually, this is 'distributed', slight difference)
Everyone creates their shit remotely in parrallel in their own 'branches', and ruitinely merges it with a 'master repo chain'.

- see changes since last 'block' ('commit' in this case): `git status`
- see the whole 'blockchain' ('history'):
  - `git log`, or for a better looking one: 
  - `git alias ... TBA`
- preparing for a new block/commit:
  - `git add [command]`: Adds changes of file(s) to the proposed new commit
  - `git add -u`: Adds changed 'tracked'/followed files since last commit
  - `git reset [command]`: Withdraws file changes
  - `git rm [command]`: REMOVES file from git history starting at the next commit
- processing a new block/commit:
    - `git commit -m "[commit log message]"`: Adds a new block in the history with the prepared/staged changes from above. **Please**, be descriptive!
        - Note: a quick way to commit to the history only the modified files that were present since the last commit is `git commit -am "[message]"`
- SENDING your changes to the network so collegues can see it:
    - `git push origin master`: generally the default first `push` command. A more generic version is: `git push [remote name] [branch]`. GitHub and other cloud Git platforms source links are usually are set as the 'origin' remote link.
- GETTING the latest network changes: `git pull`


For fancier stuff (`git checkout`, `git branch`, etc) try Googling it, or try [here](#didnt-get-it-still).


## Didn't get it still?
Try [this tutorial](https://try.github.io).


## Buzzword Board
Write all the absord words of the crypto and swe world and their definitions that add **unessesary** complexity to our short, poor plebs lives...

- `gas`: ETH talk for 'fee'
- `tangle`: IOTA and Cordano/ADA talk for a [DAG](https://en.wikipedia.org/wiki/Directed_acyclic_graph)
- more: to come