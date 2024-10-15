import { createTheme } from "@mui/material";
import { colors } from "@/utils/constant/colors";

export const Theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: ["Figtree", "sans-serif"].join(","),
    },
  },
  palette: {
    primary: {
      main: colors.brandPrimary[500],
      light: colors.brandPrimary[25],
    },
    secondary: {
      main: colors.brandSecondary[500],
    },
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          backgroundColor: colors.gray[50],
          border: `1px solid ${colors.gray[200]}`,
          transition: "border-color 0.3s, box-shadow 0.3s",
          "&:hover": {
            backgroundColor: colors.gray[100],
          },
          "&.Mui-focused": {
            backgroundColor: colors.gray[50], // Background color when focused
            borderColor: colors.brandPrimary[300], // Border color when focused
            boxShadow: `0 0 0 4px #92B7FF3D`,
          },
          "&.Mui-error": {
            borderColor: colors.error[500], // Change border color when error is true
          },
          "&.Mui-error.Mui-focused": {
            borderColor: colors.error[500], // Set border to red when both error and focused
            boxShadow: `0 0 0 4px #F044383D`, // Slight red shadow when error and focused
          },
          "&.Mui-disabled": {
            backgroundColor: colors.gray[100], // Set the background color when disabled
            borderColor: colors.gray[200], // Keep the border light when disabled
            boxShadow: "none", // Remove shadow when disabled
            pointerEvents: "none", // Prevent interaction when disabled
          },
        },
        underline: {
          "&:before": {
            borderBottom: "none",
          },
          "&:after": {
            borderBottom: "none", // Remove underline on focus
          },

          "&:not(.Mui-disabled):hover::before": {
            borderBottom: "none", // Disable underline when hovering
          },
          "&.Mui-disabled:before": {
            borderBottom: "none", // Remove underline when disabled
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: "14px", // Increase the font size of helper text
          fontWeight: 400,
          marginLeft: 0,
          "&.Mui-error": {
            color: colors.error[500], // Color for error messages
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: colors.gray[400],
          fontSize: "1rem",
          "&.Mui-focused": {
            color: colors.gray[400],
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          "&.Mui-selected": {
            background: `linear-gradient(242.65deg, ${colors.brandSecondary[800]} 10.34%, ${colors.brandSecondary[500]} 73.52%)`,
            color: colors.base.white,
            "& .MuiListItemIcon-root": {
              color: colors.base.white,
            },
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 22,
          color: colors.base.white,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: colors.brandPrimary[500],
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        contained: {
          borderRadius: 100,
        },
        outlined: {
          borderRadius: 100,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 8, // Adjust the height of the progress bar
          backgroundColor: colors.gray[50],
        },
        bar: {
          borderEndEndRadius: 5, // Border radius for the progress bar itself
          borderTopRightRadius: 5,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: "16px", // Match the border radius
          backgroundColor: colors.gray[50],
          border: `1px solid ${colors.gray[200]}`,
          transition: "border-color 0.3s, box-shadow 0.3s",
          "&:hover": {
            backgroundColor: colors.gray[100],
            border: `1px solid ${colors.gray[100]}`,
            borderRadius: "16px",
          },
          "&.Mui-focused": {
            backgroundColor: colors.gray[50], // Background color when focused
            borderColor: colors.brandPrimary[300], // Border color when focused
            boxShadow: `0 0 0 4px #92B7FF3D`, // Focus shadow effect
          },
          "&.Mui-error": {
            borderColor: colors.error[500], // Error border color
          },
          "&.Mui-error.Mui-focused": {
            borderColor: colors.error[500], // Set border to red when error and focused
            boxShadow: `0 0 0 4px #F044383D`, // Red shadow when error and focused
          },
        },
        icon: {
          color: colors.gray[400], // Change the dropdown arrow icon color
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 44,
          height: 24,
          padding: 0,
          display: "flex",
          "&:active": {
            "& .MuiSwitch-thumb": {
              width: 15,
            },
            "& .MuiSwitch-switchBase.Mui-checked": {
              transform: "translateX(20px)",
            },
          },
          "& .MuiSwitch-switchBase": {
            padding: 2,
            "&.Mui-checked": {
              transform: "translateX(21px)",
              color: "#fff",
              "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor: "#1890ff",
              },
            },
          },
          "& .MuiSwitch-thumb": {
            boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
            width: 20,
            height: 20,
            borderRadius: 10,
          },
          "& .MuiSwitch-track": {
            borderRadius: 24 / 2,
            opacity: 1,
            backgroundColor: "rgba(0,0,0,.25)",
            boxSizing: "border-box",
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          border: "none", // Remove default borders
          boxShadow: "none", // Remove default box-shadow
          "&:before": {
            display: "none", // Remove the dividing line between accordion items
          },
          "&.Mui-expanded": {
            margin: 0, // Remove default margin on expansion
          },
          borderBottom: `1px solid ${colors.gray[200]}`,
          paddingBottom: "20px",
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: "0", // Remove padding
          minHeight: "48px", // Adjust the header height
          "&.Mui-expanded": {
            minHeight: "48px", // Keep header height consistent when expanded
          },
        },
        content: {
          margin: 0, // Remove default margin
          "&.Mui-expanded": {
            margin: "12px 0", // Adjust margin when expanded
          },
        },
        expandIconWrapper: {
          color: colors.brandPrimary[500], // Arrow icon color
          "&.Mui-expanded": {
            transform: "rotate(180deg)", // Rotate arrow when expanded
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "16px", // Add padding to the details section
          backgroundColor: colors.gray[50], // Light background for details
          borderRadius: "16px", // Rounded corners
          marginTop: "8px", // Add margin between the header and details
          marginBottom: "10px",
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          overflow: "hidden",
          borderRadius: "9px",
          borderCollapse: "separate",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          whiteSpace: "nowrap",
          padding: "14px 12px 14px 12px",
          alignContent: "baseline",
          "&.MuiTableCell-head": {
            border: "none",
            background: colors.gray[50],
            fontWeight: 600,
            fontSize: 16,
          },

          "&.MuiTableCell-body": {
            borderBottom: `1px solid ${colors.gray[200]}`,
          },
        },
      },
    },
  },
});
