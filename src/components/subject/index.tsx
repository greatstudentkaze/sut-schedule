import React from 'react';

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

type Props = {
  data: IScheduleItem,
};

const Subject = ({ data }: Props) => {
  const { subject, type, teacher, classroom, time } = data;

  return (
    <div className="subject">
      <div className="subject__time-block">
        <time className="subject__time subject__time--start" dateTime={time.start}>{time.start}</time>
        <time className="subject__time subject__time--end" dateTime={time.end}>{time.end}</time>
      </div>
      <div className="subject__info-container subject-info">
        <p className="subject-info__type">{type}</p>
        <p className="subject-info__title">{subject}</p>
        <p className="subject-info__teacher">{teacher}</p>
        <p className="subject-info__classroom">{classroom}</p>
      </div>
    </div>
  );
};

export default Subject;
