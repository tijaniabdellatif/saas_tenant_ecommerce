import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { parse, format } from 'date-fns';

dayjs.extend(duration);

function cn(...inputs: ClassValue[]) {

    return twMerge(clsx(inputs))
}


const getMonthName = (dateString: string) => {

    const date = new Date(dateString);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return monthNames[date.getMonth()];

}


const createArray = (n: number): number[] => {
    return Array.from({ length: n }, (_, i) => i + 1);
}

const createSlug = (input: string): string => {
    return input
        .toLowerCase()
        .replace(/\s+/g, '-')       // Replace spaces with hyphens
        .replace(/[^a-z0-9\-]/g, '');

}


function hasOneElement<T>(arr: T[]): boolean {
    return arr.length === 1;
}

function truncateString(str: string, maxLength: number) {
    if (str.length > maxLength) {
        return str.substring(0, maxLength) + "...";
    } else {
        return str;
    }
}

const cutText = (text: string, length: number) => {
    if (text.split(" ").length > 1) {
        const string = text.substring(0, length);
        const splitText = string.split(" ");
        splitText.pop();
        return splitText.join(" ") + "...";
    } else {
        return text;
    }
};

const formatDate = (date: string, format: string) => {
    return dayjs(date).format(format);
};

const capitalizeFirstLetter = (string: string) => {
    if (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } else {
        return "";
    }
};

const onlyNumber = (string: string) => {
    if (string) {
        return string.replace(/\D/g, "");
    } else {
        return "";
    }
};

const formatCurrency = (number: number) => {
    if (number) {
        const formattedNumber = number.toString().replace(/\D/g, "");
        const rest = formattedNumber.length % 3;
        let currency = formattedNumber.substr(0, rest);
        const thousand = formattedNumber.substr(rest).match(/\d{3}/g);
        let separator;

        if (thousand) {
            separator = rest ? "," : "";
            currency += separator + thousand.join(",");
        }

        return currency;
    } else {
        return "";
    }
};

const timeAgo = (time: string) => {
    const date = new Date((time || "").replace(/-/g, "/").replace(/[TZ]/g, " "));
    const diff = (new Date().getTime() - date.getTime()) / 1000;
    const dayDiff = Math.floor(diff / 86400);

    if (isNaN(dayDiff) || dayDiff < 0 || dayDiff >= 31) {
        return dayjs(time).format("MMMM DD, YYYY");
    }

    return (
        (dayDiff === 0 &&
            ((diff < 60 && "just now") ||
                (diff < 120 && "1 minute ago") ||
                (diff < 3600 && Math.floor(diff / 60) + " minutes ago") ||
                (diff < 7200 && "1 hour ago") ||
                (diff < 86400 && Math.floor(diff / 3600) + " hours ago"))) ||
        (dayDiff === 1 && "Yesterday") ||
        (dayDiff < 7 && dayDiff + " days ago") ||
        (dayDiff < 31 && Math.ceil(dayDiff / 7) + " weeks ago")
    );
};

const diffTimeByNow = (time: string) => {
    const startDate = dayjs(dayjs().format("YYYY-MM-DD HH:mm:ss").toString());
    const endDate = dayjs(dayjs(time).format("YYYY-MM-DD HH:mm:ss").toString());

    const duration = dayjs.duration(endDate.diff(startDate));
    const milliseconds = Math.floor(duration.asMilliseconds());

    const days = Math.round(milliseconds / 86400000);
    const hours = Math.round((milliseconds % 86400000) / 3600000);
    let minutes = Math.round(((milliseconds % 86400000) % 3600000) / 60000);
    const seconds = Math.round(
        (((milliseconds % 86400000) % 3600000) % 60000) / 1000
    );

    if (seconds < 30 && seconds >= 0) {
        minutes += 1;
    }

    return {
        days: days.toString().length < 2 ? "0" + days : days,
        hours: hours.toString().length < 2 ? "0" + hours : hours,
        minutes: minutes.toString().length < 2 ? "0" + minutes : minutes,
        seconds: seconds.toString().length < 2 ? "0" + seconds : seconds,
    };
};

const isset = (obj: object | string) => {
    if (obj !== null && obj !== undefined) {
        if (typeof obj === "object" || Array.isArray(obj)) {
            return Object.keys(obj).length;
        } else {
            return obj.toString().length;
        }
    }

    return false;
};

const toRaw = (obj: object) => {
    return JSON.parse(JSON.stringify(obj));
};

const randomNumbers = (from: number, to: number, length: number) => {
    const numbers = [0];
    for (let i = 1; i < length; i++) {
        numbers.push(Math.ceil(Math.random() * (from - to) + to));
    }

    return numbers;
};


const stringToHTML = (arg: string) => {
    const parser = new DOMParser(),
        DOM = parser.parseFromString(arg, "text/html");
    return DOM.body.childNodes[0] as HTMLElement;
};

function formatDateToHuman(dateString: string): string {
    const date = new Date(dateString);

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };

    return new Intl.DateTimeFormat('fr-FR', options).format(date);
}

export {

    timeAgo,
    toRaw,
    randomNumbers,
    isset,
    diffTimeByNow,
    getMonthName,
    cn,
    createArray,
    hasOneElement,
    createSlug,
    truncateString,
    cutText,
    formatDate,
    capitalizeFirstLetter,
    onlyNumber,
    formatCurrency,
    stringToHTML,
    formatDateToHuman
}