import { StyledFooter } from "./Footer.styles";

const Footer = () => {
  return (
    <StyledFooter>© {new Date().getFullYear()} Nikita Van. All rights reserved.</StyledFooter>
  )
}

export default Footer;