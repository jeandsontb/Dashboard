import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

const Profile = ({ showProfileData = true }: ProfileProps) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right" >
          <Text>Jeandson Tenorio</Text>
          <Text color="gray.300" fontSize="small" >jeandsontb@gmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Jeandson Tenorio" src="https://github.com/jeandsontb.png" />
    </Flex>
  )
}

export { Profile };
