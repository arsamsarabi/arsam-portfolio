import '#/styles/globals.css'
import type { Metadata } from 'next'
import { robotoSlab, roboto, indie } from '#/styles/fonts'

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
				className={`${roboto.className} ${robotoSlab.className} ${indie.className}`}
			>
				<main className="h-svh w-svw">{children}</main>
			</body>
		</html>
	)
}
