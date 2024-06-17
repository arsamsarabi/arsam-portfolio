import '#/styles/globals.css'
import type { Metadata } from 'next'
import { robotoSlab, roboto, indie } from '#/styles/fonts'
import { ThemeProvider } from '#/components/ThemeProvider'

export const metadata: Metadata = {
	title: 'arsam.dev',
	description: "Arsam Sarabi's portfolio website",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${robotoSlab.className} ${indie.className} ${roboto.className}`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<main className="bg-black-100 text-white-100">{children}</main>
				</ThemeProvider>
			</body>
		</html>
	)
}
