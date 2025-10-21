// MUI Imports
import type { Theme } from '@mui/material/styles'

const overrides = () => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 6
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 6
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 6
        }
      }
    }
  }
}

export default overrides
