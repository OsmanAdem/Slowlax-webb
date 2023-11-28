import React, { useState } from 'react';
import './EducationPage.css';

function EducationPage() {
  const [selectedModule, setSelectedModule] = useState(null);

  const modules = [
    {
      id: 1,
      name: 'Modul 1',
      videoUrl: 'https://www.example.com/video1.mp4',
    },
    {
      id: 2,
      name: 'Modul 2',
      videoUrl: 'https://www.example.com/video2.mp4',
    },
  ];

  const handleModuleChange = (e) => {
    const moduleId = parseInt(e.target.value);
    const selected = modules.find((module) => module.id === moduleId);
    setSelectedModule(selected);
  };

  return (
    <div className="container">
      <h2>Utbildning</h2>
      <div className="module-select">
        <label htmlFor="moduleSelect">Moduler:</label>
        <select
          id="moduleSelect"
          onChange={handleModuleChange}
          value={selectedModule ? selectedModule.id : ''}
        >
          <option value="">Välj en modul</option>
          {modules.map((module) => (
            <option key={module.id} value={module.id}>
              {module.name}
            </option>
          ))}
        </select>
      </div>
      {selectedModule && (
        <div>
          <h3>{selectedModule.name}</h3>
          <div className="video-container">
            <video
              src={process.env.PUBLIC_URL + selectedModule.videoUrl}
              controls
              className="video-player"
            >
              Denna webbläsare stöder inte HTML5 Video taggen.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

export default EducationPage;








