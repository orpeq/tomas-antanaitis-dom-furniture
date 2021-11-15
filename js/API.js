const baseURL = 'http://localhost:3000';

class API {
    static fetchFurniture = (success, failure) => {

        fetch(`${baseURL}/furniture`)
        .then(res => res.json())
        .then(success)
        .catch(failure)
    }

    static deleteFurniture = (id, success, failure) => {
        fetch(`${baseURL}/furniture/${id}`, { method: 'DELETE' })
        .then(res => res.ok ? success () : failure(res.statusText))
        .catch(failure)
    }
}

// API.fetchFurniture(
//     console.log,
//     console.error
// )

// API.deleteFurniture(
//     "1",
//     () => console.log('Baldas ištrintas sėkmingai'),
//     console.error
// )