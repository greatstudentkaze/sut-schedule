import React from 'react';

import Subject from '../subject';

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
  data: IDaySchedule,
}

const ScheduleForDay = ({ data }: Props) => {
  const { day, lessons } = data;

  return (
    <article className="schedule-for-day">
      <h3 className="schedule-for-day__title">{day} <b>31 марта</b></h3>
      {
        lessons.length
          ? lessons.map(lesson => <Subject data={lesson} />)
          : 'Занятий нет'
      }
    </article>
  );
};

export default ScheduleForDay;
