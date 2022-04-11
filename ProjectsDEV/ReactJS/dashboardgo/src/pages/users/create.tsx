import { Box, Flex, Heading, VStack, SimpleGrid, Divider, Button, HStack } from '@chakra-ui/react';
import { Input } from '../../components/form/input';

import { Sidebar } from '../../components/form/Sidebar';
import { Header } from '../../components/Header';

const UserCreate = () => {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxHeight={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal" >Criar usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name='name' label='Nome completo' />
              <Input name='email' type="email" label='E-mail' />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name='password' type="password" label='Senha' />
              <Input name='password-confirmation' type="password" label='Confirmar senha' />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end" >
            <HStack spacing="4" >
              <Button colorScheme="whiteAlpha" >Cancelar</Button>
              <Button colorScheme="pink" >Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default UserCreate;
