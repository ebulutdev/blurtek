import { formatDate } from '../utils/dateUtils.jsx';

const EnterpriseDetailModal = ({ enterprise, onClose, onToggleStatus, onDelete, onEdit }) => {
    if (!enterprise) return null;

    return (
        <div className="modal modal-open">
            <div className="modal-box max-w-4xl">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg">Şirket Detayları</h3>
                    <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost">✕</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Sol Kolon */}
                    <div className="space-y-4">
                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Şirket Adı</span>
                            </label>
                            <p className="text-lg">{enterprise.title}</p>
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Telefon</span>
                            </label>
                            <p>{enterprise.phone}</p>
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">E-posta</span>
                            </label>
                            <p>{enterprise.email}</p>
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Bakiye</span>
                            </label>
                            <p className="text-lg font-bold text-primary">
                                {enterprise.balance?.toLocaleString('tr-TR', { 
                                    minimumFractionDigits: 2, 
                                    maximumFractionDigits: 2 
                                })} ₺
                            </p>
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Vergi Numarası</span>
                            </label>
                            <p>{enterprise.taxNumber}</p>
                        </div>
                    </div>

                    {/* Sağ Kolon */}
                    <div className="space-y-4">
                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Vergi Dairesi</span>
                            </label>
                            <p>{enterprise.taxDistrict} / {enterprise.taxProvince}</p>
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Oluşturulma Tarihi</span>
                            </label>
                            <p>{formatDate(enterprise.createdAt)}</p>
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Durum</span>
                            </label>
                            <div className="flex items-center space-x-2">
                                <div className={`badge ${enterprise.verified ? 'badge-success' : 'badge-warning'}`}>
                                    {enterprise.verified ? 'Doğrulandı' : 'Doğrulanmadı'}
                                </div>
                                <div className={`badge ${enterprise.disabled ? 'badge-error' : 'badge-success'}`}>
                                    {enterprise.disabled ? 'Devre Dışı' : 'Aktif'}
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Adres</span>
                            </label>
                            <p className="whitespace-pre-wrap">{enterprise.address}</p>
                        </div>
                    </div>
                </div>

                {/* Aksiyon Butonları */}
                <div className="modal-action">
                    <div className="flex space-x-2">
                        <button
                            onClick={() => onEdit(enterprise)}
                            className="btn btn-outline btn-primary"
                        >
                            Düzenle
                        </button>
                        <button
                            onClick={() => onToggleStatus(enterprise.id)}
                            className={`btn ${enterprise.disabled ? 'btn-success' : 'btn-warning'}`}
                        >
                            {enterprise.disabled ? 'Aktifleştir' : 'Devre Dışı Bırak'}
                        </button>
                        <button
                            onClick={() => onDelete(enterprise.id)}
                            className="btn btn-error"
                        >
                            Sil
                        </button>
                        <button
                            onClick={onClose}
                            className="btn"
                        >
                            Kapat
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnterpriseDetailModal;
