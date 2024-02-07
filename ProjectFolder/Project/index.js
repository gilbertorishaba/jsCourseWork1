//function checks students credentials.
function userCrendentials(userEmail,password){  

//default required user inputs

        const correctuserEmail = 'gilbertorishaba4@gmail.com';
        
        const correctPassword = '22/U/6828@2024';

// validating if the user inputs match with the default values inputs using the if condition
        if (correctuserEmail ==='gilbertorishaba4@gmail.com' && correctPassword==='22/U/6828@2024'){
       
            return  console.log(`userEmail is ${userEmail},login successful`);

}

// incase user inputs donot match the existing inputs in our database 
    else{

       return console.log('Incorrect userCredentials,Try again');

}
  
      }
      // Invoking a function and assigning arguments to the parameters studentEmail and the password
      userCrendentials('gilbertorishaba4@gmail.com','22//6828@2024');

    