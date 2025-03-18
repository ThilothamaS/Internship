### DAY 16 SUMMARY:
#### GET REQUEST:
- Get request is the one which help us to retrieve back the elements present in the database and it is the read function in the __crud application__.
- This read function is the one that helps to go through the elements in the database and this get request can be written as a function and it access the id of the user to get the username of the user as a output.
- The query written for this will access the id of the username and gives out the username for us to read and query is the one that is used to communicate with the database. If i want retrieve any data or select any data or want to read any data the present in the database i have to use query to communicate with the database and that gives us the output.
- These queries are always given in the normal English language and it only consist of some syntax and that can be used to access the data present in the database.
- Today, I have written a get request for the crud application that i am creating and i came out well. That get request helps me to read the data that is present in the database.

#### VALIDATION FUNCTION:
- Validation is the one that is used to identify whether the input data like username and password are in the proper format. This helps to check whether the input username is a string or not and that username is in proper length or not and it has to go above the minimum length give and i must not be a empty string. If the input username passes all these test it will be added to the database or the error statement will be displayed to the user. 
- Same as the validation for the input username, the input password has to pass all the give test and then only it can goes to the database to access them. 
- I have written two validation function for both the input username and the passwords to validate the inputs from the user and store it into the database. This step is mandatory when it comes to any login pages, because in the login page the user and password must be strong and valid to enter into the database
. Because if the database store all the inputs without doing the validation process, there will be more number of data that cannot read when it comes to the get request process.

#### ERROR HANDLING:
- Error handling is the process of showing error to the user if any input is not proper and using this error handling process we can throw the error if the input is wrong like username is not valid, username not available, etc.
- Try and catch in the error handling process, try means trying the given condition in the input and catch means if there is any error in the given input, it will displays the error.
- I have written a error statement for both the validation function for both the username and the password and written the try and catch functions in the input function, like if the input given is not proper to the validation it will shows the error.

#### PUT REQUEST:
- The put request is the one which helps us to update the data that is already present in the database and we can access the already available data and can convert it into the new data.
- It is the function that access the user id and can update the data that needs to be updated in the database, it will helps us to access the present data and modify that data into a new one that comes as the input from user for the updating process.
- I have tried to write the put request and tries to update the data within the database.

#### Struggles Faced:
- I have tried to write the endpoints but i can't able to write them that fast, because this is the first time i am writing these endpoint and also working with the crud application. And i need to learn more about JavaScript to easily understand the problem and write the program.

#### Key Takeaways:
- Learned to write get request and the function for the get request and the query to access the database.
- Learned to write the validation function for both username and password.
- Learned what is mean by error handling and the terms like try, catch, throw new error, etc.
- Learned to write error handling in the input and read functions.