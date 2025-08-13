
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

    // DELETE ve PATCH istekleri için özel kontrol
    if (response.status === 204) {
        return null; // NoContent() response
    }

    // Response body varsa JSON parse et
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
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
    } else {
        // JSON olmayan response için
        if (!response.ok) {
            throw {
                status: response.status,
                message: 'Request failed'
            }
        }
        return null;
    }
}