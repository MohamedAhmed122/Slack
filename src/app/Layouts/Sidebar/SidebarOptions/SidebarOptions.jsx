import React from 'react'

import './StyleSidebarOptions.css'

export default function SidebarOptions({Icon ,title}) {
    return (
        <div className='sidebar_options'>
            {Icon && <Icon  className='options_icon'  />}
            { Icon ? 
                    (<h4 className='title'>{title} </h4>)
                : 
                    (<h4 > <span className='hash'>#</span> {title}</h4>)
            }
        </div>
    )
}
