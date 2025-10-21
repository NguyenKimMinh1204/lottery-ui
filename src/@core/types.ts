export type Mode = 'light' | 'dark'

export type NavLink = {
  path?: string
  title: string
  action?: string
  subject?: string
  disabled?: boolean
  badgeContent?: string
  externalLink?: boolean
  openInNewTab?: boolean
  icon?: string | string[]
  badgeColor?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
  navLink?: NavLink
}

export type NavSectionTitle = {
  sectionTitle: string
  action?: string
  subject?: string
}

export type NavGroup = {
  icon?: string | string[]
  title: string
  action?: string
  subject?: string
  badgeContent?: string
  badgeColor?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
  children?: (NavLink | NavGroup)[]
  navLink?: NavLink
}

export type VerticalNavItemsType = (NavLink | NavGroup | NavSectionTitle)[]

export type Settings = {
  mode: Mode
  skin: 'default' | 'bordered'
  appBar: 'fixed' | 'static' | 'hidden'
  footer: 'fixed' | 'static' | 'hidden'
  layout: 'vertical' | 'horizontal'
  navHidden: boolean
  menuTextTruncate: boolean
  navSubItemIcon: string
  verticalNavToggleType: 'accordion' | 'collapse'
  navCollapsed: boolean
  navigationSize: number
  collapsedNavigationSize: number
  afterVerticalNavMenuContentPosition: 'fixed' | 'static'
  beforeVerticalNavMenuContentPosition: 'fixed' | 'static'
  horizontalMenuToggle: 'click' | 'hover'
  horizontalMenuAnimation: boolean
  contentWidth: 'full' | 'boxed'
  disableRipple: boolean
  routingLoader: boolean
  responsiveFontSizes: boolean
  disableCustomizer: boolean
  toastPosition: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
}

export type SettingsContextValue = {
  settings: Settings
  saveSettings: (updatedSettings: Settings) => void
}

export type LayoutProps = {
  hidden: boolean
  settings: Settings
  children: React.ReactNode
  verticalNavItems: VerticalNavItemsType
  scrollToTop?: (props?: any) => React.ReactNode
  footerContent?: (props?: any) => React.ReactNode
  verticalAppBarContent?: (props?: any) => React.ReactNode
  verticalNavMenuContent?: (props?: any) => React.ReactNode
  verticalNavMenuBranding?: (props?: any) => React.ReactNode
  afterVerticalNavMenuContent?: (props?: any) => React.ReactNode
  beforeVerticalNavMenuContent?: (props?: any) => React.ReactNode
}

export type BlankLayoutProps = {
  children: React.ReactNode
}