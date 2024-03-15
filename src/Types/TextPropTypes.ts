type StyledTextProps ={
    variant?: "title" | "p";
    color?: string;
    size?: string;
    weight?: string;
    align?: string;
    children: React.ReactNode|string,
    textTransform?: string;
}

export default StyledTextProps;