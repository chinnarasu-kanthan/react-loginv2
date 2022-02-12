
const users = [{
         username:'abcd@gmail.com',
         password:"test",
         firstName:'abc', 
         lastName:'inc', 
         layout:'layout-1' 
}]; 
const login = (username, password) => {
  return new Promise((resolve, reject) => {
         // find if any user matches login credentials
         let filteredUsers = users.filter(user => {
            return user.username === username && user.password === password;
          });
          if (filteredUsers.length) {
            // if login details are valid return user details and fake jwt token
            let user = filteredUsers[0];
            let responseJson = {
            
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                layout:'layout-1' 
            };
            resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
        } else {
            // else return error
            reject('Username or password is incorrect');
        }
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};

export default {
  login,
  logout,
};
