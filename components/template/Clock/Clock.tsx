import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { Props } from '../SystemTools/SystemTools';

const Clock = (props: Props) => {
  const [currentTime, setCurrentTime] = useState(
    dayjs(props.time).format('hh:mm'),
  );

  useEffect(() => {
    let date: Date | null = null;
    let time: string = '';

    let timerInterval = setInterval(() => {
      date = new Date();
      time = dayjs(date).format('hh:mm');

      if (time === currentTime) return;

      setCurrentTime(time);
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [currentTime]);

  return (
    <div
      style={{
        textAlign: 'center',
        color: 'white',
        cursor: 'default',
      }}
    >
      {currentTime}
    </div>
  );
};

export default Clock;
