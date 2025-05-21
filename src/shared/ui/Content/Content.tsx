export const Content: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return <main className="container">{children}</main>;
};
