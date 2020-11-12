import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertTranslation = payload => api.post(`/translation`, payload)
export const getAllTranslations = () => api.get(`/translations`)
export const updateTranslationById = (id, payload) => api.put(`/translation/${id}`, payload)
export const deleteTranslationById = id => api.delete(`/translation/${id}`)
export const getTranslationById = id => api.get(`/translation/${id}`)

export const insertEvent = payload => api.post(`/event`, payload)
export const getAllEvents = () => api.get(`/events`)
export const updateEventById = (id, payload) => api.put(`/event/${id}`, payload)
export const deleteEventById = id => api.delete(`/event/${id}`)
export const getEventById = id => api.get(`/eventid/${id}`)
export const getEventByCode = code => api.get(`/event/${code}`)

const apis = {
    insertTranslation,
    getAllTranslations,
    updateTranslationById,
    deleteTranslationById,
    getTranslationById,
    insertEvent,
    getAllEvents,
    updateEventById,
    deleteEventById,
    getEventById,
    getEventByCode,
}

export default apis