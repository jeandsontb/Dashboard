import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right" >
        <Text>Jeandson Tenorio</Text>
        <Text color="gray.300" fontSize="small" >jeandsontb@gmail.com</Text>
      </Box>

      <Avatar size="md" name="Jeandson Tenorio" src="https://github.com/jeandsontb.png" />
    </Flex>
  )
}

export { Profile };
