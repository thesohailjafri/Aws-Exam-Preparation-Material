import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

const ColorModeSwitch = () => {
	const { toggleColorMode, colorMode } = useColorMode();

	return (
		<HStack>
			<Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
			<Text
				whiteSpace='nowrap'
				// hidden in small screens
				display={['none', 'none', 'inline', 'inline']}
				color={colorMode === 'dark' ? 'black' : 'white'}
			>
				Dark Mode
			</Text>
		</HStack>
	);
};

export default ColorModeSwitch;
