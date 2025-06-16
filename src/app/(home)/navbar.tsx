'use client'
import {Poppins} from "next/font/google"
import Link from "next/link";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {usePathname} from "next/navigation";

const poppins = Poppins({
    subsets:["latin"],
    weight:["700"],
})

interface NavbarItemProps{
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
}
const NavbarItem = ({
    href,
    children,
    isActive
                    }:NavbarItemProps) => {
    return(
        <Button variant="outline"
                className={cn('bg-transparent hover:bg-transparent rounded-full border-transparent hover:border-primary px-3', isActive && 'bg-black text-white hover:bg-black hover:text-white')}
                asChild>
            <Link href={href}>
                {children}
            </Link>
        </Button>
    )
}

const NavbarItems = [
    {href: '/', children: 'Home'},
    {href: '/docs', children: 'Docs'},
    {href: '/about', children: 'About'},
]

export const Navbar = () => {
    const pathname = usePathname()
    return(
        <nav className={'h-20 flex border-b justify-between items-center bg-white'}>
            <Link href="/" className={'pl-6'}>
                <span className={cn('text-2xl font-semibold', poppins.className)}>ansible</span>
            </Link>

            <div className={'items-center gap-4 hidden lg:flex'}>
                {NavbarItems.map((item)=> (
                    <NavbarItem key={item.href} href={item.href} isActive={pathname === item.href}>
                        {item.children}
                    </NavbarItem>
                ))}
            </div>
        </nav>
    )
}