import { FC } from 'react';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

interface ErrorProps {
    error: FetchBaseQueryError | SerializedError | undefined;
}

const GetError: FC<ErrorProps> = ({ error }) => {
    if (error) {
        if ('data' in error) {
            const errMsg = (error as { data: { message?: string } }).data?.message
            return (
                <span className="text-red-500 pb-3 font-poppins font-medium">{errMsg}</span>
            );
        } else {
            return null;
        }
    } else {
        return null;
    }
};

export default GetError;
