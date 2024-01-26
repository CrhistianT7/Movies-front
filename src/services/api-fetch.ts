import axios from "axios";
import { IMovie } from "../types/types";

export const api = axios.create({
  baseURL: "http://localhost:8080/v1",
  headers: {
    "Content-type": "application/json"
  }
})

export const getMovies = () => {
  return api.get<Array<IMovie>>(`/movies`)
}
