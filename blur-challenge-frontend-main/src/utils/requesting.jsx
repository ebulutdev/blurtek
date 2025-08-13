
export const simpleAPICall = async ({ endpoint, body = {}, method = "POST", options = {}, verbose = false }) => {
    const fetchOptions = {
        method: method,
        ...options,
        headers: {
            ...options.headers,
        },
    };
    
    // GET ve HEAD isteklerinde body gönderme
    if (method !== 'GET' && method !== 'HEAD' && body) {
        fetchOptions.body = body;
    }
    
    const response = await fetch(endpoint, fetchOptions)

    const result = await response.json()
    if (!response.ok) {
        throw {
            status: response.status,
            message: result.detail
        }
    }
    else {
        if (verbose) {
            console.log(result.status, result.message)
        }
        return result.data
    }
}