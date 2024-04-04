type HijrimonthType = {
    ar:string,
    en:string,
    number:number,
}
type weekDayType ={
    ar:string,
}
type hijriDateType = {
    date:string,
    day:string,
    month:HijrimonthType,
    year:string,
    weekday:weekDayType,

}

export type {hijriDateType};