"use client"

import Link from "next/link"
import Image from "next/image"


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="row">
            <Link href="/">
                <div className="logo">
                    <Image
                        src="/assets/Asset1.svg"
                        alt="logo"
                        className="logo-img"
                        width={46} height={44}
                    />
                </div>
            </Link>
            </div>
        </nav>
    )
}

export default Navbar

