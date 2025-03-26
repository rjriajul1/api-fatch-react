export default function User ({user}){
    return(
        <div className="border">
            <p>name: {user.name} </p>
            <p>Email: {user.email}</p>
            <div>
                <address>
                    <p>address: {user.address.city},{user.address.street},{user.address.suite}</p>
                </address>
            </div>
        </div>
    )
}


// {
//     "street": "Hoeger Mall",
//     "suite": "Apt. 692",
//     "city": "South Elvis",
//     "zipcode": "53919-4257",
//     "geo": {
//         "lat": "29.4572",
//         "lng": "-164.2990"
//     }
// }