import React, { useState } from 'react';
import Modal from 'react-modal';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
const resumePDF = '/assets/resume.pdf'; // Path from the public folder
 // Adjust path as needed

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.313/pdf.worker.min.js`;
// import workerSrc from 'pdfjs-dist/build/pdf.worker.min.js';
pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.js`;;


const ResumeModal = ({ isOpen }) => {
    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };
    let onRequestCloseE;
    const onRequestClose = () => {
        debugger
            // setIsOpen(false);
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestCloseE}
            contentLabel="Resume Modal"
            style={{
                content: {
                    width: '60%',
                    height: '80%',
                    margin: 'auto',
                    padding: '20px',
                    zIndex: 1
                },
            }}
        >
            <h2>My Resume</h2>
            <button onClick={()=>onRequestClose()} style={{ float: 'right' }}>Close</button>

            <div style={{ overflowY: 'auto', maxHeight: '90%' }}>
                <Document
                    file={resumePDF} // Use the imported PDF here
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    {Array.from(new Array(numPages), (el, index) => (
                        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                    ))}
                </Document>
            </div>
        </Modal>
    );
};

export default ResumeModal;
