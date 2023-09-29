import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

const ColorModeSwitch = () => {
	const { toggleColorMode, colorMode } = useColorMode();

	return (
		<HStack>
			<Switch id='toggleColorMode' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
			<Text
				cursor={'pointer'}
				as='label'
				htmlFor='toggleColorMode'
				userSelect={'none'}
				whiteSpace='nowrap'
				transition={'all .3s ease'}
				_groupHover={{ color: 'pink.400' }}
				fontWeight={500}
				display={['none', 'none', 'inline', 'inline']}
			>
				Dark Mode
			</Text>
		</HStack>
	);
};

export default ColorModeSwitch;
