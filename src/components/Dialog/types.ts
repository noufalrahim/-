export interface DialogProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
    open?: boolean;
    onClose?: () => void;
}