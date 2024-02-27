const getDay = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = new Date().getDay();

  return days[day];
};

const getLocalData = (key) => {
  let user = localStorage.getItem("user");
  user = JSON.parse(user);

  if (!key) return user;

  return user[key];
};

const getStoreOpenDetails = (today, store) => {
  const timings = store.store_timings[today];
  const hr = new Date().getHours();
  const [open, close] = timings?.split(" - ");
  const openTimings = Number(open.split("AM")[0]);
  const closeTimings = Number(close.split("PM")[0]) + 12;

  return { hr, openTimings, closeTimings, open, close, today };
};

const getStoreOpenStatus = (store) => {
  const { hr, openTimings, closeTimings, open, close, today } =
    getStoreOpenDetails(getDay(), store);

  let status = "Opens at " + open;

  if (hr > openTimings && hr < closeTimings) status = "Closes at " + close;
  else if (
    today === "Saturday" &&
    hr > closeTimings &&
    !store.store_timings.Sunday
  )
    status = "Opens Monday at " + getStoreOpenDetails("Monday", store).open;

  return status;
};

export { getDay, getLocalData, getStoreOpenDetails, getStoreOpenStatus };
