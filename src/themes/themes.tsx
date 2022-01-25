import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    spacing:4,
    typography: {
      fontFamily:'CeraPro',
      heading:{
        fontSize:'36px',
        lineHeight:'45px',
        fontWeight:'bold'
      },
      subtitle1:{
        fontSize:'24px',
        lineHeight:'32px',
        fontWeight:'500'
      },
      subtitle2:{
        fontSize:'18px',
        lineHeight:'24px',
        fontWeight:'bold'
      },
      subtitle3:{
        fontSize:'18px',
        lineHeight:'24px',
      },
      body1:{
        fontSize:'16px',
        lineHeight:'24px',
        fontWeight:'bold'
      },
      body2:{
        fontSize:'16px',
        lineHeight:'24px',
        fontWeight:'400'
      },
      body3:{
        fontSize:'22px',
        lineHeight:'20px',
      },
      caption1:{
        fontSize:'14px',
        lineHeight:'22px',
      },
      caption2:{
        fontSize:'14px',
        lineHeight:'22px',
        fontWeight:'bold'
      },
      caption3:{
        fontSize:'14px',
        lineHeight:'18px',
      }
    },
    
    palette:{
      primary:{
        main:'#2CE080',
      },
      toggleTabs:{
        main:'#22C870'
      },
      primaryHover:{
        main:'#20BA68'
      },
      tabsHover:{
        main:'#E2F2E9'
      },
      borders:{
        main:'#BAC9CF'
      },
      footerIcons:{
        main:'#6C787F'
      },
      buttonBorder:{
        main:'#3A4649'
      },
      iconsColor:{
        main:'#042330'
      },
      secondary:{
        main:'#0365F2'
      },
      formBg:{
        main:'#C6DAF6'
      },
      bodyTextColor:{
        main:'#042330'
      },
      navTextColors:{
        main:'#03314B'
      },
      extraTextColor:{
        main:'#6D787E'
      },
      searchPlaceholder:{
        main:'#747575'
      },
      websiteBgColor:{
        main:'#F7F7F7'
      },
      footerBgColor:{
        main:'#F1F6F4'
      },
      contrastThreshold: 3,
    tonalOffset: 0.2,
    }
  });

  declare module '@mui/material/styles' {
    interface TypographyVariants {
      heading: React.CSSProperties;
      subtitle1: React.CSSProperties;
      subtitle2: React.CSSProperties;
      subtitle3: React.CSSProperties;
      body1: React.CSSProperties;
      body2: React.CSSProperties;
      body3: React.CSSProperties;
      caption1: React.CSSProperties;
      caption2: React.CSSProperties;
      caption3: React.CSSProperties;
    }
  
    interface TypographyVariantsOptions {
      heading?: React.CSSProperties;
      subtitle1?: React.CSSProperties;
      subtitle2?: React.CSSProperties;
      subtitle3?: React.CSSProperties;
      body1?: React.CSSProperties;
      body2?: React.CSSProperties;
      body3?: React.CSSProperties;
      caption1?: React.CSSProperties;
      caption2?: React.CSSProperties;
      caption3?: React.CSSProperties;
    }
  }
  
  declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
      heading: true;
      subtitle2: true;
      subtitle1: true;
      subtitle3: true;
      body1: true;
      body2: true;
      body3: true;
      caption1: true;
      caption2: true;
      caption3: true;
    }
  }

  declare module '@mui/material/styles'{
  interface Palette {
    primaryBtn:Palette['primary'];
    toggleTabs:Palette['primary'];
    primaryHover:Palette['primary'];
    tabsHover:Palette['primary'];
    borders:Palette['primary'];
    footerIcons:Palette['primary'];
    buttonBorder:Palette['primary'];
    iconsColor:Palette['primary'];
    formBg:Palette['primary'];
    bodyTextColor:Palette['primary'];
    navTextColors:Palette['primary'];
    extraTextColor:Palette['primary'];
    searchPlaceholder:Palette['primary'];
    websiteBgColor:Palette['primary'];
    footerBgColor:Palette['primary'];
  }
  interface PaletteOptions {
    primaryBtn?:PaletteOptions['primary'];
    toggleTabs?: PaletteOptions['primary'];
    primaryHover?:PaletteOptions['primary'];
    tabsHover?:PaletteOptions['primary'];
    borders?:PaletteOptions['primary'];
    footerIcons?:PaletteOptions['primary'];
    buttonBorder?:PaletteOptions['primary'];
    iconsColor?:PaletteOptions['primary'];
    formBg?:PaletteOptions['primary'];
    bodyTextColor?:PaletteOptions['primary'];
    navTextColors?:PaletteOptions['primary'];
    extraTextColor?:PaletteOptions['primary'];
    searchPlaceholder?:PaletteOptions['primary'];
    websiteBgColor?:PaletteOptions['primary'];
    footerBgColor?:PaletteOptions['primary'];
  }
  }

  declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      primaryBtn:true;
    toggleTabs?:true;
    primaryHover:true;
    tabsHover:true;
    borders:true;
    footerIcons:true;
    buttonBorder:true;
    iconsColor:true;
    formBg:true;
    bodyTextColor:true;
    navTextColors:true;
    extraTextColor:true;
    searchPlaceholder:true;
    websiteBgColor:true;
    footerBgColor:true;
    }
  }

