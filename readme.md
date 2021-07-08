## Whitebox Code Challenge

Write a NodeJS Script that reads data from a SQL Database of your choice, filters that data to only include the data for one specific client, and converts that data into a multi-tabbed Excel spreadsheet (sample-output.xlsx). 

 - The `data.sql.gz` files in this repository contains the SQL data to use.
 - You will need to install a SQL Database of SQL Database docker container.
 - You will need to import/run the `data.sql.gz` contents to populate the SQL into your database.
 - You will need to write a NodeJS script to 
   - Access the database, 
   - Read its contents, 
   - Filter it, 
   - and Produce the the final results.
 - There is more than one client's data in this SQL file.
 - You should only include data from one client, the client with `ID = 1240`. 
 - You *are* allowed to use libraries for this challenge.
 - The final output should match the structure of the `sample-output.xlsx` file. (*Please note that the actual content of the sample-output.xlsx may not match the data given in the data.sql.gz file.*)
 
 - **We estimate this task should take about 2 hours, depending on your skill level with the technologies involved. If time is too tight of a constraint, please tell us about what you were planning to do given more time.**

### Devops Modifications
If you are applying for a devops role, the requirements are slightly different:

1. The solution **must** run in containers, one for the script, one for the database.
2. The containers must be configured using docker-compose, kubernetes, or a similar tool of your choice.
4. There should be a readme included explaining the project and how to use it
5. You may use podman, docker, or any container platform, as long as installation and usage is documented in the readme
6. The language can be of your choice, node is not a requirement.
7. The 2 hour estimate is only for the code, the environmental configuration will take somewhat longer.

### Submitting the code challenge

Please create a GitHub Repo with your final result. I should be able to run your script and produce the required output.

### Helpful Hints

- You can install Mysql in Docker https://hub.docker.com/_/mysql
- You can also install Mysql on MacOS using https://formulae.brew.sh/formula/mysql
- You can also install Mysql on Windows https://dev.mysql.com/downloads/installer/
- If you don't have excel, you can test your output using Google Sheets
