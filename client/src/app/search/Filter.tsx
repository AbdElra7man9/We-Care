'use client';
import React, { FC, useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useDispatch } from 'react-redux';
import { FeatureAction } from '@Redux/Slices/FeaturesSlice';
import Select from 'react-select';
import specializations from '@Data/specializations.json'

const Filter: FC = () => {
    const [rangeValues, setRangeValues] = useState<number[]>([0, 1000]);
    const dispatch = useDispatch();
    const handleRangeChange = (values: number | number[]) => {
        if (Array.isArray(values)) {
            setRangeValues(values);
            dispatch(FeatureAction.setRangeValues(rangeValues))
        }
    };
    const GenderOptions = [
        { value: '', label: 'All Genders' },
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
    ];
    const SpecializationOptions = specializations.map(spec => ({
        value: spec.id,
        label: spec.specialization
    }));
    const GovernmentOptions = [
        { value: '', label: 'All options' },
        { value: 'Gynecologist', label: 'Gynecologist' },
        { value: 'female', label: 'Female' },
    ];
    const CityOption = [
        { value: '', label: 'All options' },
        { value: 'Gynecologist', label: 'Gynecologist' },
        { value: 'female', label: 'Female' },
    ];
    return (
        <div>
            <p>Filter By</p>
            <div className="px-5 flex flex-col gap-4">
                <label className="text-sm text-gray-500 font-medium text-start my-3">Fees</label>
                <Slider
                    min={0}
                    max={100}
                    step={1}
                    range
                    value={rangeValues}
                    onChange={handleRangeChange}
                />
                <div>
                    <label className="text-sm text-gray-500 font-medium text-start my-3">Gender</label>
                    <Select options={GenderOptions} onChange={(data) => dispatch(FeatureAction.setGender(data?.value))} />
                </div>
                <div>
                    <label className="text-sm text-gray-500 font-medium text-start my-3">Specialization</label>
                    <Select options={SpecializationOptions} onChange={(data) => dispatch(FeatureAction.setSpecialization(data?.label))} />
                </div>
                <div>
                    <label className="text-sm text-gray-500 font-medium text-start my-3">Government</label>
                    <Select options={GovernmentOptions} onChange={(data) => dispatch(FeatureAction.setGovernmant(data?.value))} />
                </div>
                <div>
                    <label className="text-sm text-gray-500 font-medium text-start my-3">City</label>
                    <Select options={CityOption} onChange={(data) => dispatch(FeatureAction.setCity(data?.value))} />
                </div>
            </div>
        </div>
    );
};

export default Filter;

