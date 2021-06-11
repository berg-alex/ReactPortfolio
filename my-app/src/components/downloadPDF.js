import React, { Component } from 'react';
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';

const MyDoc = () => (
  <Document>
    <Page>
      // My document data
    </Page>
  </Document>
);

const myPDF = () => (
  <div>
    <PDFDownloadLink document={<MyDoc />} fileName="AlexBergResumePDF.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>
  </div>
);

export default myPDF;