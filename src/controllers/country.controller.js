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
    res.send("countries");
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