import ClientHeader from "./ClientHeader";
import ClientFooter from "./ClientFooter";


const ClientLayCout = ({ children, }: Readonly<{ children: React.ReactNode }>) => {

    return (
        <>
        <ClientHeader />
        {children}
        <ClientFooter />
        </>
    )
}

export default ClientLayCout;
