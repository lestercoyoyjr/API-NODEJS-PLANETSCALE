import db from "../config/db.js";

export const getCountries = () => {
    return new Promise((resolve,reject) => {
        const query = 'SELECT * FROM country';

        db.execute(query)
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
};