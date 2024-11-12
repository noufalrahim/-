import React from "react";
import {
    HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar, Table, FileManager
} from "@syncfusion/ej2-react-richtexteditor";
import { BreadcrumbComponent } from '@syncfusion/ej2-react-navigations';

const NewNote = () => {
    const toolbarSettings = {
        items: [
            'Bold', 'Italic', 'Underline', 'StrikeThrough', '|', 'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            '|', 'LowerCase', 'UpperCase', '|', 'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
            'Indent', 'Outdent', '|', 'CreateLink', 'Image', 'CreateTable', '|', 'ClearFormat', 'Print', 'SourceCode',
            '|', 'Undo', 'Redo', '|', 'FullScreen'
        ]
    };

    const quickToolbarSettings = {
        image: ['Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'OpenImageLink', 'EditImageLink', 'RemoveLink', 'Display', 'AltText', 'Dimension'],
        link: ['Open', 'Edit', 'UnLink']
    };

    return (
        <>
            <BreadcrumbComponent enableNavigation={true} > </BreadcrumbComponent>
            <RichTextEditorComponent
                toolbarSettings={toolbarSettings}
                quickToolbarSettings={quickToolbarSettings}
                height="90%"
            >
                <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar, Table, FileManager]} />
            </RichTextEditorComponent>
        </>
    );
}

export default NewNote;
