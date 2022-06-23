import axios from "axios";

const baseURL = "https://billions-api.nomadcoders.workers.dev";

const headers = {
  "Content-Type": "application/json"
};

const instance = axios.create({
  baseURL,
  headers
});

export const getAll = async () => instance.get("/");

export const getPersonById = async personId => instance.get(`/person/${personId}`);

