export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validatePhone = (phone) => {
    const phoneRegex = /^90\d{10}$/;
    return phoneRegex.test(phone);
};

export const validateTaxNumber = (taxNumber) => {
    const taxNumberRegex = /^\d{10}$/;
    return taxNumberRegex.test(taxNumber);
};

export const validateBalance = (balance) => {
    const num = parseFloat(balance);
    return !isNaN(num) && num >= 0 && num.toString().split('.')[1]?.length <= 2;
};

export const validateRequired = (value) => {
    return value && value.trim().length > 0;
};

export const validateForm = (formData) => {
    const errors = {};

    if (!validateRequired(formData.title)) {
        errors.title = 'Şirket adı gereklidir';
    }

    if (!validateRequired(formData.phone)) {
        errors.phone = 'Telefon numarası gereklidir';
    } else if (!validatePhone(formData.phone)) {
        errors.phone = 'Telefon numarası 90 ile başlamalı ve 12 haneli olmalıdır';
    }

    if (!validateRequired(formData.email)) {
        errors.email = 'E-posta adresi gereklidir';
    } else if (!validateEmail(formData.email)) {
        errors.email = 'Geçerli bir e-posta adresi giriniz';
    }

    if (!validateRequired(formData.address)) {
        errors.address = 'Adres gereklidir';
    }

    if (!validateRequired(formData.taxNumber)) {
        errors.taxNumber = 'Vergi numarası gereklidir';
    } else if (!validateTaxNumber(formData.taxNumber)) {
        errors.taxNumber = 'Vergi numarası 10 haneli olmalıdır';
    }

    if (!validateRequired(formData.taxProvince)) {
        errors.taxProvince = 'Vergi dairesi ili gereklidir';
    }

    if (!validateRequired(formData.taxDistrict)) {
        errors.taxDistrict = 'Vergi dairesi ilçesi gereklidir';
    }

    if (!validateBalance(formData.balance)) {
        errors.balance = 'Geçerli bir bakiye giriniz (en fazla 2 ondalık basamak)';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};
