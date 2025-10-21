// Next Imports
import { Inter } from 'next/font/google'

// MUI Imports
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { Mode } from '@core/types'

// Theme Options Imports
import overrides from './overrides'
import colorSchemes from './colorSchemes'
import spacing from './spacing'
import shadows from './shadows'
import customShadows from './customShadows'
import typography from './typography'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'] })

const theme = (mode: Mode, direction: Theme['direction']): Theme => {
  const colorScheme = colorSchemes()[mode]
  
  return {
    direction,
    components: overrides(),
    palette: colorScheme.palette,
    ...spacing,
    shape: {
      borderRadius: 6
    },
    shadows: shadows(mode),
    typography: typography(inter.style.fontFamily),
    customShadows: customShadows(mode)
  } as unknown as Theme
}

export default theme
