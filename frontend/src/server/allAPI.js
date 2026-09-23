import commonAPI from "./commonAPI";
import serverURL from "./serverURL";

const registerAPI = (data) => commonAPI("POST", `${serverURL}/api/register`, data);
const loginAPI = (data) => commonAPI("POST", `${serverURL}/api/login`, data);

export { registerAPI, loginAPI };