// 定义时间工具类
class TimeUtils {
    /**
     * 转换某个时间距离当前时间的间隔
     * @param dateStrOrDate 时间字符串或 Date 对象
     * @param includeTime 是否包含具体时间（默认为 false）
     * @returns 转换后的时间描述
     */
    convertTime(dateStrOrDate: string | Date, includeTime = false): string {
        const now = new Date().getTime();
        const date = new Date(dateStrOrDate).getTime();
        const diff = now - date;

        if (diff > 6912e5) {
            // 超过 8 天，返回具体日期时间
            return this.formatDate(date, includeTime);
        } else if (diff >= 864e5) {
            // 天数
            return Math.floor(diff / (1e3 * 60 * 60 * 24)) + '天前';
        } else if (diff >= 36e5) {
            // 小时数
            return Math.floor(diff / (1e3 * 60 * 60)) + '小时前';
        } else if (diff >= 12e4) {
            // 分钟数
            return Math.floor(diff / (1e3 * 60)) + '分钟前';
        } else if (diff < 0) {
            // 未来时间
            return '未来';
        } else {
            // 刚刚
            return '刚刚';
        }
    }

    /**
     * 格式化日期
     * @param date 日期时间戳
     * @param includeTime 是否包含具体时间
     * @returns 格式化后的日期字符串
     */
    formatDate(date: number, includeTime = false): string {
        const d = new Date(date);
        const year = this.digit(d.getFullYear(), 4);
        const month = this.digit(d.getMonth() + 1, 2);
        const day = this.digit(d.getDate(), 2);
        let time = '';
        if (includeTime) {
            const hours = this.digit(d.getHours(), 2);
            const minutes = this.digit(d.getMinutes(), 2);
            const seconds = this.digit(d.getSeconds(), 2);
            time = `${hours}:${minutes}:${seconds}`;
        }
        return `${year}-${month}-${day} ${time}`;
    }

    /**
     * 格式化数字，补零
     * @param num 数字
     * @param size 期望的位数
     * @returns 格式化后的字符串
     */
    digit(num: number, size: number): string {
        let s = num + '';
        while (s.length < size) s = '0' + s;
        return s;
    }
}

export const timeUtils = new TimeUtils();
