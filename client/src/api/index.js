import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/",
});

export const insertTranslation = (payload) =>
  api.post(`/translations`, payload);
export const getAllTranslations = () => api.get(`/translations`);
export const updateTranslationById = (id, payload) =>
  api.put(`/translations/${id}`, payload);
export const deleteTranslationById = (id) => api.delete(`/translations/${id}`);
export const getTranslationById = (id) => api.get(`/translations/${id}`);
export const getLanguageTotals = (id) => api.get(`/translations/totals/${id}`); // Event id
export const getLatest = (id, payload) =>
  api.post(`/translations/latest/${id}`, payload);

export const insertEvent = (payload) => api.post(`/events`, payload);
export const getAllEvents = () => api.get(`/events`);
export const updateEventById = (id, payload) =>
  api.put(`/events/${id}`, payload);
export const deleteEventById = (id) => api.delete(`/events/${id}`);
export const getEventById = (id) => api.get(`/events/${id}`);
export const getEventByCode = (code) => api.get(`/events/code/${code}`);

const apis = {
  insertTranslation,
  getAllTranslations,
  updateTranslationById,
  deleteTranslationById,
  getTranslationById,
  getLanguageTotals,
  getLatest,
  insertEvent,
  getAllEvents,
  updateEventById,
  deleteEventById,
  getEventById,
  getEventByCode,
};

export default apis;
