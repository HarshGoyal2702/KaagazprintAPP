// import { Injectable } from '@angular/core';
// import * as pdfjsLib from 'pdfjs-dist/build/pdf.mjs';
// import * as pdfjsWorker from 'pdfjs-dist/build/pdf.worker.mjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class PdfService {

//   constructor() {
//     // Set the workerSrc property to use the correct worker file for pdf.js
//     (pdfjsLib as any).GlobalWorkerOptions.workerSrc = pdfjsWorker;
//   }

//   async getPdfPageCount(pdfUrl: string): Promise<number> {
//     try {
//       // Load the PDF document
//       const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
//       // Return the number of pages
//       return pdf.numPages;
//     } catch (error) {
//       console.error('Error loading PDF:', error);
//       throw error;
//     }
//   }
// }
