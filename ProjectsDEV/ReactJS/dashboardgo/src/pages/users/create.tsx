import {
  Box,
  Flex,
  Heading,
  VStack,
  SimpleGrid,
  Divider,
  Button,
  HStack,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import * as Yup from "yup";

import { Input } from "../../components/form/input";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import Link from "next/link";
import { useMutation } from "react-query";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";

const createUserFormSchema = Yup.object().shape({
  name: Yup.string().required("Nome obrigatório"),
  email: Yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: Yup.string()
    .required("Senha obrigatória")
    .min(6, "Mínimo 6 caracteres"),
  password_confirmation: Yup.string().oneOf(
    [null, Yup.ref("password")],
    "As senha precisam ser iguais"
  ),
});

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const UserCreate = () => {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });
  const createUser = useMutation(
    async (user: CreateUserFormData) => {
      const response = await api.post("users", {
        user: {
          ...user,
          created_at: new Date(),
        },
      });

      return response.data.user;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("users");

        router.push("/users");
      },
    }
  );

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    await createUser.mutateAsync(values);
  };

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                label="Nome completo"
                {...register("name")}
                error={formState.errors.name}
              />
              <Input
                type="email"
                label="E-mail"
                {...register("email")}
                error={formState.errors.email}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                type="password"
                label="Senha"
                {...register("password")}
                error={formState.errors.password}
              />
              <Input
                type="password"
                label="Confirmar senha"
                {...register("password_confirmation")}
                error={formState.errors.password_confirmation}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                isLoading={formState.isSubmitting}
                colorScheme="pink"
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default UserCreate;
