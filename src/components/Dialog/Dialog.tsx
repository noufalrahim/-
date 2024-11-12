import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { DialogProps } from "./types";
import { useNavigate } from 'react-router-dom';
const DialogBox = ({
    children,
    title,
    open,
    onClose,
}: DialogProps) => {

    const navigate = useNavigate();

    const buttons = [{
        buttonModel: {
            content: 'Create',
            cssClass: 'e-flat',
            isPrimary: true,
        },
        'click': () => {
            navigate('/notes/new');
        }
    },
    {
        buttonModel: {
            content: 'Cancel',
            cssClass: 'e-flat'
        },
        'click': () => {
            console.log('Dialog closed');
        }
    }];
    return (
        <div className="dialog-center">
            <DialogComponent
                isModal={true}
                showCloseIcon={true}
                visible={open}
                header={title}
                close={onClose}
                cssClass="custom-dialog"
                className='!w-1/2 lg:!w-1/3'
                buttons={buttons}
            >
                {children}
            </DialogComponent>
        </div>
    )
}

export default DialogBox;
