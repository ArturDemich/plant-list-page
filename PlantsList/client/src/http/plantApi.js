import { $host} from "./index";


export const createPlant = async (Plant) => {
    const {data} = await $host.post('api/plants', Plant)
    return data
}

export const fetchPlant = async (page, limit= 5) => {
    const {data} = await $host.get('api/plants', {params: {
            page
        }})
    return data
}

export const fetchOnePlant = async (id) => {
    const {data} = await $host.get('api/plants/' + id)
    return data
}
export const deletePlant = async (id) => {
    const {data} = await $host.delete('api/plants/' + id)
    return data
}
export const updatePlant = async (id, Plant) => {
    const {data} = await $host.put('api/plants/' +id, Plant)
    return data
}