import { useState } from 'react';
import { useEnterprise } from '../contexts/EnterpriseContext.jsx';
import EnterpriseForm from '../components/EnterpriseForm.jsx';
import EnterpriseDetailModal from '../components/EnterpriseDetailModal.jsx';
import { formatDate } from '../utils/dateUtils.jsx';

const Enterprises = () => {
    const { enterprises, loading, error, addEnterprise, updateEnterpriseById, toggleStatus, removeEnterprise } = useEnterprise();
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [selectedEnterprise, setSelectedEnterprise] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editingEnterprise, setEditingEnterprise] = useState(null);

    const handleCreateEnterprise = async (enterpriseData) => {
        try {
            await addEnterprise(enterpriseData);
            setShowCreateModal(false);
        } catch (error) {
            console.error('Şirket oluşturulurken hata:', error);
        }
    };

    const handleToggleStatus = async (id) => {
        try {
            await toggleStatus(id);
            if (selectedEnterprise && selectedEnterprise.id === id) {
                setSelectedEnterprise(prev => ({ ...prev, disabled: !prev.disabled }));
            }
        } catch (error) {
            console.error('Durum değiştirilirken hata:', error);
        }
    };

    const handleDeleteEnterprise = async (id) => {
        if (window.confirm('Bu şirketi silmek istediğinizden emin misiniz?')) {
            try {
                await removeEnterprise(id);
                setShowDetailModal(false);
                setSelectedEnterprise(null);
            } catch (error) {
                console.error('Şirket silinirken hata:', error);
            }
        }
    };

    const handleEditEnterprise = (enterprise) => {
        setEditingEnterprise(enterprise);
        setShowEditModal(true);
        setShowDetailModal(false);
    };

    const handleUpdateEnterprise = async (enterpriseData) => {
        try {
            await updateEnterpriseById(editingEnterprise.id, enterpriseData);
            setShowEditModal(false);
            setEditingEnterprise(null);
        } catch (error) {
            console.error('Şirket güncellenirken hata:', error);
        }
    };

    const handleRowClick = (enterprise) => {
        setSelectedEnterprise(enterprise);
        setShowDetailModal(true);
    };

    if (loading && enterprises.length === 0) {
        return (
            <div className="flex justify-center items-center h-64">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900">Şirketler</h1>
                <button
                    onClick={() => setShowCreateModal(true)}
                    className="btn btn-primary bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border-0 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Yeni Şirket
                </button>
            </div>

            {/* Error Message */}
            {error && (
                <div className="alert alert-error mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{error}</span>
                </div>
            )}

            {/* Enterprises Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="text-gray-700 font-semibold">Şirket Adı</th>
                                <th className="text-gray-700 font-semibold">Bakiye</th>
                                <th className="text-gray-700 font-semibold">Oluşturulma Tarihi</th>
                                <th className="text-gray-700 font-semibold">Doğrulandı</th>
                                <th className="text-gray-700 font-semibold">Aktif</th>
                            </tr>
                        </thead>
                        <tbody>
                            {enterprises.map((enterprise) => (
                                <tr
                                    key={enterprise.id}
                                    onClick={() => handleRowClick(enterprise)}
                                    className="cursor-pointer hover:bg-blue-50 transition-colors border-b border-gray-100"
                                >
                                    <td className="font-semibold text-gray-900 py-4">{enterprise.title}</td>
                                    <td className="font-bold text-green-600 py-4">
                                        {enterprise.balance?.toLocaleString('tr-TR', { 
                                            minimumFractionDigits: 2, 
                                            maximumFractionDigits: 2 
                                        })} ₺
                                    </td>
                                    <td className="text-gray-700 py-4">{formatDate(enterprise.createdAt)}</td>
                                    <td className="py-4">
                                        <div className={`badge ${enterprise.verified ? 'badge-success bg-green-100 text-green-800 border-green-200' : 'badge-warning bg-yellow-100 text-yellow-800 border-yellow-200'}`}>
                                            {enterprise.verified ? 'Evet' : 'Hayır'}
                                        </div>
                                    </td>
                                    <td className="py-4">
                                        <div className={`badge ${enterprise.disabled ? 'badge-error bg-red-100 text-red-800 border-red-200' : 'badge-success bg-green-100 text-green-800 border-green-200'}`}>
                                            {enterprise.disabled ? 'Hayır' : 'Evet'}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Empty State */}
                {enterprises.length === 0 && !loading && (
                    <div className="text-center py-12">
                        <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Henüz şirket bulunmuyor</h3>
                        <p className="text-gray-500 mb-4">İlk şirketinizi oluşturmak için yukarıdaki butona tıklayın.</p>
                        <button
                            onClick={() => setShowCreateModal(true)}
                            className="btn btn-primary"
                        >
                            Yeni Şirket Oluştur
                        </button>
                    </div>
                )}
            </div>

            {/* Create Enterprise Modal */}
            {showCreateModal && (
                <div className="modal modal-open">
                    <div className="modal-box max-w-4xl bg-white shadow-2xl border border-gray-200">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-2xl text-gray-900">Yeni Şirket Oluştur</h3>
                            <button 
                                onClick={() => setShowCreateModal(false)} 
                                className="btn btn-sm btn-circle btn-ghost hover:bg-gray-100"
                            >
                                ✕
                            </button>
                        </div>
                        <EnterpriseForm
                            onSubmit={handleCreateEnterprise}
                            onCancel={() => setShowCreateModal(false)}
                        />
                    </div>
                </div>
            )}

            {/* Edit Enterprise Modal */}
            {showEditModal && editingEnterprise && (
                <div className="modal modal-open">
                    <div className="modal-box max-w-4xl">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-lg">Şirket Düzenle</h3>
                            <button 
                                onClick={() => {
                                    setShowEditModal(false);
                                    setEditingEnterprise(null);
                                }} 
                                className="btn btn-sm btn-circle btn-ghost"
                            >
                                ✕
                            </button>
                        </div>
                        <EnterpriseForm
                            onSubmit={handleUpdateEnterprise}
                            onCancel={() => {
                                setShowEditModal(false);
                                setEditingEnterprise(null);
                            }}
                            initialData={editingEnterprise}
                            isEdit={true}
                        />
                    </div>
                </div>
            )}

            {/* Enterprise Detail Modal */}
            {showDetailModal && selectedEnterprise && (
                <EnterpriseDetailModal
                    enterprise={selectedEnterprise}
                    onClose={() => {
                        setShowDetailModal(false);
                        setSelectedEnterprise(null);
                    }}
                    onToggleStatus={handleToggleStatus}
                    onDelete={handleDeleteEnterprise}
                    onEdit={handleEditEnterprise}
                />
            )}
        </div>
    );
};

export default Enterprises;
