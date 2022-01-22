import { Temporal } from "@js-temporal/polyfill";

export const currentLocation = "Kolkata";

export const makeDayTimeString = () => {
  const DaysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
  const currentDay = DaysOfTheWeek[Temporal.Now.plainDateISO().dayOfWeek];

  const hours =
    Temporal.Now.zonedDateTimeISO("Asia/Kolkata").hour < 10
      ? "0".concat(
          Temporal.Now.zonedDateTimeISO("Asia/Kolkata").hour.toString()
        )
      : Temporal.Now.zonedDateTimeISO("Asia/Kolkata").hour.toString();
  const minutes =
    Temporal.Now.zonedDateTimeISO("Asia/Kolkata").minute < 10
      ? "0".concat(
          Temporal.Now.zonedDateTimeISO("Asia/Kolkata").minute.toString()
        )
      : Temporal.Now.zonedDateTimeISO("Asia/Kolkata").minute.toString();

  return `${currentDay} ${hours}:${minutes}`;
};
