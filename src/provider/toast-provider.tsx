import { Toaster } from "@/components/ui/sonner"


const ToasterProvider = () => {
    return (
        <Toaster
            theme="light"
            richColors
            position="top-right"
            className="bg-neutral-100 shadow-lg"
        />
    )
}

export default ToasterProvider