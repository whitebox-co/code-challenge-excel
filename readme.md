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
 
 - **Please do not spend more than 2 hours on this work. If you exceed 2 hours, just stop and submit what you have and tell us about what you were planning to do given more time.**

### Submitting the code challenge

Please create a GitHub Repo with your final result. I should be able to run your script and produce the required output.

