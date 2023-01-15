import React from 'react'
import ButtonReact from './ButtonReact'

const ChangeUsername = () => {

    const { setUserData, isUserUpdating, userError, user } = useMoralis();

    const ChangeUsername = () => {
       const userName = prompt("Enter your new username");
         setUserData({ username: userName });

            if (isUserUpdating) {
                console.log("Updating user...");
            }

            if (userError) {
                console.log("Error updating user: ", userError);
            }

            if (user) {
                console.log("User updated: ", user);
            }
            
    }


  return (
    <div className="text-sm absolute top-5 right-5 ">

    <ButtonReact onClick={ChangeUsername()} className="hover:text-pink-500">
        Change Username
    </ButtonReact>
    </div>

  )
}

export default ChangeUsername