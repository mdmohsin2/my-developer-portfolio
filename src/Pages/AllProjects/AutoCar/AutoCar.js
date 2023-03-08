import React from 'react';

const AutoCar = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-50">Website Name : Auto Car</h2>
                        <p className="max-w-3xl mx-auto mt-4 text-xl text-center  dark:text-gray-400"><a className='text-cyan-400' href='https://assignment-12-aa21d.web.app/' target='_blank'>Live Website</a>  || <a className='text-cyan-400' href='https://github.com/mdmohsin2/AutoCar-client-side' target='_blank'>Github (Client side)</a> || <a className='text-cyan-400' href='https://github.com/mdmohsin2/AutoCar-Server-Side' target='_blank'>Github (Server side)</a></p>
                    </div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-50">Features of this project</h3>
                            <p className="mt-3 text-lg dark:text-gray-400">Technology used : React | React router Dom | Firebase | Express JS | Tailwind CSS | MongoDB | Toast.</p>
                            <div className="mt-12 space-y-12">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        {/* <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Per ei quaeque sensibus</h4> */}
                                        <p className="mt-2 dark:text-gray-400">This is single page application with firebase authentication and stripe payment system.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        {/* <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Cu imperdiet posidonium sed</h4> */}
                                        <p className="mt-2 dark:text-gray-400">There are three types of users Buyer, Seller, Admin, individual dashboard for buyer seller and admin.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        {/* <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Nulla omittam sadipscing mel ne</h4> */}
                                        <p className="mt-2 dark:text-gray-400">Buyers can buy or reports any products, Seller can add, remove, advertise and track their products,
                                            and the Admin can remove any reported products or users.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        {/* <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Nulla omittam sadipscing mel ne</h4> */}
                                        <p className="mt-2 dark:text-gray-400">This site is user friendly and 100% secure.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        {/* <h4 className="text-lg font-medium leading-6 dark:text-gray-50">Nulla omittam sadipscing mel ne</h4> */}
                                        <p className="mt-2 dark:text-gray-400">Fixed bugs from existing websites and implemented enhancements that
                                            significantly improved web functionality and speed.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                            <img src='https://i.ibb.co/sQKCGxs/autocar.png' alt="" className="mx-auto rounded-lg shadow-lg h-[650px] w-[350px] dark:bg-gray-500" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AutoCar;