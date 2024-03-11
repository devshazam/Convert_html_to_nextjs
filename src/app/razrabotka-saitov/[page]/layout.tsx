
import { FooterSertificats } from "@/components/footerSertificats";
import { FooterForm } from "@/components/footerForm";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <FooterForm />
            <FooterSertificats />
            </>
    );
}
