'use client';
import { usePathname } from 'next/navigation';

export default function getToken() {
    const path = usePathname();
    const token = path.split('/')[3]
    return token
}

