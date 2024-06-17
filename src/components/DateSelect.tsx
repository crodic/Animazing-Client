/* eslint-disable no-unused-vars */
'use client';
import { useDateSelect } from 'react-ymd-date-select';

interface DateSelectProps {
    onChange: (value: string) => void;
    value: string;
}
function DateSelect(props: DateSelectProps) {
    const dateSelect = useDateSelect(props.value, props.onChange, {
        firstYear: 1900,
    });

    return (
        <section className="flex gap-2">
            <select
                value={dateSelect.yearValue}
                onChange={dateSelect.onYearChange}
                className="rounded-md border border-border bg-muted/40 px-4 py-2"
            >
                <option value="" disabled>
                    Năm
                </option>
                {dateSelect.yearOptions.map((yearOption) => (
                    <option key={yearOption.value} value={yearOption.value}>
                        {yearOption.label}
                    </option>
                ))}
            </select>

            <select
                value={dateSelect.monthValue}
                onChange={dateSelect.onMonthChange}
                className="rounded-md border border-border bg-muted/40 px-4 py-2"
            >
                <option value="" disabled>
                    Tháng
                </option>
                {dateSelect.monthOptions.map((monthOption) => (
                    <option key={monthOption.value} value={monthOption.value}>
                        {monthOption.label}
                    </option>
                ))}
            </select>

            <select
                value={dateSelect.dayValue}
                onChange={dateSelect.onDayChange}
                className="rounded-md border border-border bg-muted/40 px-4 py-2"
            >
                <option value="" disabled>
                    Ngày
                </option>
                {dateSelect.dayOptions.map((dayOption) => (
                    <option key={dayOption.value} value={dayOption.value}>
                        {dayOption.label}
                    </option>
                ))}
            </select>
        </section>
    );
}

export default DateSelect;
