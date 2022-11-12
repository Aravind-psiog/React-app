import axios from "axios";
import ApiConfigs from "../Api/ApiConfigurations";

const Api = axios.create({
  baseURL: ApiConfigs.baseURL,
});

export default Api;
