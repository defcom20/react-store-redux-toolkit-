const Card = () => {
    const arrayData = [
        { name: "Dinero de hoy", price: "S/53,000", percentage: "+55%", color: "text-green-500" },
        { name: "Usuarios de hoy", price: "2.300", percentage: "+3%", color: "text-green-500" },
        { name: "Nuevos Clientes", price: "+3.462", percentage: "-2%", color: "text-red-500" },
        { name: "Ventas", price: "S/103,430", percentage: "+5%", color: "text-green-500" },
    ]
    return (
        <>
            <div className="grid grid-cols-12 gap-4">
                {
                    arrayData.map((item, index) => {
                        return (
                            <div className='col-span-12 sm:col-span-6 lg:col-span-3' key={index}>
                                <div className="flex items-center justify-between shadow-md shadow-violet-200 py-2 px-4 rounded-2xl">
                                    <div className="left">
                                        <span className='text-gray-400 font-opensas text-sm'>{item.name}</span>
                                        <div className="flex items-center justify-start space-x-1 font-opensas font-bold">
                                            <span className="text-gray-600 text-lg">{item.price}</span>
                                            <span className={`text-sm ${item.color}`} >{item.percentage}</span>
                                        </div>
                                    </div>
                                    <div className="rifth">
                                        <div className="p-2 side-btn-hover">
                                            {
                                                index === 0 ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                                </svg> : index === 1 ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                                </svg> : index === 2 ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Card;