import React from 'react';

interface ServiceIconProps {
  type: 'webDevelopment' | 'digitalStrategy';
}

export const WebDevelopmentIcon: React.FC = () => (
  <div className="w-48 h-32 relative">
    {/* Monitor Base */}
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-analogous-2 rounded-b-lg"></div>
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-6 bg-analogous-2"></div>
    
    {/* Monitor Screen */}
    <div className="w-40 h-24 bg-analogous-2 rounded-lg mx-auto relative overflow-hidden">
      {/* Screen Content */}
      <div className="absolute inset-2 bg-white rounded">
        {/* Orange Section */}
        <div className="w-12 h-full bg-secondary float-left"></div>
        {/* Blue Section */}
        <div className="w-12 h-8 bg-analogous-2 float-right mt-4"></div>
        {/* Lines */}
        <div className="mt-2 ml-14 space-y-1">
          <div className="w-16 h-1 bg-gray-300"></div>
          <div className="w-12 h-1 bg-gray-300"></div>
          <div className="w-14 h-1 bg-gray-300"></div>
        </div>
      </div>
    </div>
  </div>
);

export const DigitalStrategyIcon: React.FC = () => (
  <div className="w-48 h-32 relative">
    {/* Magnifying Glass Handle */}
    <div className="absolute bottom-0 right-0 w-16 h-2 bg-analogous-2 rounded-full transform rotate-45 origin-left"></div>
    
    {/* Magnifying Glass Circle */}
    <div className="w-32 h-32 border-8 border-analogous-2 rounded-full relative overflow-hidden bg-white">
      {/* Pie Chart Inside */}
      <div className="absolute inset-4">
        {/* Orange Slice */}
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-secondary rounded-full" style={{
            clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)'
          }}></div>
          {/* Blue Slice */}
          <div className="absolute inset-0 bg-analogous-2 rounded-full" style={{
            clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)'
          }}></div>
          {/* Light Blue Slice */}
          <div className="absolute inset-0 bg-analogous-1 rounded-full" style={{
            clipPath: 'polygon(50% 50%, 50% 100%, 0% 100%, 0% 0%, 50% 0%)'
          }}></div>
        </div>
      </div>
    </div>
    
    {/* Decorative dots */}
    <div className="absolute top-4 right-8 w-2 h-2 bg-analogous-1 rounded-full"></div>
    <div className="absolute top-8 right-4 w-3 h-3 bg-analogous-1 rounded-full"></div>
    <div className="absolute top-12 right-12 w-2 h-2 bg-analogous-1 rounded-full"></div>
  </div>
);

const ServiceIcon: React.FC<ServiceIconProps> = ({ type }) => {
  switch (type) {
    case 'webDevelopment':
      return <WebDevelopmentIcon />;
    case 'digitalStrategy':
      return <DigitalStrategyIcon />;
    default:
      return <WebDevelopmentIcon />;
  }
};

export default ServiceIcon;