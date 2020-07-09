import moment from 'moment';

export default class TimeHelper {
    static getCurrentDate(format) {
        return moment().format(format);
    }

    static getFirstEndDayOfMonth(date, format) {
        return {
            firstDay: moment(date)
                .startOf('month')
                .format(format),
            lastDay: moment(date)
                .endOf('month')
                .format(format),
        };
    }

    static comparisionTwoDate(currentDate, selectedDate) {
        return moment(currentDate).isBefore(moment(selectedDate));
    }

    static getWeekDay = date => {
        return moment(date).weekday();
    };

    static getWeekDays = day => {
        return moment()
            .isoWeekday(day)
            .format('dddd');
    };

    static dateToString(date, format) {
        return moment(date).format(format)
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();

        return format
            .replace('YYYY', FormatHelper.fourIntegerDigits(year))
            .replace('MM', FormatHelper.twoIntegerDigits(month))
            .replace('DD', FormatHelper.twoIntegerDigits(day))
            .replace('hh', FormatHelper.twoIntegerDigits(hour))
            .replace('mm', FormatHelper.twoIntegerDigits(minute))
            .replace('ss', FormatHelper.twoIntegerDigits(second));
    }

    static dateToStringNew(date, format) {
        return moment(date).format(format)
    }

    static relativeTime(date) {
        return moment(date).fromNow();
    }

    static stringToDate(text, format) {
        return moment(text);
    }

    static getYearsOld(dob) {
        const yearsOld = moment().diff(dob, 'years');
        if (yearsOld >= 0) {
            return '1 tuổi';
        }
        return '';
    }

    static formatDate(stringData, format) {
        return moment(stringData).format(format);
    }

    static formatAddDate(stringData, numberDate, format) {
        return moment(stringData)
            .add(numberDate, 'days')
            .format(format);
    }

    static addDate(stringData, numberDate) {
        return moment(stringData).add(numberDate, 'days');
    }

    static formatISO(stringData, format) {
        return moment(stringData, moment.ISO_8601).format(format);
    }

    static getGreetingTime(m) {
        let g = null;

        if (!m || !m.isValid()) {
            return;
        }

        const split_afternoon = 12; //24hr time to split the afternoon
        const split_evening = 17; //24hr time to split the evening
        const currentHour = parseFloat(m.format('HH'));

        if (currentHour >= split_afternoon && currentHour <= split_evening) {
            g = 'afternoon';
        } else if (currentHour >= split_evening) {
            g = 'evening';
        } else {
            g = 'morning';
        }

        return g;
    }

    static minutesToTime(minutesFromMidNight = 0) {
        const d = new Date();
        d.setHours(minutesFromMidNight / 60);
        d.setMinutes(minutesFromMidNight % 60);
        return d;
    }

    static timeToMinutes(time) {
        const hours = time.getHours();
        const minutes = time.getMinutes();
        return hours * 60 + minutes;
    }

    static compareDatetime = (firstDate, lastDate) => {
        return moment(firstDate).isAfter(lastDate);
    };
}
