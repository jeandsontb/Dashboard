import { Input as ChacraInput, FormLabel, FormControl, InputProps as ChacraInputProps } from '@chakra-ui/react';

interface InputProps extends ChacraInputProps {
  name: string;
  label?: string;
}

const Input = ({name, label, ...rest}: InputProps) => {
  return (
    <FormControl>
      { !!label && <FormLabel htmlFor="email" >{label}</FormLabel> }

      <ChacraInput 
        name={name}
        id={name} 
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900'
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );  
}

export { Input };
