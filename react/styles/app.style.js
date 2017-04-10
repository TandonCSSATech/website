import { APP_MAIN_COLOR } from '../const';

export const styles = {
  navbar: {
    container: {
      height: 70,
      position: "fixed",
      paddingLeft: 0,
      paddingRight: 0,
      top: 0,
      left: 0,
      width: "100%",
      backgroundColor: APP_MAIN_COLOR,
      display: "flex",
      flexWrap: "wrap"
    },
    title: {
      height: 70
    },
    logo: {
      height: 70,
    },
    navs: {
      container: {
        display: "flex"
      },
      button: {
        borderRadius: 0,
        textDecoration: "none",
        color: "white",
        height: 70,
        active: {
          borderRadius: 0,  
          textDecoration: "none",
          color: "white",
          height: 70,
          backgroundColor: "lightblue",
        },
        label: {
          fontSize: 18,
        }
      }
    }
  },
  container: {
    position: "absolute",
  }
}