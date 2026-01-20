const Layout = ({ children } : { children : React.ReactNode }) => {
    return (
        <div className={"flex flex-col items-center justify-center min-h-screen w-full"}>
            <span>Root Layout</span>
            {children}
        </div>
    )
}
export default Layout
