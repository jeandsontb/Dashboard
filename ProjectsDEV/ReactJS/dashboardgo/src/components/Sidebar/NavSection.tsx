import { Box, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { RiContactsLine, RiDashboard2Line } from "react-icons/ri";

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

const NavSection = ({ title, children }: NavSectionProps) => {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">{title}</Text>
      <Stack spacing="4" mt="5" align="stretch">
        {children}
      </Stack>
    </Box>
  )
}

export { NavSection };
