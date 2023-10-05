'use client';

import {
	ChevronDownIcon,
	ChevronRightIcon,
	CloseIcon,
	HamburgerIcon,
	MoonIcon,
	SunIcon,
} from '@chakra-ui/icons';
import {
	Box,
	Button,
	Collapse,
	Flex,
	Icon,
	IconButton,
	Image,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Stack,
	Text,
	useColorMode,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function WithSubnavigation() {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Box
			bg={useColorModeValue('orange.100', 'orange.900')}
			px={4}
			borderBottom={3}
			borderStyle={'solid'}
		>
			<Flex
				color={useColorModeValue('black', 'white')}
				minH={'60px'}
				p={{ base: 2 }}
				borderBottom={1}
				align={'center'}
				maxW={'container.xl'}
				marginX={'auto'}
			>
				<Flex flex={{ base: 1, lg: 'auto' }} display={{ base: 'flex', lg: 'none' }}>
					<IconButton
						onClick={onToggle}
						icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
						variant={'ghost'}
						aria-label={'Toggle Navigation'}
						_hover={{
							bg: useColorModeValue('orange.200', 'orange.800'),
						}}
					/>
				</Flex>
				<Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
					<Logo />

					<Flex display={{ base: 'none', lg: 'flex' }} ml={10}>
						<DesktopNav />
					</Flex>
				</Flex>

				<Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
					<ColorModeSwitch />
				</Stack>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	);
}

const Logo = () => {
	const { colorMode } = useColorMode();
	return (
		<Link href='/'>
			<Image
				src={colorMode === 'light' ? './logo-dark.svg' : './logo-light.svg'}
				objectFit='cover'
				paddingTop='2'
				width={150}
				alt='logo'
			/>
		</Link>
	);
};

const DesktopNav = () => {
	const linkColor = useColorModeValue('black', 'white');
	const linkHoverColor = useColorModeValue('orange.800', 'orange.200');
	const popoverContentBgColor = useColorModeValue('orange.100', 'orange.900');

	return (
		<Stack direction={'row'} spacing={4} align={'center'}>
			{NAV_ITEMS.map((navItem) => (
				<Box key={navItem.label}>
					<Popover trigger={'hover'} placement={'bottom-start'}>
						<PopoverTrigger>
							<Box
								as='a'
								p={2}
								href={navItem.href ?? '#'}
								fontSize={'sm'}
								fontWeight={500}
								color={linkColor}
								_hover={{
									textDecoration: 'none',
									color: linkHoverColor,
								}}
							>
								{navItem.label}
							</Box>
						</PopoverTrigger>

						{navItem.children && (
							<PopoverContent
								border={0}
								boxShadow={'xl'}
								bg={popoverContentBgColor}
								p={4}
								rounded={'xl'}
								minW={'sm'}
							>
								<Stack>
									{navItem.children.map((child) => (
										<DesktopSubNav key={child.label} {...child} />
									))}
								</Stack>
							</PopoverContent>
						)}
					</Popover>
				</Box>
			))}
		</Stack>
	);
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
	return (
		<Box as='a' href={href} role={'group'} display={'block'} p={2} rounded={'md'}>
			<Stack direction={'row'} align={'center'}>
				<Box>
					<Text transition={'all .3s ease'} _groupHover={{ color: 'pink.400' }} fontWeight={500}>
						{label}
					</Text>
					<Text fontSize={'sm'}>{subLabel}</Text>
				</Box>
				<Flex
					transition={'all .3s ease'}
					transform={'translateX(-10px)'}
					opacity={0}
					_groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
					justify={'flex-end'}
					align={'center'}
					flex={1}
				>
					<Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
				</Flex>
			</Stack>
		</Box>
	);
};

const MobileNav = () => {
	return (
		<Stack bg={useColorModeValue('orange.100', 'orange.900')} p={4} display={{ lg: 'none' }}>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
		</Stack>
	);
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
	const { isOpen, onToggle } = useDisclosure();
	const linkColor = useColorModeValue('black', 'white');
	const linkHoverColor = useColorModeValue('orange.800', 'orange.200');
	return (
		<Stack spacing={4} onClick={children && onToggle}>
			<Box
				py={2}
				as='a'
				href={href ?? '#'}
				justifyContent='space-between'
				alignItems='center'
				_hover={{
					textDecoration: 'none',
				}}
			>
				<Text
					fontWeight={600}
					color={linkColor}
					_hover={{
						textDecoration: 'none',
						color: linkHoverColor,
					}}
				>
					{label}
				</Text>
				{children && (
					<Icon
						as={ChevronDownIcon}
						transition={'all .25s ease-in-out'}
						transform={isOpen ? 'rotate(180deg)' : ''}
						w={6}
						h={6}
					/>
				)}
			</Box>

			<Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
				<Stack mt={2} pl={4} borderLeft={1} borderStyle={'solid'} align={'start'}>
					{children &&
						children.map((child) => (
							<Box as='a' key={child.label} py={2} href={child.href}>
								{child.label}
							</Box>
						))}
				</Stack>
			</Collapse>
		</Stack>
	);
};

interface NavItem {
	label: string;
	subLabel?: string;
	children?: Array<NavItem>;
	href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
	{
		label: 'View All Exams',
		href: '/exams',
	},
	{
		label: 'Popular Exams',
		href: '/exams/popular',
	},
	{
		label: 'My Accessments',
		href: '/exams/accessments',
	},
	{
		label: 'Want to Contribute?',
		href: 'https://github.com/thesohailjafri/Aws-Exam-Preparation-Material/issues',
	},
];

const ColorModeSwitch = () => {
	const { toggleColorMode, colorMode } = useColorMode();

	return (
		<IconButton
			onClick={toggleColorMode}
			icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
			variant={'ghost'}
			aria-label={'Toggle Navigation'}
			_hover={{
				bg: useColorModeValue('orange.200', 'orange.800'),
			}}
		/>
	);
};
