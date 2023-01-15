import React from 'react'
import Image from 'next/image'
import { useMoralis } from 'react-moralis';

function Avatar({username, logoutPress })  {
    const {user, logout} = useMoralis();
    const { data } = useMoralisCloudFunction("getAvatar", { address: user.attributes.ethAddress });
    const { data: profile } = useMoralisCloudFunction("getProfile", { address: user.attributes.ethAddress });
    const { data: profileImage } = useMoralisCloudFunction("getProfileImage", { address: user.attributes.ethAddress });
    const { data: profileImageURL } = useMoralisCloudFunction("getProfileImageURL", { address: user.attributes.ethAddress });
    
        return (
            <Image className="rounded-full bg-black cursor-pointer hover:opacity-75" src={`https://avatars.dicebar.com/api/pixel-art/${username || user.get("username")}.svg`} onClick={() =>
                logoutPress ? logout() : null
            }></Image>
        )
}

export default Avatar