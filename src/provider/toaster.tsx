import { Toaster } from "sonner";

export default function ToasterProvider() {
    return (
        <Toaster
            richColors
            closeButton
            expand
            duration={5000}
            position="bottom-right"
            toastOptions={{
                className: "!bg-[#101825] !border-[#374151]",
                descriptionClassName: "!text-gray-400"
            }}
        />
    );
}