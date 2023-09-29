import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../app/theme';
import RootLayout from '../app/layout';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<RootLayout>
				<Component {...pageProps} />
			</RootLayout>
		</ChakraProvider>
	);
}
export default MyApp;
