import avatar from "../assets/images/avatar"

export function getImage(profile){
    return (
        {avatar} + '-' + profile.imgId + 'webp'
    )
}