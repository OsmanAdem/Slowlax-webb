import React from 'react';
import './OMXS30Page.css';

function OMXS30Page() {
  return (
    <div className="omxs30-container">
      <div className="omxs30-content">
        <h2 className="omxs30-title">OMXS30 Index</h2>
        <div className="omxs30-image-container">
          <img src="/omxs30-image.jpg" alt="OMXS30" className="omxs30-image" />
        </div>
        <p className="omxs30-description">
          OMXS30 är ett aktieindex som består av de 30 mest handlade aktierna på Stockholmsbörsen.
          Det används ofta som en indikator på den allmänna hälsan för den svenska aktiemarknaden.
        </p>
      </div>
    </div>
  );
}

export default OMXS30Page;

