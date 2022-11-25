import axios from "axios";

export const dataApi = axios.create({
  baseURL:
    "https://raw.githubusercontent.com/owInteractive/desafio-frontend-2020/master/produtos.json",
});
