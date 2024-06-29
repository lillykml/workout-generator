import axios from "axios"

const baseUrl = "/api/exercises"
const workoutsUrl = "/api/workouts"

let token = null

const setToken = (token) => {
    token = `Bearer ${token}`
}

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response=>response.data)
  }

const get = exerciseId => {
    const request = axios.get(`${baseUrl}/${exerciseId}`)
    return request.then(response=>response.data)
}

const getAllWorkouts = () => {
    const request = axios.get(workoutsUrl)
    return request.then(response=>response.data)
}

export default {getAll, create, get, setToken, getAllWorkouts}