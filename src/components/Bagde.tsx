"use client"

import BadgeProps from "@/interface/BadgeProps"

export default function({text, bgVariant, bgModifier, textVariant, textModifier} : BadgeProps){

    const backgroundColor = () => {
        let style = 'bg-'
        style += bgVariant ? bgVariant : 'gray'
        style += bgModifier ? bgModifier !== '' ? '-' + bgModifier : '' : '-50'

        return style
    }

    const textColor = () => {
        let style = 'text-'
        style += textVariant ? textVariant : 'gray'
        style += textModifier ? textModifier !== '' ? '-' + textModifier : '' : '-600'

        return style
    }

    return (
        <span className={
            "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10 " +
            backgroundColor() + ' ' + textColor()
            }>
            {text}
        </span>
    )
}