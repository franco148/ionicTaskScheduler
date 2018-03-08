# ionicTaskScheduler
Building my first IONIC app.






verificar si tengo la version de ionic: Esto si antes ya teniamos intalado y configurado ionic.
ionic config set -g backend pro

ionic link --create
luego ingresar el nombre de la app.


Franco@DESKTOP-0AKT0V7 MINGW64 /d/CODE/GITHUB/Mobile/ionic/MyTodosList (master)
$ git commit -m "ionic rebased changes from origin."
On branch master
nothing to commit, working tree clean

Franco@DESKTOP-0AKT0V7 MINGW64 /d/CODE/GITHUB/Mobile/ionic/MyTodosList (master)
$ git status
On branch master
nothing to commit, working tree clean

Franco@DESKTOP-0AKT0V7 MINGW64 /d/CODE/GITHUB/Mobile/ionic/MyTodosList (master)
$ git push origin master
Counting objects: 42, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (35/35), done.
Writing objects: 100% (42/42), 97.10 KiB | 8.83 MiB/s, done.
Total 42 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), done.
To https://github.com/franco148/ionicTaskScheduler.git
   29424a5..31d8eb4  master -> master

Franco@DESKTOP-0AKT0V7 MINGW64 /d/CODE/GITHUB/Mobile/ionic/MyTodosList (master)
$ clear

Franco@DESKTOP-0AKT0V7 MINGW64 /d/CODE/GITHUB/Mobile/ionic/MyTodosList (master)
$ ionic link --create

? Please enter a name for your new app: ionicTaskScheduler
? Please enter a name for your new app: ionicTaskScheduler
> ionic config set app_id "0477b61f" --json
[OK] app_id set to "0477b61f" in .\ionic.config.json!
> ionic git remote
> git remote add ionic git@git.ionicjs.com:francofral/ionictaskscheduler.git
[OK] Added remote ionic.
[OK] Project linked with app 0477b61f!

Franco@DESKTOP-0AKT0V7 MINGW64 /d/CODE/GITHUB/Mobile/ionic/MyTodosList (master)
$


Franco@DESKTOP-0AKT0V7 MINGW64 /d/CODE/GITHUB/Mobile/ionic/MyTodosList (master)
$ git commit -m "ionic rebased changes from origin."
On branch master
nothing to commit, working tree clean

Franco@DESKTOP-0AKT0V7 MINGW64 /d/CODE/GITHUB/Mobile/ionic/MyTodosList (master)
$ git status
On branch master
nothing to commit, working tree clean

Franco@DESKTOP-0AKT0V7 MINGW64 /d/CODE/GITHUB/Mobile/ionic/MyTodosList (master)
$ git push origin master
Counting objects: 42, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (35/35), done.
Writing objects: 100% (42/42), 97.10 KiB | 8.83 MiB/s, done.
Total 42 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), done.
To https://github.com/franco148/ionicTaskScheduler.git
   29424a5..31d8eb4  master -> master

Franco@DESKTOP-0AKT0V7 MINGW64 /d/CODE/GITHUB/Mobile/ionic/MyTodosList (master)
$ clear

Franco@DESKTOP-0AKT0V7 MINGW64 /d/CODE/GITHUB/Mobile/ionic/MyTodosList (master)
$ ionic link --create

? Please enter a name for your new app: ionicTaskScheduler
? Please enter a name for your new app: ionicTaskScheduler
> ionic config set app_id "0477b61f" --json
[OK] app_id set to "0477b61f" in .\ionic.config.json!
> ionic git remote
> git remote add ionic git@git.ionicjs.com:francofral/ionictaskscheduler.git
[OK] Added remote ionic.
[OK] Project linked with app 0477b61f!

Franco@DESKTOP-0AKT0V7 MINGW64 /d/CODE/GITHUB/Mobile/ionic/MyTodosList (master)
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   ionic.config.json

no changes added to commit (use "git add" and/or "git commit -a")

Franco@DESKTOP-0AKT0V7 MINGW64 /d/CODE/GITHUB/Mobile/ionic/MyTodosList (master)
$ git add .
warning: LF will be replaced by CRLF in ionic.config.json.
The file will have its original line endings in your working directory.

Franco@DESKTOP-0AKT0V7 MINGW64 /d/CODE/GITHUB/Mobile/ionic/MyTodosList (master)
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   ionic.config.json


Franco@DESKTOP-0AKT0V7 MINGW64 /d/CODE/GITHUB/Mobile/ionic/MyTodosList (master)
$ git commit -m "required IONIC configuration"
[master 842ec9e] required IONIC configuration
 1 file changed, 1 insertion(+), 1 deletion(-)

Franco@DESKTOP-0AKT0V7 MINGW64 /d/CODE/GITHUB/Mobile/ionic/MyTodosList (master)
$ git status
On branch master
nothing to commit, working tree clean

Franco@DESKTOP-0AKT0V7 MINGW64 /d/CODE/GITHUB/Mobile/ionic/MyTodosList (master)
$ git push origin master
Counting objects: 3, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 363 bytes | 363.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/franco148/ionicTaskScheduler.git
   31d8eb4..842ec9e  master -> master

Franco@DESKTOP-0AKT0V7 MINGW64 /d/CODE/GITHUB/Mobile/ionic/MyTodosList (master)
$ git push ionic master
The authenticity of host 'git.ionicjs.com (54.70.151.201)' can't be established.
ECDSA key fingerprint is SHA256:Wv6rYBk1T3XSPfybwccdQJ+lhmR+FC6F61d1i46VPFI.
Are you sure you want to continue connecting (yes/no)? y
Please type 'yes' or 'no': yes
Warning: Permanently added 'git.ionicjs.com,54.70.151.201' (ECDSA) to the list of known hosts.
Counting objects: 48, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (40/40), done.
Writing objects: 100% (48/48), 97.95 KiB | 6.12 MiB/s, done.
Total 48 (delta 4), reused 0 (delta 0)
remote: Received:
remote:         Branch:   master
remote:         Commit Sha:   842ec9e1bb72b51af48ee6d8d915f80a59ba3c29
remote:         Commit Msg:   required IONIC configuration
remote:  Checking for previous builds...
remote:  New commit or branch detected triggering new build view build log here:
remote:  https://dashboard.ionicjs.com/app/0477b61f/code/builds/872a40cf-b33f-4ea9-b81e-9e0f4eed3001
To git.ionicjs.com:francofral/ionictaskscheduler.git
 * [new branch]      master -> master

Franco@DESKTOP-0AKT0V7 MINGW64 /d/CODE/GITHUB/Mobile/ionic/MyTodosList (master)
$
































