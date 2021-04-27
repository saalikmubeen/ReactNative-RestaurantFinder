import camelize from "camelize";
import { locations } from "../mockData/locations/locations";

const geoCodeLocation = (address = "san francisco") => {
    return new Promise((resolve, reject) => {
        const location = locations[address];

        setTimeout(() => {
            if (!location) {
                reject("Location not found!");
            } else {
                resolve(formatLocation(location));
            }
        }, 2000);
    });
};

const formatLocation = (location) => {
    const formattedResponse = camelize(location);
    return formattedResponse;
};

// geoCodeLocation()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

export default geoCodeLocation;
