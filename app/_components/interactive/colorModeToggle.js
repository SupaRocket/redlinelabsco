// chakra-ui
import { useColorMode, Switch, FormControl, Box } from '@chakra-ui/react';
import { Moon, Sun } from 'lucide-react';

export default function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleToggle = () => {
    toggleColorMode();
  };

  return (
    <FormControl display={'flex'} alignItems={'center'} maxW={'fit-content'}>
      <Box color={colorMode === 'light' ? 'orange.300' : 'gray.300'}>
        <Sun size={17} />
      </Box>
      <Switch
        mx={'0.5rem'}
        isChecked={colorMode === 'dark'}
        id='color-mode-toggle'
        onChange={handleToggle}
        colorScheme={'orange'}
        size={'sm'}
      />
      <Box color={colorMode === 'dark' ? 'orange.300' : 'gray.300'}>
        <Moon size={17} />
      </Box>
    </FormControl>
  );
}
