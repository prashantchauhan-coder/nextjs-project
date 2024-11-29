import React from 'react'
import styles from "@/styles/MultipleCard.module.scss";
import Cards from './Cards';

function MultipleCard() {
    return(
    <>
    <h1 id={styles.heading}>Design</h1>
    <div className={styles.multiple__card__card}>
    <Cards
        src="https://plus.unsplash.com/premium_photo-1731021470631-255095ce4045?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D"
        alt="BOTTEGA Image"
        href="https://www.instagram.com"
        description="IoT SQUARED"

    />
    <Cards
        src="https://images.unsplash.com/photo-1721332155545-c7a8005a2581?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D"
        alt="BOTTEGA Image"
        href="https://www.instagram.com"
        description="THE REAL HOTELS"

    />
    <Cards
        src="https://images.unsplash.com/photo-1720048171527-208cb3e93192?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D"
        alt="BOTTEGA Image"
        href="https://www.instagram.com"
        description="WEBSITE PORTFOLIO FOR DIWEIDT"
    />
</div>
<div className={styles.multiple__card__card}>
    <Cards
        src="https://plus.unsplash.com/premium_photo-1730857515548-4151598219f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D"
        alt="BOTTEGA Image"
        href="https://www.instagram.com"
        description="OMEGA CLEARSPACE"
        shift="https://www.instagram.com"
    />

    <Cards
        src="https://images.unsplash.com/photo-1719937051176-9b98352a6cf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Nnx8fGVufDB8fHx8fA%3D%3D"
        alt="BOTTEGA Image"
        href="https://www.instagram.com"
        description="CRFTED"

    />
    <Cards
        src="https://images.unsplash.com/photo-1730033145309-1ae0ff9acd82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D"
        alt="BOTTEGA Image"
        href="https://www.instagram.com"
        description="BOOTON TYPESPACE"

    />
</div>
<div className={styles.multiple__card__card}>
    <Cards
        src="https://images.unsplash.com/photo-1719937206300-fc0dac6f8cac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDV8fHxlbnwwfHx8fHw%3D"
        alt="BOTTEGA Image"
        href="https://www.instagram.com"
        description="SHIFT ROBOTICS"

    />
    <Cards
        src="https://images.unsplash.com/photo-1719937050446-a121748d4ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjV8fHxlbnwwfHx8fHw%3D"
        alt="BOTTEGA Image"
        href="https://www.instagram.com"
        description="WAX&WANE"

    />
    <Cards
        src="https://images.unsplash.com/photo-1721332153289-0c46dc38981b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMzV8fHxlbnwwfHx8fHw%3D"
        alt="BOTTEGA Image"
        href="https://www.instagram.com"
        description="TAG HEUER X KITH"

    />
</div>
</>
)
}

export default MultipleCard