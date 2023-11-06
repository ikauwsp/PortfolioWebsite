import React from 'react'

export const DownloadPdfButton = ({ name, pdfUrl, pdfFileName }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfFileName || 'document.pdf';
    link.click();
  };

  return (
    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-teal-600 to-purple-500 hover:bg-slate-800 text-white' mt-3 onClick={handleDownload}>
      <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 '>
          Download CV
      </span>
    </button>
  )
}

