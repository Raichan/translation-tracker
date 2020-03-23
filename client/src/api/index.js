import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertTranslation = payload => api.post(`/translation`, payload)
export const getAllTranslations = () => api.get(`/translations`)
export const updateTranslationById = (id, payload) => api.put(`/translation/${id}`, payload)
export const deleteTranslationById = id => api.delete(`/translation/${id}`)
export const getTranslationById = id => api.get(`/translation/${id}`)

const apis = {
    insertTranslation,
    getAllTranslations,
    updateTranslationById,
    deleteTranslationById,
    getTranslationById,
}

export default apis