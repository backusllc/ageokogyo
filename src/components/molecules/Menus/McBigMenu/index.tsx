import React, { useContext, FC } from 'react'
import { Link } from 'gatsby'
import { navLinks, li, button, caret, clink, a } from './index.css'
import { GatsbyContext } from '../../../../context/context'

export const McBigMenu: FC = () => {
    const { links } = useContext(GatsbyContext)
    const tempLinks = [
        ...new Set(
            links.map(link => {
                return link.page
            })
        ),
    ]

    return (
        <ul className={navLinks}>
            {tempLinks.map((page, index) => {
                return (
                    <li className={li}>
                        <button className={button}>{page}</button>
                        <div className={`${clink} clink`}>
                            {links.map((link, index) => {
                                const { url, label, icon } = link
                                if (link.page === page) {
                                    return (
                                        <Link to={url} key={index} >
                                            {icon}
                                            {label}

                                        </Link>
                                    )
                                }
                            })}
                            <div className={caret}></div>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
