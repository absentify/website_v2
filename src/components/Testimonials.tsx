'use client';

import React from 'react';
import Image from 'next/image';

const testimonial = {
    quote: 'Rollout in Stunden, nicht in Wochen. Weil absentify für Microsoft 365 entwickelt wurde, hat einfach alles sofort gepasst',
    quoteHighlight: ' – von der Kalendersynchronisation bis zur Vertreterregelung. Sogar unser IT-Team war beeindruckt.',
    author: 'Frank Köllisch',
    role: 'CEO',
    avatar: '/images/frankkoellisch.avif',
};

const Testimonials: React.FC = () => {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <blockquote>
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                        <span className="text-gray-900">&ldquo;{testimonial.quote}</span>
                        <span className="text-gray-400">{testimonial.quoteHighlight}&rdquo;</span>
                    </p>
                </blockquote>

                <div className="mt-10 flex flex-col items-center">
                    <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={64}
                        height={64}
                        className="rounded-full"
                    />
                    <div className="mt-4">
                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                        <div className="text-gray-500">{testimonial.role}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
