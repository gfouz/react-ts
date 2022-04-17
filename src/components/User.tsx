import * as React from 'react'

interface user {
	uui:string,
	name:string
}

function User () {
  const[user, setUser] = React.useState<user>({
  	 uui:"",
  	 name:""
  });
  function login() {
  	 setUser({
  	 	 uui:"123abc",
  	 	 name:"giovani"
  	 })
  }
	return (
	   <>	
	   <button onClick={login}>Add User</button>	
       <h1>{user.name}</h1>
       </>
		);
}

export default User;