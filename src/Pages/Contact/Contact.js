import React from 'react';
import logo from '../../../src/assets/image.png'

const Contact = () => {
    return (
        // <div data-theme="night" className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 my-10 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
        //     <div className="flex flex-col justify-between">
        //         <div className="space-y-2 ">
        //             <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-white">Let's talk!</h2>
        //             <p className='text-lg pt-8 text-white'>Chandpur, Bangladesh</p>
        //             <p className='text-lg py-4 text-white'>01884008408</p>
        //             <p className='text-lg  text-white'>mohsinbd862554@gmail.com</p>
        //         </div>

        //     </div>

        //     <form action="https://formsubmit.co/e6d05d8a152f42ca835d606358539e73" method="POST" novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
        //         <div>
        //             <label for="name" className="text-sm">Full name</label>
        //             <input name="name" type="text" placeholder="" className="w-full p-3 border border-primary rounded dark:bg-gray-800" />
        //         </div>
        //         <div>
        //             <label for="email" className="text-sm">Email</label>
        //             <input name="email" type="email" className="w-full p-3 border border-primary rounded dark:bg-gray-800" />
        //         </div>
        //         <div>
        //             <label for="message" className="text-sm">Message</label>
        //             <textarea name="message" rows="3" className="w-full p-3 border border-primary rounded dark:bg-gray-800"></textarea>
        //         </div>
        //         <button type="submit" className="w-full btn btn-success btn-outline p-3 text-sm font-bold tracking-wide uppercase rounded">Submit</button>
        //     </form>
        // </div>
        <section className="py-20 dark:bg-gray-800 dark:text-gray-50">
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div className="py-6 md:py-0 md:px-6">
                    <h1 className="text-4xl font-bold">Let's talk!</h1>
                    <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                    <div className="space-y-4 mt-4">
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                            </svg>
                            <span>Chandpur, Bangladesh</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            <span>01884008408</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <span>mohsinbd862554@gmail.com</span>
                        </p>
                    </div>
                </div>
                <form action="https://formsubmit.co/e6d05d8a152f42ca835d606358539e73" method="POST" novalidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                    <label className="block">
                        <span className="mb-1">Full name</span>
                        <input name='name' type="text" placeholder="Leroy Jenkins" className="block p-4 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Email address</span>
                        <input name='email' type="email" placeholder="leroy@jenkins.com" className="block p-4 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Message</span>
                        <textarea name='message' rows="4" className="block p-4 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"></textarea>
                    </label>
                    <button type="submit" className="w-full btn btn-success btn-outline p-3 text-sm font-bold tracking-wide uppercase rounded">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;