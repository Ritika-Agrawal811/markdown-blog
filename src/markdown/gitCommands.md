## Useful Git Commands

1. git init

This commands helps to initialize git in a directory. Now all our files in this directory will be tracked by git.

Files will show different colors like - green with letter 'U' for untracked file, green with 'A' for added files, yellow with 'M' for modified state.

<CodeSnippet language="git">
git init
</CodeSnippet>

2. git status

This commands gives the status of our project. It shows the changes, untracked files and commited files.

<CodeSnippet language="git">
git status 
On branch main
Your branch is up to date with 'origin/main'.
Changes not staged for commit:

    modified:   markdown-blog/src/data/topics.js
    modified:   markdown-blog/src/index.css

Untracked files:

    markdown-blog/src/markdown/gitCommands.md
    markdown-blog/src/markdown/vscodeShortcuts.md

no changes added to commit (use "git add" and/or "git commit -a")

</CodeSnippet>

3. git add

This command helps to add files from the working directory to the staging area.

<CodeSnippet language="git">
  git add \. // adds all the files
  git add dir/file // only adds this particular file
</CodeSnippet>

4. git commit -m "message"

This command helps to record the changes that were added to the staging area via git add command. It is like saving the changes.

<CodeSnippet language="git">
  git commit -m "add: Copy Feature"
  git commit -m "fix: Readme"
  git commit -m "refactor: Post Code"
</CodeSnippet>

5. git remote -v

This command prints the set of remotes that we are tracking with our local repository. Remotes are nothing but the GitHub repository that stores our code.

<CodeSnippet language="git">
git remote -v
origin \< url of repo \> (fetch)
origin \< url of repo \> (push)

</CodeSnippet>

6. git remote add [name] [url]

This command is used to add a remote. Most common name given to a remote is origin.

<CodeSnippet language="git">
git remote add origin \< url of repo \>
</CodeSnippet>

7. git push [remote] [branch]

This command is used to push the local changes to the GitHub repository.

<CodeSnippet language="git">
git push origin main
</CodeSnippet>
