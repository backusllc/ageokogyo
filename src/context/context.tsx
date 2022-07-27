import React, { useState, FC } from 'react'
import navlinks from '../constants/navlink'

interface Props {
  isSidebarOpen: boolean,
  links: {
    page: string,
    label: string,
    url: string,
    icon: JSX.Element,
  }[],
  showSidebar: () => void,
  hideSidebar: () => void,
}

const GatsbyContext = React.createContext({} as Props)

const GatsbyProvider: FC = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [links, setLinks] = useState(navlinks)

  const showSidebar = () => {
    setIsSidebarOpen(true)
  }
  const hideSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <GatsbyContext.Provider
      value={{ isSidebarOpen, links, showSidebar, hideSidebar }}
    >
      {children}
    </GatsbyContext.Provider >
  )
}

export { GatsbyContext, GatsbyProvider }
