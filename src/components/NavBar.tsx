import { Box, Container, Flex, Image, useColorMode } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import Link from 'next/link';

export default function NavBar() {
	const { colorMode } = useColorMode();
	return (
		<Box backgroundColor={colorMode === 'light' ? 'black' : 'white'}>
			<Container maxW='container.xl' paddingX='3' paddingY='1'>
				<Flex justify='space-between' align='center'>
					<Box>
						<Link href='/'>
							<Image
								src={colorMode === 'light' ? './logo-light.svg' : './logo-dark.svg'}
								objectFit='cover'
								paddingTop='2'
								width={150}
								alt='logo'
							/>
						</Link>
					</Box>
					<Box>
						{/* <SearchInput /> */}
						<ColorModeSwitch />
					</Box>
				</Flex>
			</Container>
		</Box>
	);
}
