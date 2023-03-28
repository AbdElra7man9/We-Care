export const handleChange = ({
    currentTarget: input,
    setInputs,
    inputs,
}: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setInputs({ ...inputs, [input.name]: input.value });
};
