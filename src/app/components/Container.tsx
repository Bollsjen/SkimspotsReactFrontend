"use client";

import React, { useState, useEffect } from "react";


interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    fluid?: boolean,
    class?: string
  }

const styles = {
    container: {
        margin: "0 auto",
        maxWidth: "1350px",
        padding: "0 15px",
    },

    'container-fluid': {
        maxWidth: '100%'
    }
}

const Container: React.FC<ContainerProps> = ({children, fluid, class: customClass, ...rest}) => {
    const[isSmallScreen, setIsSmallScreen] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1200px)');
        const handleMediaChange = () => setIsSmallScreen(mediaQuery.matches)
        handleMediaChange()
        mediaQuery.addEventListener('change', handleMediaChange);
        return () => mediaQuery.removeEventListener('change', handleMediaChange);
    }, [])

    const containerStyle = {
        ...(fluid ? styles["container-fluid"] : styles.container)
    }

    return (
        <div className={customClass} style={containerStyle} {...rest}>
            {children}
        </div>
    )
}

export default Container;