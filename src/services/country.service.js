import db from "../config/db.js";

export const getCountries = () => {
    return new Promise((resolve,reject) => {
        const query = 'SELECT * FROM country';

        db.execute(query)
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
};

export const getCountry = (id) => {
    return new Promise((resolve,reject) => {
        const query = 'SELECT * FROM country WHERE id = ?';

        db.execute(query, [id])
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
};