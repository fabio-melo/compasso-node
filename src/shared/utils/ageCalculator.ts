import dayjs from "dayjs";

export function ageCalculator(dateOfBirth: string){
    return dayjs(dateOfBirth).diff(dayjs(), "years", false);
}