const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className="pt-4">
                <div className="w-full px-6 mx-auto">
                    <div className="flex flex-wrap items-center -mx-3 lg:justify-between">
                        <div className="w-full max-w-full px-3 mt-0 shrink-0 xl:mb-6 lg:mb-0 lg:w-1/2 lg:flex-none">
                            <div className="leading-normal text-center text-size-sm text-slate-500 lg:text-left">
                                © {year},
                                hecho <i className="fa fa-heart" aria-hidden="true" /> por
                                <a href="https://www.creative-tim.com" className="font-semibold text-slate-700 mx-1">SAMA</a>
                                por una red mejor.
                            </div>
                        </div>
                        <div className="w-full max-w-full px-3 mt-0 shrink-0 lg:w-1/2 lg:flex-none">
                            <ul className="flex flex-wrap justify-center pl-0 mb-0 list-none lg:justify-end">
                                <li className="nav-item">
                                    <a href="https://www.creative-tim.com/license" className="block px-4 pt-0 pb-1 pr-0 font-normal transition-colors ease-soft-in-out text-size-sm text-violet-500">www.example.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;