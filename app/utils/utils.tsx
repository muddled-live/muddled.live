import moment from "moment";

export function formatViewsLikes(number: number): string {
    try {
        if (Math.abs(number) >= 10000000) {
            return (number / 1000000).toFixed(0) + "M";
        }
        if (Math.abs(number) >= 1000000) {
            return (number / 1000000).toFixed(2) + "M";
        }
        if (Math.abs(number) >= 1000) {
            return (number / 1000).toFixed(0) + "K";
        }
        return number.toString();
    } catch (err) {
        console.error("Error: ", err);
        return number.toString();
    }
}

export function formatUploaded(date: string) {
    try {
        var millis = moment.utc().diff(moment(date, moment.ISO_8601));
        var dur = moment.duration(millis);
        var y = dur.years();
        if (y > 0) {
            return `${y} year${y !== 1 ? "s" : ""}`;
        }
        var m = dur.months();
        if (m > 0) {
            return `${m} month${m !== 1 ? "s" : ""}`;
        }
        var d = dur.days();
        if (d > 0) {
            return `${d} day${d !== 1 ? "s" : ""}`;
        }
        var h = dur.hours();
        if (h > 0) {
            return `${h} hour${h !== 1 ? "s" : ""}`;
        }
        var mins = dur.minutes();
        return `${mins} min${mins !== 1 ? "s" : ""}`;
    } catch {
        return date;
    }
}

export function formatDuration(seconds: number): string {
    try {
        const hours = Math.floor(seconds / 3600);
        const remainingSeconds = seconds % 3600;
        const minutes = Math.floor(remainingSeconds / 60);
        const secs = remainingSeconds % 60;

        let formattedTime = "";

        if (hours > 0) {
            const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
            formattedTime += `${formattedHours}:`;
        }

        const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const formattedSeconds = secs < 10 ? `0${secs}` : `${secs}`;

        formattedTime += `${formattedMinutes}:${formattedSeconds}`;

        return formattedTime;
    } catch (err) {
        console.error("Error formatting duration: ", seconds);
        return seconds.toString();
    }
}

function getDaySuffix(day: number): string {
    if (day >= 11 && day <= 13) {
        return "th";
    }
    switch (day % 10) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd";
        default:
            return "th";
    }
}

export function formatStreamDate(timestamp: string): string {
    const date = new Date(timestamp);
    const options = { month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US");

    const day = date.getDate();
    const suffix = getDaySuffix(day);

    return formattedDate.replace(day.toString(), `${day}${suffix}`);
}
