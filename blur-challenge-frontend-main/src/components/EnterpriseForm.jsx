import { useState, useEffect } from 'react';
import { validateForm } from '../utils/validation.jsx';

const EnterpriseForm = ({ onSubmit, onCancel, initialData = null, isEdit = false }) => {
    const [formData, setFormData] = useState({
        title: '',
        phone: '',
        email: '',
        balance: '',
        address: '',
        taxNumber: '',
        taxProvince: '',
        taxDistrict: ''
    });
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        if (initialData) {
            setFormData({
                title: initialData.title || '',
                phone: initialData.phone || '',
                email: initialData.email || '',
                balance: initialData.balance?.toString() || '',
                address: initialData.address || '',
                taxNumber: initialData.taxNumber?.toString() || '',
                taxProvince: initialData.taxProvince || '',
                taxDistrict: initialData.taxDistrict || ''
            });
        }
    }, [initialData]);

    useEffect(() => {
        const validation = validateForm(formData);
        setErrors(validation.errors);
        setIsValid(validation.isValid);
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            const submitData = {
                ...formData,
                balance: parseFloat(formData.balance),
                taxNumber: parseInt(formData.taxNumber)
            };
            onSubmit(submitData);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Şirket Adı */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-gray-700">Şirket Adı *</span>
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className={`input input-bordered text-gray-900 placeholder-gray-500 ${errors.title ? 'input-error border-red-500' : 'border-gray-300 focus:border-blue-500'}`}
                        placeholder="Şirket adını giriniz"
                    />
                    {errors.title && <span className="text-red-600 text-sm font-medium">{errors.title}</span>}
                </div>

                {/* Telefon */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold text-gray-700">Telefon *</span>
                    </label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`input input-bordered text-gray-900 placeholder-gray-500 ${errors.phone ? 'input-error border-red-500' : 'border-gray-300 focus:border-blue-500'}`}
                        placeholder="90xxxxxxxxxx"
                    />
                    {errors.phone && <span className="text-red-600 text-sm font-medium">{errors.phone}</span>}
                </div>

                {/* E-posta */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">E-posta *</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`input input-bordered ${errors.email ? 'input-error' : ''}`}
                        placeholder="ornek@email.com"
                    />
                    {errors.email && <span className="text-error text-sm">{errors.email}</span>}
                </div>

                {/* Bakiye */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Bakiye (TL) *</span>
                    </label>
                    <input
                        type="number"
                        name="balance"
                        value={formData.balance}
                        onChange={handleChange}
                        step="0.01"
                        min="0"
                        className={`input input-bordered ${errors.balance ? 'input-error' : ''}`}
                        placeholder="0.00"
                    />
                    {errors.balance && <span className="text-error text-sm">{errors.balance}</span>}
                </div>

                {/* Vergi Numarası */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Vergi Numarası *</span>
                    </label>
                    <input
                        type="text"
                        name="taxNumber"
                        value={formData.taxNumber}
                        onChange={handleChange}
                        className={`input input-bordered ${errors.taxNumber ? 'input-error' : ''}`}
                        placeholder="1234567890"
                    />
                    {errors.taxNumber && <span className="text-error text-sm">{errors.taxNumber}</span>}
                </div>

                {/* Vergi Dairesi İli */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Vergi Dairesi İli *</span>
                    </label>
                    <input
                        type="text"
                        name="taxProvince"
                        value={formData.taxProvince}
                        onChange={handleChange}
                        className={`input input-bordered ${errors.taxProvince ? 'input-error' : ''}`}
                        placeholder="İstanbul"
                    />
                    {errors.taxProvince && <span className="text-error text-sm">{errors.taxProvince}</span>}
                </div>

                {/* Vergi Dairesi İlçesi */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Vergi Dairesi İlçesi *</span>
                    </label>
                    <input
                        type="text"
                        name="taxDistrict"
                        value={formData.taxDistrict}
                        onChange={handleChange}
                        className={`input input-bordered ${errors.taxDistrict ? 'input-error' : ''}`}
                        placeholder="Kadıköy"
                    />
                    {errors.taxDistrict && <span className="text-error text-sm">{errors.taxDistrict}</span>}
                </div>
            </div>

            {/* Adres */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Adres *</span>
                </label>
                <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`textarea textarea-bordered h-24 ${errors.address ? 'textarea-error' : ''}`}
                    placeholder="Şirket adresini giriniz"
                />
                {errors.address && <span className="text-error text-sm">{errors.address}</span>}
            </div>

            {/* Butonlar */}
            <div className="flex justify-end space-x-2 pt-4">
                <button
                    type="button"
                    onClick={onCancel}
                    className="btn btn-outline"
                >
                    İptal
                </button>
                <button
                    type="submit"
                    disabled={!isValid}
                    className="btn btn-primary"
                >
                    {isEdit ? 'Güncelle' : 'Onay'}
                </button>
            </div>
        </form>
    );
};

export default EnterpriseForm;
