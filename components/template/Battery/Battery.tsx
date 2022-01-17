import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { BatteryOutline, BatteryGauge } from './Battery.styled';
import { Props } from '../SystemTools/SystemTools';

const getCurrentGauge = (date: Date): number => {
  // TODO: dayjs type이 뭐지?
  const time: any = dayjs(date);
  const oneHundredPercent = 100;
  const DaysToMinutes = 1440;
  const currentMinutes = time.format('HH') * 60 + Number(time.format('mm'));

  // * 100% - (100% / 하루 총 분 / 현재 분)
  return (
    oneHundredPercent -
    Math.floor(oneHundredPercent / (DaysToMinutes / currentMinutes))
  );
};

const Battery = (props: Props) => {
  const [currentGauge, setCurrentGauge] = useState(getCurrentGauge(props.time));

  useEffect(() => {
    let time: Date | null = null;
    let per: number = 0;

    let timerInterval = setInterval(() => {
      time = new Date();
      per = getCurrentGauge(time);

      if (per === currentGauge) return;

      setCurrentGauge(Math.floor(per));
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [currentGauge]);

  return (
    <div>
      <BatteryOutline>
        {currentGauge && (
          <BatteryGauge
            style={{
              width: currentGauge,
            }}
          />
        )}
      </BatteryOutline>
    </div>
  );
};

export default Battery;
