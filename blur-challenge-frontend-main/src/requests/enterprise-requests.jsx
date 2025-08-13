import { simpleAPICall } from '../utils/requesting.jsx';

const API_BASE_URL = 'http://localhost:5153/api/enterprise';

export const getEnterprises = async () => {
    return await simpleAPICall({
        endpoint: API_BASE_URL,
        method: 'GET',
        options: {
            headers: {
                'Content-Type': 'application/json',
            },
        },
    });
};

export const getEnterprise = async (id) => {
    return await simpleAPICall({
        endpoint: `${API_BASE_URL}/${id}`,
        method: 'GET',
        options: {
            headers: {
                'Content-Type': 'application/json',
            },
        },
    });
};

export const createEnterprise = async (enterpriseData) => {
    return await simpleAPICall({
        endpoint: API_BASE_URL,
        method: 'POST',
        body: JSON.stringify(enterpriseData),
        options: {
            headers: {
                'Content-Type': 'application/json',
            },
        },
    });
};

export const updateEnterprise = async (id, enterpriseData) => {
    return await simpleAPICall({
        endpoint: `${API_BASE_URL}/${id}`,
        method: 'PUT',
        body: JSON.stringify(enterpriseData),
        options: {
            headers: {
                'Content-Type': 'application/json',
            },
        },
    });
};

export const toggleEnterpriseStatus = async (id) => {
    return await simpleAPICall({
        endpoint: `${API_BASE_URL}/${id}/toggle-status`,
        method: 'PATCH',
        options: {
            headers: {
                'Content-Type': 'application/json',
            },
        },
    });
};

export const deleteEnterprise = async (id) => {
    return await simpleAPICall({
        endpoint: `${API_BASE_URL}/${id}`,
        method: 'DELETE',
        options: {
            headers: {
                'Content-Type': 'application/json',
            },
        },
    });
};
