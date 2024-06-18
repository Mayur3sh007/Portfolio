import React from 'react'
import Headerbox from '../Headerbox'

const HeaderSection = () => {
    return (
        <div className="h-full w-full bg-neutral-950 relative flex flex-col antialiased max-md:flex-col" id="header">
            <Headerbox />
        </div>
    )
}

export default HeaderSection