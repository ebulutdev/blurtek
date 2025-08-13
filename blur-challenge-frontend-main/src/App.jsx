import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { EnterpriseProvider } from './contexts/EnterpriseContext.jsx';
import Enterprises from './routes/Enterprises.jsx';

function App() {
    return (
        <Router>
            <EnterpriseProvider>
                <div className="min-h-screen bg-gray-100">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/enterprises" element={<Enterprises />} />
                    </Routes>
                </div>
            </EnterpriseProvider>
        </Router>
    );
}

function HomePage() {
    return (
        <div className="flex w-full h-screen justify-center items-center text-gray-800 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className='flex flex-col items-center w-full max-w-[1280px] gap-6'>

                <div className='flex flex-col w-full max-w-[900px] p-6 px-4 md:px-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200'>
                    <span className='text-2xl font-bold text-gray-900 mb-2'>Blur Teknoloji</span>
                    <span className='text-lg font-semibold text-gray-700'>Tam Zamanlı Full-Stack Pozisyonu</span>
                    <span className='font-semibold text-gray-600'>Kodlama Mülakatı</span>
                </div>

                <div className='flex flex-col w-full max-w-[900px] p-6 px-4 md:px-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200'>
                    <span className="text-gray-700 mb-2">Bu proje, Blur Teknoloji için geliştirilmiş modern bir şirket yönetim sistemidir. Frontend React ve Backend .NET 9.0 teknolojileri kullanılarak geliştirilmiştir.
                    </span>
                    <span className="text-gray-600">Bana ve projeye dair detaylı bilgi için emircanbulut04@gmail.com mail atınız.<code className="bg-gray-100 px-2 py-1 rounded text-gray-800">README.md</code> dosyasında bulabilirsiniz.</span>
                    <span className='font-semibold text-gray-800 mt-2'>İyi Çalışmalar! Daha detaylı bilgi için <a href="https://şirketsayfası" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">Blur Teknoloji</a> sayfasını ziyaret edebilirsiniz.</span>
                </div>
                
                <div className='flex flex-col w-full max-w-[900px] p-6 px-4 md:px-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200'>
                    <span className="mb-4 text-gray-700">Şirketler sayfasına erişim sağlamak için butona tıklayınız.</span>
                    <Link 
                        to="/enterprises" 
                        className="btn btn-primary btn-lg w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border-0 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        Şirketler Sayfasına Git
                    </Link>
                </div>
            </div>
        </div>
    );
}



export default App;
