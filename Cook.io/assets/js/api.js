"use strict";

window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";
const APP_ID = "6f6bc16d";
const API_KEY = "0999c4dfae68613f30a9bd149843607c";
const TYPE = "public";

export const fetchData = async function (queries, successCallback){
    const query = queries?.join("&")
    .replace(/,/g, "=")
    .replace(/ /g, "%20")
    .replace(/\+/g, "%2B");

    const url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${API_KEY}&type=${TYPE}${query ? `&${query}` : ""}`;

    const response = await fetch(url);

    if(response.ok){
        const data = await response.json();
        successCallback(data);
    }
}

