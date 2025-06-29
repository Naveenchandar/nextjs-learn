import { LABELS } from "@/labels";
import Link from "next/link"

export const NavigationBar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    {LABELS.header.navbar.links.storeName}
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="text-white hover:text-gray-300">
                            {LABELS.header.navbar.links.all}
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-white hover:text-gray-300">
                            {LABELS.header.navbar.links.shirts}
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-white hover:text-gray-300">
                            {LABELS.header.navbar.links.stickers}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}