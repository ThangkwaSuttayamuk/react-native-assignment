// Color palette with light and dark mode support
export const colors = {
  button:{
    bg:{
      primary: {
        light: '#FFFFFF',
        dark: '#D3D3D3',
      },
      secondary: {
        light: '#00684E',
        dark: '#919192', 
      },
      inactive: {
        light: '#007b5c',
        dark: '#7d7d7d', 
      }
    },
    outline:{
      primary: {
        light: '#00684E',
        dark: '#919192',
      },
    }
  },
  background:{
    primary: {
      light: '#FAFAFA',
      dark: '#000000',
    },
    secondary: {
      light: '#FFFFFF',
      dark: '#494949',
    }
  },
  icon:{
    primary: {
      light: '#000000',
      dark: '#FFFFFF',
    },
    secondary: {
      light: '#FFFFFF',
      dark: '#494949',
    }
  },
  text:{
    primary: {
      light: '#000000',
      dark: '#FFFFFF',
    },
    secondary: {
      light: '#919192',
      dark: '#FAFAFA',
    },
    invert: {
      light: '#FFFFFF',
      dark: '#000000',
    }
  },
  error: {
    primary: {
      light: '#E42313',
      dark: '#FF6B6B',
    }
  },
  border: {
    primary: {
      light: '#D1D9DD',
      dark: '#494949',
    }
  }
};

// Function to get themed colors - automatically selects light or dark variant
export const getThemedColors = (isDarkMode: boolean) => {
  const selectColor = (colorObj: any): any => {
    if (colorObj && typeof colorObj === 'object' && 'light' in colorObj && 'dark' in colorObj) {
      return isDarkMode ? colorObj.dark : colorObj.light;
    }
    if (colorObj && typeof colorObj === 'object') {
      const result: any = {};
      for (const key in colorObj) {
        result[key] = selectColor(colorObj[key]);
      }
      return result;
    }
    return colorObj;
  };

  return selectColor(colors);
};