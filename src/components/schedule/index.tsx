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
  id: string,
}

export interface IDaySchedule {
  day: DayOfTheWeekType,
  lessons: IScheduleItem[],
  date: string,
  id: string,
}

export interface IWeekSchedule {
  week: number,
  days: IDaySchedule[],
  id: string,
}

const Schedule = () => {
  const [schedule, setSchedule] = useState<ScheduleType>([]);
  const [scheduleForWeek, setScheduleForWeek] = useState<IWeekSchedule>(null as unknown as IWeekSchedule);

  useEffect(() => {
    axios.get('./data/schedule-semester.json')
      .then(response => {
        setSchedule(response.data);

        const week = response.data.find((it: IWeekSchedule) => it.week === 6);
        setScheduleForWeek(week);
      });
  }, []);

  return (
    <section className="section container">
      <h2 className="section__lead">Расписание занятий на неделю</h2>
      {
        scheduleForWeek
          ? <ScheduleForWeek schedule={scheduleForWeek.days} />
          : 'Загружаем расписание на неделю...'
      }
    </section>
  );
};

export default Schedule;
