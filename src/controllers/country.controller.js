import * as countryServices from "../services/country.service.js"

export const getCountries = (req,res) => {
    countryServices
    .getCountries()
    .then((result) => {
        res.status(200).json({
            message: "Countries retrieved successfully",
            data: result[0],
        })
    })
    .catch((err) => {
        res.status(500).send(err);
    })
};

export const getCountry = (req,res) => {
    const {id} = req.params;
    countryServices
    .getCountry(id)
    .then((result) => {
        res.status(200).json({
            message: "Country retrieved successfully",
            data: result[0],
        })
    })
    .catch((err) => {
        res.status(500).send(err);
    })
};

export const createCountry = (req,res) => {
    res.send("countries");
};

export const updateCountry = (req,res) => {
    res.send("countries");
};

export const deleteCountry = (req,res) => {
    res.send("countries");
};