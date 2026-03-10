'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { heroDetails } from '@/data/hero';
import { useTrackingUrl } from '@/hooks/useTrackingUrl';

// Star icon for ratings
const StarIcon = ({ className = "", color = "#f59e0b" }: { className?: string; color?: string }) => (
    <svg className={className} viewBox="0 0 20 20" fill={color}>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
);

// Green star icon (for Capterra)
const GreenStarIcon = ({ className = "" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 20 20" fill="#22c55e">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
);

const Hero: React.FC = () => {
    const heroCta = useTrackingUrl(heroDetails.primaryCTA.url, 'hero_cta');

    return (
        <section id="hero" className="relative bg-white">
            {/* Spacer for fixed header (TrustBar + Nav) */}
            <div className="h-[104px] lg:h-[104px]" />

            <div className="max-w-[1280px] mx-auto px-6 pt-16 pb-0">
                <div className="text-center">
                    {/* Rating Badges */}
                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-10">
                        {/* Microsoft - gold stars */}
                        <div className="flex items-center gap-[8px]">
                            <Image
                                src="/images/microsoft_logo.svg"
                                alt="Microsoft"
                                width={21}
                                height={21}
                                className="w-[21px] h-[21px]"
                            />
                            <span className="text-[15px] font-medium text-[#6b7280]">4.9/5</span>
                            <div className="flex gap-[2px]">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} className="w-[16px] h-[16px]" color="#f59e0b" />
                                ))}
                            </div>
                        </div>

                        {/* Capterra - green star icon + green stars */}
                        <div className="flex items-center gap-[8px]">
                            <GreenStarIcon className="w-[20px] h-[20px]" />
                            <span className="text-[15px] font-medium text-[#6b7280]">4.6/5</span>
                            <div className="flex gap-[2px]">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} className="w-[16px] h-[16px]" color="#22c55e" />
                                ))}
                            </div>
                        </div>

                        {/* Trustpilot - blue icon + gold stars */}
                        <div className="flex items-center gap-[8px]">
                            <Image
                                src="/images/trustpilot.svg"
                                alt="Trustpilot"
                                width={22}
                                height={20}
                                className="w-[22px] h-[20px]"
                            />
                            <span className="text-[15px] font-medium text-[#6b7280]">5/5</span>
                            <div className="flex gap-[2px]">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} className="w-[16px] h-[16px]" color="#f59e0b" />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Headline */}
                    <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[#1f2a37] max-w-[860px] mx-auto leading-[1.3] tracking-[-0.02em]">
                        {heroDetails.heading}
                    </h1>

                    {/* Subheadline */}
                    <p className="mt-6 text-[18px] md:text-[20px] text-[#6b7280] max-w-[700px] mx-auto leading-[1.5]">
                        {heroDetails.subheading}
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Link
                            href={heroCta.href}
                            onClick={heroCta.onClick}
                            className="inline-flex items-center justify-center px-[16px] py-[10px] text-[16px] font-medium text-white bg-[#5D5BD4] rounded-lg hover:bg-[#4845b0] transition-colors"
                        >
                            {heroDetails.primaryCTA.text}
                        </Link>
                        <Link
                            href={heroDetails.secondaryCTA.url}
                            className="inline-flex items-center justify-center px-[16px] py-[10px] text-[16px] font-medium text-[#384250] bg-white border border-[#D2D6DB] rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            {heroDetails.secondaryCTA.text}
                        </Link>
                    </div>

                    {/* Trust Badge */}
                    <div className="mt-4 flex items-center justify-center gap-[6px] text-[#079455]">
                        <svg className="w-[16px] h-[16px]" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[14px] font-medium">{heroDetails.trustBadge}</span>
                    </div>

                    {/* Product Screenshot */}
                    <div className="mt-16 relative">
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
