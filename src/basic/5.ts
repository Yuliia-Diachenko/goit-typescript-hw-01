enum DayOfWeek {
 Monday,
 Wednesday,
 Thursday,
 Friday,
 Saturday,
 Sunday,
 Tuesday
}


const isWeekend = (day: DayOfWeek): boolean => {
    return day === DayOfWeek.Sunday || day === DayOfWeek.Saturday;
}
