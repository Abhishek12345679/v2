import { Temporal } from "@js-temporal/polyfill";

export const currentLocation = "Kolkata";

export const makeDayTimeString = () => {
  const DaysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
  const currentDay = DaysOfTheWeek[Temporal.Now.plainDateISO().dayOfWeek];

  const hours =
    Temporal.Now.plainDateTimeISO().hour < 10
      ? "0".concat(Temporal.Now.plainDateTimeISO().hour.toString())
      : Temporal.Now.plainDateTimeISO().hour.toString();
  const minutes =
    Temporal.Now.plainDateTimeISO().minute < 10
      ? "0".concat(Temporal.Now.plainDateTimeISO().minute.toString())
      : Temporal.Now.plainDateTimeISO().minute.toString();

  return `${currentDay} ${hours}:${minutes}`;
};
