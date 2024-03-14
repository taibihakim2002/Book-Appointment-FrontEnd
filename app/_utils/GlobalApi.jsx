const { default: axios } = require("axios");

const URL = process.env.NEXT_PUBLIC_API_URL;
const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

const axiosClient = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

const getCategories = () => axiosClient.get("/categories?populate=*");
const getDoctors = () => axiosClient.get("/doctors?populate=*");
const getDoctorsByCategory = (category) =>
  axiosClient.get(
    "/doctors?filters[category][Name][$in]=" + category + "&populate=*"
  );
const getDoctorById = (id) => axiosClient.get("/doctors/" + id + "?populate=*");

const setAppointment = (data) => axiosClient.post("/appointments", data);
export default {
  getCategories,
  getDoctors,
  getDoctorsByCategory,
  getDoctorById,
  setAppointment,
};
