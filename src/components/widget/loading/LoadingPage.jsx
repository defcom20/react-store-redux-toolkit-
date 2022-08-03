const LoadingPage = () => {
    return (
        <>
            <div enter-class="opacity-0" enter-active-class="ease-out transition-medium" enter-to-class="opacity-100"
                leave-class="opacity-100" leave-active-class="ease-out transition-medium" leave-to-class="opacity-0">
                <div className={`z-10 fixed inset-0 transition-opacity`} >
                    <div className="absolute inset-0 bg-violet-800 opacity-50 flex items-center justify-center" tabIndex="0">
                        <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white z-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Cargando...
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoadingPage;