import { useState } from 'react';

import { CheckPicture } from '../checkPictu';

export const PersonalArea = () => {
  const [activeSection, setActiveSection] = useState<string>('uploadImage');
  const [userName] = useState<string>('יוסי כהן'); // שם המשתמש, אתה יכול להחליף או למשוך אותו מ-API

  const handleNavigation = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="personal-area-container">
      <div className="sidebar">
        <ul>
          <li onClick={() => handleNavigation('uploadImage')}>העלאת תמונה</li>
          <li onClick={() => handleNavigation('medicalHistory')}>היסטוריה רפואית</li>
          <li onClick={() => handleNavigation('appointments')}>תורים</li>
        </ul>
      </div>

      <div className="main-content">
        <div className="header">
          <h1>אזור אישי - {userName}</h1>
        </div>

        <div className="content">
          {activeSection === 'uploadImage' && <CheckPicture />}
          {/* {activeSection === 'medicalHistory' && <MedicalHistory />} */}
          {/* {activeSection === 'appointments' && <Appointments />} */}
        </div>
      </div>
    </div>
  );
};
