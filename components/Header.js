import React from 'react'
import Avatar from './Avatar';

const Header = () => {
    const { user } = useMoralis();

  return (
    <div>
        <div>
            <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid ">
                <Image
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                src="https://links.papareact.com/3pi">

                </Image>
            </div>

            <div>
                <div className="relative h-48 w-48 lg:-mx-auto border-pink-500 border-8 rounded-full">
                    <Avatar logoutPress={}>

                    </Avatar>
                </div>
                
                <h1 className="text-3xl">Welcome to the React Metaverse!</h1>
                <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>

                <ChangeUsername></ChangeUsername>
            </div>
        </div>
    </div>
  )
}

export default Header