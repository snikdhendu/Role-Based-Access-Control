// import React from 'react';

const Contact = () => {
    return (
        <div className="bg-white" id="contact">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
                <div className="divide-y-2 divide-gray-200">
                    <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Get in touch</h2>
                        <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
                            {[
                                {
                                    name: 'Sales',
                                    email: 'sales@example.com',
                                    phone: '+1 (555) 123-4567',
                                },
                                {
                                    name: 'Support',
                                    email: 'support@example.com',
                                    phone: '+1 (555) 987-6543',
                                },
                                {
                                    name: 'Press',
                                    email: 'press@example.com',
                                    phone: '+1 (555) 321-9876',
                                },
                            ].map((department) => (
                                <div key={department.name}>
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">{department.name}</h3>
                                    <dl className="mt-2 text-base text-gray-500">
                                        <div>
                                            <dt className="sr-only">Email</dt>
                                            <dd>{department.email}</dd>
                                        </div>
                                        <div className="mt-1">
                                            <dt className="sr-only">Phone number</dt>
                                            <dd>{department.phone}</dd>
                                        </div>
                                    </dl>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
                        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Locations</h2>
                        <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:col-span-2 lg:mt-0">
                            {[
                                {
                                    city: 'Los Angeles',
                                    address: ['4556 Brendan Ferry', 'Los Angeles, CA 90210'],
                                },
                                {
                                    city: 'New York',
                                    address: ['886 Walter Streets', 'New York, NY 12345'],
                                },
                                {
                                    city: 'Toronto',
                                    address: ['7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
                                },
                                {
                                    city: 'London',
                                    address: ['114 Cobble Lane', 'London N1 2EF'],
                                },
                            ].map((location) => (
                                <div key={location.city}>
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">{location.city}</h3>
                                    <div className="mt-2 text-base text-gray-500">
                                        {location.address.map((line) => (
                                            <p key={line}>{line}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
