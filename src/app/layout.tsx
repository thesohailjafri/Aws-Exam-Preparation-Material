import { Container } from '@chakra-ui/react';
import NavBar from '../components/NavBar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<NavBar />
			<Container maxW='container.xl' padding='3'>
				{children}
			</Container>
		</>
	);
}
