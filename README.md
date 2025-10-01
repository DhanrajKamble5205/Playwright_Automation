**If you facing following error while running 'npm':**

nvm : The term 'nvm' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the
spelling of the name, or if a path was included, verify that the path is correct and try again.
At line:1 char:1
+ nvm list
+ ~~~
    + CategoryInfo          : ObjectNotFound: (nvm:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException

**Resolution**
  1. Open PowerShell and run following command.
  2. Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
  3. Get-ExecutionPolicy -List
  4. you can see:
         Scope ExecutionPolicy
        ----- ---------------
MachinePolicy       Undefined

   UserPolicy       Undefined

    Process       Undefined
 
 **CurrentUser    RemoteSigned**
 
 LocalMachine       Undefined
