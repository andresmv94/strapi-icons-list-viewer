import React from 'react';
import * as Icons from '@strapi/icons'; // Import all available icons

function IconPreview(): JSX.Element {
  const iconNames: string[] = Object.keys(Icons);

  return (
    <div>
      <h2 style={{textAlign: "center", fontSize: "35px"}}>Icons from @strapi/icons</h2>      
      <div className="icon-container">
        {iconNames.map((iconName: string) => {
          const IconComponent: React.FC<{ width: number; height: number }> = (Icons as any)[iconName as any];
          return (
            <div key={iconName} className="icon-preview">
              <IconComponent width={24} height={24} /> {/* Adjust the size as needed */}
              <p>{iconName}</p>
              Code: <span style={{color: "#00AC47"}}>{`<${iconName} />`}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default IconPreview;
