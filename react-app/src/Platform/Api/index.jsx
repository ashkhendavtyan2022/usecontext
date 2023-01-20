import React from "react";
import axios from "axios";


const Api = "https://crudcrud.com/api/af44a67ccfeb4dd8833c151feb763e67/"

export const SetUser = (data) => {
    return axios.post(`${Api}list`, data)
};

