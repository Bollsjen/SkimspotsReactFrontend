'use client'

import SpotPageProps from "@/interface/SpotPageProps"
import Breadcrumb from "../Breadcrumb";

export default function SpotPage({ id, slug }: SpotPageProps) {
    const items = [
        {label: 'Denmark', href: '/browse/Denmark'},
        {label: 'Vester strand', href: '#'}
    ]

    return (
        <div>
            <Breadcrumb items={items}/>
            <h1>{id !== null ? id : slug !== null ? slug : 'Hmm'}</h1>
        </div>
    );
}