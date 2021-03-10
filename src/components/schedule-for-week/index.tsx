import React from 'react';

import ScheduleForDay from '../schedule-for-day';

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

type Props = {
  schedule: IDaySchedule[],
}

const ScheduleForWeek = ({ schedule }: Props) => {
  return (
    <ul>
      {
        !schedule.length
          ? 'Загрузка...'
          : schedule.map(item =>
            <li>
              <ScheduleForDay data={item} />
            </li>
          )
      }
    </ul>
  );
};

export default ScheduleForWeek;
