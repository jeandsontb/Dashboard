import { Flex, Button, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../components/form/input';

// type SignInFormData = {
//   email: string;
//   password: string;
// }

const signInFormSchema = Yup.object().shape({
  email: Yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: Yup.string().required('Senha obrigatória')
})

const SignIn = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  // const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
    const handleSignIn = (values: any) => {
    console.log(values);
  }

  return (
    <Flex w="100vw" h="100vh" alignItems="center"  justifyContent="center">
      <Flex as="form" w="100%" maxWidth={360} bg="gray.800" p="8" borderRadius={8} flexDir="column" onSubmit={handleSubmit(handleSignIn)}>
        <Stack spacing={4}>
          <Input
            id='email'
            type='email'
            label='E-mail'
            error={formState.errors.email}
            {...register('email')}
          />

          <Input
            id='password'
            type='password'
            label='Senha'
            error={formState.errors.password}
            {...register('password')}
          />          
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={formState.isSubmitting} >Entrar</Button>
      </Flex>
    </Flex>
  )
}

export default SignIn ;
