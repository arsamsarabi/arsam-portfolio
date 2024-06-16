export default function HomeLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="flex flex-col justify-center items-center overflow-hidden mx-auto px-5 sm:px-10">
			<div className="max-w-7xl w-full">{children}</div>
		</div>
	)
}
