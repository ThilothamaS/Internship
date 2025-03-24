### DAY 20 SUMMARY :
#### DRIZZLE ORM CONNECTION : 
- Connecting to drizzle ORM have been set today after trying so many times previous week. It has the issue in the connection URL and i tried to solve that problem and tried to connect to the database table and   today, i have completed the connection process and also have created three different tables for my project(API for the ticket booking application) and this can also be done using the CRUD methods. Create, read, update and delete is a common method for all the APIs, This project is based on the ticket booking for movies(like Book My Show app), and the key constraints i have to complete in this project is to creating tables and creating values inside the tables and in the get all request, i have to get all the theater names as a list and the movie list in those theaters separately and in another get request i have to get the available seats after every ticket booking process have completed and have to make the processing time for every ticket booking as 1 minutes and also in that one minute no one should book the same seats as well.   

#### Creating tables : 
- I have created three different tables for theaters and its details, movies and its details and finally ticket booking and its details. The created tables can be connected to give the required output. Creating these tables are also been tough for me, because of that URL missing problem. And this problem have finally been fixed and also i have created tables in the database too. 

#### Post request :
- I have written three endpoints for creating and inserting data in the three tables. First i have learned about the select query for the drizzle ORM and its little simple comparing to the normal query, but i feel like normal queries are a little much more easier like the syntax for the normal query is not that difficult to understand and it is also easier to read and write. But in this query, it is simple to write and have many syntax, so it is a little bit difficult for me understand. After reading the syntax for the select query, i have declared a function and written the select query inside that and also written some logics to select the available data from the table, if not available inserting the data into the table with the value. 

#### Get request :
- The get request for the theater must give all the theater names inside the data table and have to return the theater name with the movies list in that particular theater, I have written a endpoint to get all theaters from the data table of theater. Here also i have used select query to select the data from the table and also done the pagination process in the drizzle ORM query, first i have learned the query for pagination in the drizzle ORM and then i have executed what i have learnt. Today i have completed till the three endpoints and function to create and insert the data inside the table and getting all the theater name and the movie list in each tables.

#### Struggles faced:
- I have faced struggles to connecting to the database using the drizzle ORM and the URL for the database. I have written the connection for the database connection but it still doesn't connected and after giving the URL directly inside the declared variable it works and i don't know, did the issue is because of the URL or not.
- I have struggles in creating the table in the database, it is also because of the URL mistake.
- I have struggles in inserting the data inside the data table, this is because of my mistakes and the mistake i did was in the written condition for the selection of the data from the data table.

#### Key takeaways :
- I have learned how to connect to the database using the drizzle ORM.
- I have learned how to rectify my mistakes and how to clear the errors in the code have written.
