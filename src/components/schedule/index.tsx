import React, { useEffect, useState } from 'react';
import axios from 'axios';

import ScheduleForWeek from '../schedule-for-week';

export type ScheduleType = IWeekSchedule[];

export type DayOfTheWeekType = 'Понедельник' | 'Вторник' | 'Среда' | 'Четверг' | 'Пятница' | 'Суббота';

export interface IScheduleItem {
  subject: string,
  teacher: string,
  type: string,
  classroom: string,
  time: {
    start: string,
    end: string,
  },
}

export interface IDaySchedule {
  day: DayOfTheWeekType,
  lessons: IScheduleItem[],
}

export interface IWeekSchedule {
  week: number,
  days: IDaySchedule[],
}

const Schedule = () => {
  const [schedule, setSchedule] = useState<IDaySchedule[]>([]);

  useEffect(() => {
    axios.get('./data/schedule-week4.json')
      .then(response => setSchedule(response.data));
  }, []);

  return (
    <div className="container">
      <h2>Расписание занятий на неделю</h2>
      <ScheduleForWeek schedule={schedule} />
    </div>
  );
};

export default Schedule;
