import { Icon, Link as ChacraLink, Text, LinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends LinkProps{
  icon: ElementType;
  children: string;
  href: string;
}

const NavLink = ({ icon, children, href, ...rest }: NavLinkProps) => {
  return (
    <ActiveLink href={href} passHref >
      <ChacraLink display="flex" alignItems="center" {...rest} >
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium" >{children}</Text>
      </ChacraLink>
    </ActiveLink>
  ) 
}

export { NavLink };
