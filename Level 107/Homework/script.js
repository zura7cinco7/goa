//შეისწავლეთ მთლიანი რესურსი და გააკეთე 3 მაგალითი Date ობიექტის გამოყენების
const date = new Date();
console.log(date);

const date1 = new Date(2025,12,3,12,20,60,10);
console.log(date1);

const date2 = new Date(10000000000);
console.log(date2)

/* ### ✅ დავალება 1: "დაბადების დღის გამოთვლა"
**ამოცანა**: მომხმარებელს შეყავს დაბადების თარიღი ფორმატში `
"YYYY-MM-DD"`. დაწერე ფუნქცია, რომელიც დააბრუნებს:

- რამდენი წელი აქვს ამ ადამიანს,
- შემდეგი დაბადების დღემდე რამდენი დღე დარჩა. */

function calculateBirthdayInfo(birthDateString) {
    const today = new Date();
    const birthDate = new Date(birthDateString);
    let age = today.getFullYear() - birthDate.getFullYear();
  
    const thisYearBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (today < thisYearBirthday) {
      age--;
    }
    let nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (today >= nextBirthday) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const msPerDay = 1000 * 60 * 60 * 24;
    const daysUntilNextBirthday = Math.ceil((nextBirthday - today) / msPerDay);
  
    return {
      age,
      daysUntilNextBirthday
    };
  }
  

console.log(calculateBirthdayInfo("2013-6-1"))

/* ### ✅ დავალება 2: "მუშაობის საათების კალკულატორი"
**ამოცანა**: დაწერე ფუნქცია, რომელიც იღებს ორ დროს `"HH:MM"` 
ფორმატში (მაგ. `"09:00"` და `"17:30"`)
და აბრუნებს სამუშაო დროის ხანგრძლივობას საათებში და წუთებში */

// HH:MM - 09:00 17:30
function getHoursMinutes(dateString) {
    const [hourStr, minuteStr] = dateString.split(":");
    const hours = parseInt(hourStr);
    const minutes = parseInt(minuteStr);
    return { hours, minutes };
}

function calculateWorkHours(startHour, endHour){
    const start = getHoursMinutes(startHour);
    const end = getHoursMinutes(endHour);

    let totalMinutes = (end.hours * 60 + end.minutes) - (start.hours * 60 + start.minutes);

    if (totalMinutes < 0) {
        totalMinutes += 24 * 60; // თუ დრო გადაიარა შუაღამით, ვამატებთ 24 საათს
    }

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return {hours, minutes};
}

console.log(calculateWorkHours("09:10", "4:20"));

/* **ამოცანა**✅: დაწერე ფუნქცია, რომელიც იღებს თარიღს `"YYYY-MM-DD"` და 
აბრუნებს კვირის დღეს ქართულად, მაგ. `"ორშაბათი"`, `"სამშაბათი"` და ა.შ. */

function getGeorgianWeekday(dateStr) {
    const days = ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"];
    const date = new Date(dateStr);
    const weekday = date.getDay();
    return days[weekday];
}

console.log(getGeorgianWeekday("2025-04-09"));