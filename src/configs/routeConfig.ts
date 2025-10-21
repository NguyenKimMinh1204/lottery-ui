/**
 * Onboarding / Pre-loading screen show maximum in...
 */
export const globalLoadingMax = 6000 // in milliseconds

/**
 * Prefix path for Guest only
 */
export const guestPathConfigs = [
  '/login',
  '/register'
]

/**
 * Prefix path for All user: Guest and Logged-in User can access
 */
export const sharedPathConfigs = [
  '/forgot-password',
  '/forbidden',
  '/error',
  '/ref',
  '/banner'
]

export type RoleAbility = {action: string, object: string}

/**
 * Prefix path for each RoleName (Group-code) can access
 */
export const userRolePathConfigs: Record<string, RoleAbility> = {
  '/account-settings?tab=referer': {
    action: 'have',
    object: 'referral-code'
  },
  '/account-settings?tab=sub-user': {
    action: 'manage',
    object: 'sub-user'
  },
  '/deposit-wallet': {
    action: 'deposit',
    object: 'balance'
  },
  '/transfer-balance': {
    action: 'transfer',
    object: 'balance'
  },
  '/history?tab=referee-revenue': {
    action: 'read',
    object: 'referee-revenue'
  },
  '/history?tab=sub-user-revenue': {
    action: 'read',
    object: 'sub-user-revenue'
  },
  '/history?tab=wallet-history': {
    action: 'read',
    object: 'balance-history'
  }
}

