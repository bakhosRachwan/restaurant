import { extendTheme } from "@chakra-ui/react"

const Theme = extendTheme({
  colors: {
    brand: {
      100: "#964E37",
      300: "#E76226",
      900: "#47484D",
    },
  },
  components:{
      Button: {
          colorScheme: {
            waa: {
                100: "#47484D"
            }
          }
      }
  },
})
export default Theme;