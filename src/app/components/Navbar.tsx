"use client"

import { useState, useEffect } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import NavbarProps from '@/interface/NavbarProps'

export default function Navbar({className = ''}: NavbarProps){
    const [isScrolled, setIsScrolled] = useState(false)
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navigation = [
        { name: 'Browse spots', href: '#', current: true },
        { name: 'Map', href: '#', current: false },
        { name: 'Events', href: '#', current: false },
    ]
      
    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <Disclosure as="nav" className={classNames(
            "fixed w-full top-0 left-0 h-auto bg-zinc-700 sm:transition-all sm:duration-200 z-1",
            isScrolled ? 'sm:bg-opacity-100' : 'sm:bg-opacity-50',
            className
        )}>
            <div className="mx-auto max-w-7xl px-2 h-full sm:px-6 lg:px-8">
                <div className="relative flex h-full items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 h-full items-center justify-center sm:items-stretch sm:justify-start">
                        <div className={classNames(
                            "flex shrink-0 items-center py-4",
                            "sm:transition-all sm:duration-200",
                            isScrolled ? 'sm:py-4' : 'sm:py-6'
                        )}>
                            <a href="/">
                                <img
                                    alt="Your Company"
                                    src="/images/Logo-text.png"
                                    className="h-8 w-auto"
                                />
                            </a>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex flex-1">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            'sm:hover:bg-gray-700 text-gray-300 hover:text-white',
                                            'px-3 text-sm font-medium',
                                            'h-full flex items-center',
                                            isScrolled ? 'sm:hover:bg-opacity-100' : 'sm:hover:bg-opacity-50'
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}