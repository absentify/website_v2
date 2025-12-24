'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { heroDetails } from '@/data/hero';

// Star icon for ratings
const StarIcon = ({ className = "", color = "#fbbf24" }: { className?: string; color?: string }) => (
    <svg className={className} viewBox="0 0 20 20" fill={color}>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
);

// Microsoft Logo (4 colored squares)
const MicrosoftLogo = () => (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
        <rect x="1" y="1" width="9" height="9" fill="#F25022"/>
        <rect x="11" y="1" width="9" height="9" fill="#7FBA00"/>
        <rect x="1" y="11" width="9" height="9" fill="#00A4EF"/>
        <rect x="11" y="11" width="9" height="9" fill="#FFB900"/>
    </svg>
);

// Capterra Star Icon
const CapterraIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 1L12.39 6.26L18.18 7.27L14.09 11.48L15.18 17.23L10 14.47L4.82 17.23L5.91 11.48L1.82 7.27L7.61 6.26L10 1Z" fill="#fbbf24"/>
    </svg>
);

// Trustpilot Icon (paper plane / arrow)
const TrustpilotIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3.5 2L18 10L3.5 18L6 10L3.5 2Z" fill="#00B67A"/>
    </svg>
);

const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative bg-white">
            {/* Spacer for fixed header (TrustBar + Nav) */}
            <div className="h-[102px] lg:h-[102px]" />

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12">
                <div className="text-center">
                    {/* Rating Badges */}
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-10">
                        {/* Microsoft */}
                        <div className="flex items-center gap-2">
                            <MicrosoftLogo />
                            <span className="text-[16px] font-medium text-[#384250]">4.9/5</span>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} className="w-[18px] h-[18px]" color="#3b82f6" />
                                ))}
                            </div>
                        </div>

                        {/* Capterra */}
                        <div className="flex items-center gap-2">
                            <CapterraIcon />
                            <span className="text-[16px] font-medium text-[#384250]">4.6/5</span>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} className="w-[18px] h-[18px]" color="#fbbf24" />
                                ))}
                            </div>
                        </div>

                        {/* Trustpilot */}
                        <div className="flex items-center gap-2">
                            <TrustpilotIcon />
                            <span className="text-[16px] font-medium text-[#384250]">5/5</span>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} className="w-[18px] h-[18px]" color="#00B67A" />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Headline */}
                    <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[#1f2a37] max-w-[900px] mx-auto leading-[1.3] tracking-[-0.02em]">
                        {heroDetails.heading}
                    </h1>

                    {/* Subheadline */}
                    <p className="mt-6 text-[18px] md:text-[20px] text-[#1f2a37] max-w-[680px] mx-auto leading-[1.5]">
                        {heroDetails.subheading}
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Link
                            href={heroDetails.primaryCTA.url}
                            className="inline-flex items-center justify-center px-4 py-2.5 text-[16px] font-medium text-white bg-[#5D5BD4] rounded-lg hover:bg-[#4845b0] transition-colors"
                        >
                            {heroDetails.primaryCTA.text}
                        </Link>
                        <Link
                            href={heroDetails.secondaryCTA.url}
                            className="inline-flex items-center justify-center px-4 py-2.5 text-[16px] font-medium text-[#384250] bg-white border-[1.5px] border-[#D2D6DB] rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            {heroDetails.secondaryCTA.text}
                        </Link>
                    </div>

                    {/* Trust Badge */}
                    <div className="mt-4 flex items-center justify-center gap-1.5 text-[#079455]">
                        <svg className="w-[18px] h-[18px]" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[14px] font-medium">{heroDetails.trustBadge}</span>
                    </div>

                    {/* Product Screenshot */}
                    <div className="mt-12 md:mt-16 relative">
                        <div className="relative mx-auto max-w-[1100px]">
                            {/* Main Screenshot */}
                            <div className="relative rounded-xl overflow-hidden">
                                <Image
                                    src={heroDetails.centerImageSrc}
                                    width={1200}
                                    height={800}
                                    quality={100}
                                    priority={true}
                                    alt="absentify Kalenderansicht"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
