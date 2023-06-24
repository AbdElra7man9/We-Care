'use client';
import React, { FC, useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Filter: FC = () => {
    const [rangeValues, setRangeValues] = useState<number[]>([20, 80]);

    const handleRangeChange = (values: number | number[]) => {
        if (Array.isArray(values)) {
            setRangeValues(values);
        }
    };

    return (
        <div>
            <p>Filter By</p>
            <div className="px-5">
                <div>
                    <label className="text-sm text-gray-500 font-medium text-start my-3">Specialication</label>
                    <select
                        name="Specialication"
                        className="inputfield w-full px-5"
                    >
                        <option>Eye</option>
                    </select>
                </div>
                <label className="text-sm text-gray-500 font-medium text-start my-3">Fees</label>
                <Slider
                    min={0}
                    max={100}
                    step={1}
                    range
                    value={rangeValues}
                    onChange={handleRangeChange}
                />
            </div>
        </div>
    );
};

export default Filter;

