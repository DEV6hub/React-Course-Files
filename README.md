This project was created with [Create React App](https://github.com/facebookincubator/create-react-app). You can get the latest version of that README [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md). 


## Getting Started

This repository exists to support the lab exercises that come with the [React Fundamentals course](https://www.dev6.com/React-Training-Course) offered by DEV6. Each lab exercise has its own branch with commits that reflect the changes you'll make as you follow the lab steps. You can choose to simply study those commits or you can write the code yourself. 

To prepare for the process of coding the solution yourself, run the commands below.

1. Get a local copy of the master branch. 
```
git clone https://github.com/DEV6hub/React-Course-Files.git
cd React-Course-Files
```
> This gives you the completed version of the application.

2. List the remote branches.
```
git remote show origin
```
> When you clone a repository, you don't get all available branches.

3. Get a copy of the branch for the lab you want to work on.
```
git checkout origin/<remote-branch-name>
```
> ```<remote-branch-name>``` is the name of the branch that was listed in the output from the previous step.

4. Inspect the commits in this new branch. 
```
git log --oneline
```
> Every ```lab-*``` branch has a commit whose message starts with "starting point...". This commit represents the master branch with some of the code removed.

5. Check out the "starting point..." commit.  
```
git checkout <hash-for-the-starter-commit>
```
> ```<hash-for-the-starter-commit>``` is the first few letters from the commit hash. You will see a message indicating that you are in a 'detatched HEAD' state and a suggestion to check out a new branch name.

6. Create a new branch to track your progress.  
```
git checkout -b <new-branch-name>
```
> ```<new-branch-name>``` is an arbitrary name of your choosing. The original branch should be left untouched since it contains the solution. You should commit your changes on your own branch as you work through the exercise.

7. As you make progress, commit your changes.
```
git add .
git commit -m "describe what you did"
```

