import data from '../../data/data.json'

export const pedirDatos = () => {
    return new Promise ((resolve, rejected) => {
        setTimeout(() => {
            resolve(data)
        }, 500)
    })
}

export const pedirItemPorId = (id) => {
    return new Promise((resolve, rejected) => {
        const item = data.find((el) => el.id === id)

        if (item) {
            resolve(item)
        } else {
            rejected ({
                error: "No se encontro el producto"
            })
        }
    })
}