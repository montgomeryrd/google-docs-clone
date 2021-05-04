import { useCallback } from 'react';
import 'quill/dist/quill.snow.css';
import Quill from 'quill';

const TOOLBAR_OPTIONS = [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'font': [] }],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'indent': '-1'}, { 'indent': '+1' }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],

    [{ 'script': 'sub'}, { 'script': 'super' }],
    ['image', 'blockquote', 'code-block'],
    
    [{ 'align': [] }],
    ['clean']
];

const TextEditor = () => {
    const wrapperRef = useCallback((wrapper) => {
        if (wrapper == null) return;
        wrapper.innerHTML = '';
        const editor = document.createElement('div');
        wrapper.append(editor);
        new Quill(editor, { theme: 'snow', modules: { toolbar: TOOLBAR_OPTIONS } });
    }, []);

    return (
        <div className="container" ref={wrapperRef}>
            
        </div>
    )
}

export default TextEditor;