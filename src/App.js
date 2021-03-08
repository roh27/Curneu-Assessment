import React from 'react';
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import filePDF from './Rohith Kanna L M (software resume).pdf'
import './App.css'

function App() {
  return (
    <div className="App">
     <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
    <div id="pdfviewer">
      {/* Internal pdf file load */}
        {/* <Viewer fileUrl={filePDF}/>  */}
      {/* External pdf file load. Uncomment below viewer to  external source and comment out the above viewer */}
      <Viewer fileUrl={filePDF} />
    </div>
</Worker>
    </div>
  );
}

export default App;
