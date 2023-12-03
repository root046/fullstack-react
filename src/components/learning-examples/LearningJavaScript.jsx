const person = {
    name:'bader alanazi',
    address:{
        city:'yanbu',
        country:'saudi',
    },
    profiles:['Twitter','TikTok','Snapchat'],
    printProfile: ()=> {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}

export default function LearningJavaScript(){
    return(
        <>
            <div>{person.name}</div>
            <div>{person.address.city}</div>
            <div>{person.address.country}</div>
            <div>{person.profiles[1]}</div>
            <div>{person.printProfile()}</div>
        </>
    )
}