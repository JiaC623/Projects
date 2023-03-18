# Projects
Projects is a record of my school projects during academic years.
Feel free to take a look at the lab or project folders.
Below is some knowledge when I created this repo.

<br>

## What is SSH key?
> An SSH key is an access credential for the SSH (secure shell) network protocol. This authenticated and encrypted secure network protocol is used for remote communication between machines on an unsecured open network. SSH is used for remote file transfer, network management, and remote operating system access.

---- resource from [Atlassian.com][atlassian-link]

SSH keys are a popular and widely used method for secure authentication and communication over a network, not everyone uses them, and there are other methods for securing connections.

- password-based authentication 

- two-factor authentication (2FA)

- VPN and other IP restrictions 

    In some cases, access to a network or system may be restricted based on the user's IP address, or access may be granted only through a virtual private networ

<br>

## About Creating Repository
I made it done since I followed the video to setup git bash, SSH keys and other things else. Finding videos on YouTube would be fast.

1. Go to the directory you want to create `.git`

```bash
# browse the directory you want to create the repo
cd "D:\Github\DesiredFolder"

# in case you want to create folder, 
# alternatively you can create files at the local folder
mkdir FolderName
```

2. Initialize `.git` (and give some files to commit if you want)

```bash
# initialize an empty Git repository named "main", 
# with default branch using " -b "
$ git init -b main

# stage "all" the files
$ git add .
# commit the files
$ git commit -m "First commit"
```

3. Link the remote URL to this location

```bash
# remote repository URL can be found at the top of repo
# or click "code" to see
# now build connection 
$ git remote add origin <REMOTE_URL>
# Verifies the new remote URL
$ git remote -v
```

4. Done and Push `origin`

```bash
# push the changes 
$ git push origin main
```

The process can be found in [Github Docs][github-docs-link].

stackOverflow forum for more info about remote, origin, git pull... see [here][stackoverflow-link].

Common commands on Git Bash in [this link][toolsqa-link]


[github-docs-link]:https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github
[stackoverflow-link]:https://stackoverflow.com/questions/37741924/git-remote-v-shows-fetch-and-push-twice-once-for-github-and-once-for
[toolsqa-link]: https://www.toolsqa.com/git/common-directory-commands-on-git-bash/
[atlassian-link]: https://www.atlassian.com/git/tutorials/git-ssh#:~:text=An%20SSH%20key%20is%20an,and%20remote%20operating%20system%20access.



