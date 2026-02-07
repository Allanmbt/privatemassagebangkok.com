'use client';

import { useEffect, useState } from 'react';
import { Button } from './Button';
import { Smartphone } from 'lucide-react';

type DeviceType = 'ios' | 'android' | 'desktop';

export const HeroButtons = () => {
  const [deviceType, setDeviceType] = useState<DeviceType>('desktop');

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setDeviceType('ios');
    } else if (/android/.test(userAgent)) {
      setDeviceType('android');
    } else {
      setDeviceType('desktop');
    }
  }, []);

  const getAppLink = () => {
    switch (deviceType) {
      case 'ios':
        return 'https://apps.apple.com/th/app/cbody/id6471914695';
      case 'android':
        return 'https://play.google.com/store/apps/details?id=com.cbody.app';
      default:
        return 'https://apps.apple.com/th/app/cbody/id6471914695'; // Default to iOS
    }
  };

  const getAppButtonText = () => {
    switch (deviceType) {
      case 'ios':
        return 'Download on App Store';
      case 'android':
        return 'Get it on Google Play';
      default:
        return 'Download App';
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
      {/* Book Online Button */}
      <Button 
        variant="primary" 
        className="w-full sm:w-auto min-w-[200px]"
        asChild
      >
        <a href="https://cbody.vip/" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap">
          Book Online
        </a>
      </Button>

      {/* Download App Button */}
      <Button 
        variant="white" 
        className="w-full sm:w-auto min-w-[220px] group"
        asChild
      >
        <a href={getAppLink()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center whitespace-nowrap">
          <Smartphone className="w-4 h-4 mr-2 flex-shrink-0 transition-transform group-hover:scale-110" />
          <span className="inline-block">{getAppButtonText()}</span>
        </a>
      </Button>
    </div>
  );
};
