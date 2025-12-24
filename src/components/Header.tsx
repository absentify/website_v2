'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3, HiChevronDown } from 'react-icons/hi2';

import { menuItems, trustBarItems, INavItem } from '@/data/menuItems';

const TrustBar: React.FC = () => {
    return (
        <div className="hidden lg:block bg-[#F7F7FD] py-[10px]">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {trustBarItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-[14px] font-medium text-[#1f2a37]">
                            <svg className="w-[18px] h-[18px] text-[#079455]" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const NavDropdown: React.FC<{ item: INavItem; isOpen: boolean; onToggle: () => void }> = ({ item, isOpen, onToggle }) => {
    return (
        <div className="relative">
            <button
                onClick={onToggle}
                className="flex items-center gap-1 text-[16px] font-semibold text-[#1f2a37] hover:text-[#5D5BD4] transition-colors"
            >
                {item.text}
                <HiChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                    {item.dropdown?.map((dropdownItem, index) => (
                        <Link
                            key={index}
                            href={dropdownItem.url}
                            className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                        >
                            <div className="font-medium text-gray-900">{dropdownItem.text}</div>
                            {dropdownItem.description && (
                                <div className="text-sm text-gray-500 mt-0.5">{dropdownItem.description}</div>
                            )}
                        </Link>
                    ))}
                </div>
            </Transition>
        </div>
    );
};

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleDropdownToggle = (itemText: string) => {
        setOpenDropdown(openDropdown === itemText ? null : itemText);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white">
            <TrustBar />

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex justify-between items-center h-[64px]">
                    {/* Logo */}
                    <Link href="/" className="flex items-center flex-shrink-0">
                        <Image
                            src="/images/absentify-logo.svg"
                            alt="absentify"
                            width={140}
                            height={28}
                            className="h-[26px] w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        {menuItems.map((item) => (
                            item.dropdown ? (
                                <NavDropdown
                                    key={item.text}
                                    item={item}
                                    isOpen={openDropdown === item.text}
                                    onToggle={() => handleDropdownToggle(item.text)}
                                />
                            ) : (
                                <Link
                                    key={item.text}
                                    href={item.url}
                                    className="text-[16px] font-semibold text-[#1f2a37] hover:text-[#5D5BD4] transition-colors"
                                >
                                    {item.text}
                                </Link>
                            )
                        ))}
                    </div>

                    {/* Desktop CTAs */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link
                            href="https://app.absentify.com/login"
                            className="px-3 py-2 text-[14px] font-medium text-[#384250] bg-white border border-[#D2D6DB] rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            Einloggen
                        </Link>
                        <Link
                            href="https://app.absentify.com/create-account"
                            className="px-3 py-2 text-[14px] font-medium bg-[#5D5BD4] text-white rounded-lg hover:bg-[#4845b0] transition-colors"
                        >
                            Kostenfrei nutzen
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        type="button"
                        className="lg:hidden p-2 text-gray-700 hover:text-gray-900"
                        aria-controls="mobile-menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? (
                            <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <HiBars3 className="h-6 w-6" aria-hidden="true" />
                        )}
                        <span className="sr-only">Menü öffnen</span>
                    </button>
                </nav>
            </div>

            {/* Mobile Menu */}
            <Transition
                show={isMobileMenuOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 -translate-y-2"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150 transform"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-2"
            >
                <div id="mobile-menu" className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="py-4 space-y-2">
                            {menuItems.map((item) => (
                                <div key={item.text}>
                                    {item.dropdown ? (
                                        <div>
                                            <button
                                                onClick={() => handleDropdownToggle(item.text)}
                                                className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-gray-900"
                                            >
                                                {item.text}
                                                <HiChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.text ? 'rotate-180' : ''}`} />
                                            </button>
                                            {openDropdown === item.text && (
                                                <div className="pl-4 space-y-2 pb-2">
                                                    {item.dropdown.map((dropdownItem, index) => (
                                                        <Link
                                                            key={index}
                                                            href={dropdownItem.url}
                                                            className="block py-2 text-gray-600 hover:text-gray-900"
                                                            onClick={toggleMobileMenu}
                                                        >
                                                            {dropdownItem.text}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.url}
                                            className="block py-3 text-gray-700 hover:text-gray-900"
                                            onClick={toggleMobileMenu}
                                        >
                                            {item.text}
                                        </Link>
                                    )}
                                </div>
                            ))}

                            <div className="pt-4 space-y-3 border-t border-gray-100">
                                <Link
                                    href="https://app.absentify.com"
                                    className="block w-full px-4 py-3 text-center text-gray-700 border border-gray-300 rounded-lg"
                                    onClick={toggleMobileMenu}
                                >
                                    Einloggen
                                </Link>
                                <Link
                                    href="https://app.absentify.com"
                                    className="block w-full px-4 py-3 text-center bg-primary text-white rounded-lg"
                                    onClick={toggleMobileMenu}
                                >
                                    Kostenfrei nutzen
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
