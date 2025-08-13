import { createContext, useContext, useState, useEffect } from 'react';
import { getEnterprises, createEnterprise, updateEnterprise, toggleEnterpriseStatus, deleteEnterprise } from '../requests/enterprise-requests.jsx';

const EnterpriseContext = createContext();

export const useEnterprise = () => {
    const context = useContext(EnterpriseContext);
    if (!context) {
        throw new Error('useEnterprise must be used within an EnterpriseProvider');
    }
    return context;
};

export const EnterpriseProvider = ({ children }) => {
    const [enterprises, setEnterprises] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchEnterprises = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getEnterprises();
            setEnterprises(data);
        } catch (err) {
            setError(err.message || 'Şirketler yüklenirken hata oluştu');
        } finally {
            setLoading(false);
        }
    };

    const addEnterprise = async (enterpriseData) => {
        setLoading(true);
        setError(null);
        try {
            const newEnterprise = await createEnterprise(enterpriseData);
            setEnterprises(prev => [newEnterprise, ...prev]);
            return newEnterprise;
        } catch (err) {
            setError(err.message || 'Şirket oluşturulurken hata oluştu');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const updateEnterpriseById = async (id, enterpriseData) => {
        setLoading(true);
        setError(null);
        try {
            await updateEnterprise(id, enterpriseData);
            setEnterprises(prev => 
                prev.map(enterprise => 
                    enterprise.id === id 
                        ? { ...enterprise, ...enterpriseData }
                        : enterprise
                )
            );
        } catch (err) {
            setError(err.message || 'Şirket güncellenirken hata oluştu');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const toggleStatus = async (id) => {
        setLoading(true);
        setError(null);
        try {
            const result = await toggleEnterpriseStatus(id);
            setEnterprises(prev => 
                prev.map(enterprise => 
                    enterprise.id === id 
                        ? { ...enterprise, disabled: result.disabled }
                        : enterprise
                )
            );
            return result;
        } catch (err) {
            setError(err.message || 'Şirket durumu değiştirilirken hata oluştu');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const removeEnterprise = async (id) => {
        setLoading(true);
        setError(null);
        try {
            await deleteEnterprise(id);
            setEnterprises(prev => prev.filter(enterprise => enterprise.id !== id));
        } catch (err) {
            setError(err.message || 'Şirket silinirken hata oluştu');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEnterprises();
    }, []);

    const value = {
        enterprises,
        loading,
        error,
        fetchEnterprises,
        addEnterprise,
        updateEnterpriseById,
        toggleStatus,
        removeEnterprise,
    };

    return (
        <EnterpriseContext.Provider value={value}>
            {children}
        </EnterpriseContext.Provider>
    );
};
