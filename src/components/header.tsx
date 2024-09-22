"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon, Moon, Sun, Github, Globe } from 'lucide-react'

const navItems = [
    // { href: '/', label: 'Home' },
    // { href: '/about', label: 'About' },
    { href: '/companies', label: 'Companies' },
    { href: '/report', label: 'Report a Company' },
    { href: '/resources', label: 'Resources' },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { setTheme, theme } = useTheme()

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-white">
            <div className="container mx-auto px-4 py-8 flex h-14 items-center">
                <div className="mr-4 hidden md:flex">

                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="hidden text-black font-bold sm:inline-block">FraudGuard</span>
                    </Link>

                    <nav className="flex items-center space-x-6 text-sm">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="transition-colors hover:text-foreground/80 text-foreground"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                        >
                            <MenuIcon className="h-6 w-6" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="pr-0">
                        <SheetHeader>
                            <SheetTitle>Navigation</SheetTitle>
                            <SheetDescription>
                                Access different sections of FraudGuard
                            </SheetDescription>
                        </SheetHeader>
                        <nav className="flex flex-col gap-4 mt-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block px-2 py-1 text-lg"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>

                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <Input
                            placeholder="Search..."
                            className="hidden md:inline-flex shadow-none"
                        />
                    </div>
                    <nav className="flex items-center">
                        <Link href="https://github.com/yourusername/fraudguard" target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon" className="mr-2">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Button>
                        </Link>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="mr-2">
                                    <Globe className="h-5 w-5" />
                                    <span className="sr-only">Select Language</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>English</DropdownMenuItem>
                                <DropdownMenuItem>Español</DropdownMenuItem>
                                <DropdownMenuItem>Français</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button
                            variant="ghost"
                            size="icon"
                            aria-label="Toggle Theme"
                            className="mr-6"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        >
                            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle Theme</span>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}
