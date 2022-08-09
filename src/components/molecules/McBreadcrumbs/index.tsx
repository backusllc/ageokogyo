import React from 'react'
import { Link } from 'gatsby'
import { breadcrumb, li, item } from './index.css'

interface Props {
    listItem: string,
    listUrl: string,
}

export const McBreadcrumbs = ({ listItem, listUrl }: Props) => {

    return (
        <ol className={breadcrumb} itemScope itemType='https://schema.org/BreadcrumbList' >
            <li className={li} itemProp="itemListElement" itemScope
                itemType="https://schema.org/ListItem">
                <Link itemProp="item" to="/">
                    <span className={item} itemProp="name">ホーム</span>
                </Link>
                <meta itemProp="position" content="1" />
            </li>
            <li itemProp="itemListElement" itemScope
                itemType="https://schema.org/ListItem">
                <Link itemProp="item" to={listUrl}>
                    <h1 className={item} itemProp="name">{listItem}</h1>
                </Link>
                <meta itemProp='position' content="2" />
            </li>
        </ol >
    )
}
