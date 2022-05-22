import { Temporal } from "@js-temporal/polyfill";

export const currentLocation = "Kolkata";
// export const currentLocation = "Dooars :)";

export const makeDayTimeString = () => {
  const DaysOfTheWeek = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  const currentDay =
    DaysOfTheWeek[Temporal.Now.zonedDateTimeISO("Asia/Kolkata").dayOfWeek - 1];

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
