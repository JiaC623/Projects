# Projects
Projects is a record of my school projects during academic years.


## About Creating Repository
I made it done since I followed the video to setup git bash, SSH keys and other things else. Finding videos on YouTube would be fast.

```
# browse the directory you want to create the repo
cd "D:\Github\DesiredFolder"

# in case you want to create folder, 
# alternatively you can create files at the local folder
mkdir FolderName

# initialize an empty Git repository named "main", 
# with default branch using " -b "
$ git init -b main

# stage "all" the files
$ git add .
# commit the files
$ git commit -m "First commit"

# remote repository URL can be found at the top of repo
# or click "code" to see
# now build connection 
$ git remote add origin <REMOTE_URL>
# Verifies the new remote URL
$ git remote -v

# push the changes 
$ git push origin main

```

The process can be found in [Github Docs][github-docs-link].
stackOverflow forum for more info about remote, origin, git pull... [here][stackoverflow-link].
common commands on Git Bash in [this link][toolsqa-link]

[github-docs-link]:https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github
[stackoverflow-link]:https://stackoverflow.com/questions/37741924/git-remote-v-shows-fetch-and-push-twice-once-for-github-and-once-for
[toolsqa-link]: https://www.toolsqa.com/git/common-directory-commands-on-git-bash/



