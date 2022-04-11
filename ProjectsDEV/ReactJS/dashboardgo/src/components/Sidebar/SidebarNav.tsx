import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboard2Line, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";


const SideBarNav = () => {
  return (
    <Stack spacing="12" align="flex-start">
        
      <NavSection title='GERAL'>
        <NavLink icon={RiDashboard2Line} href="/dashboard" >Dashboard</NavLink>
        <NavLink icon={RiContactsLine} href="/users" >Usuários</NavLink>
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiInputMethodLine} href="/forms" >Formulários</NavLink>
        <NavLink icon={RiGitMergeLine} href="/automation" >Automação</NavLink>
      </NavSection>
      
    </Stack>
  )
}

export { SideBarNav };
