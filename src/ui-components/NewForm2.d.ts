/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NewForm2InputValues = {
    info?: string;
};
export declare type NewForm2ValidationValues = {
    info?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewForm2OverridesProps = {
    NewForm2Grid?: PrimitiveOverrideProps<GridProps>;
    info?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type NewForm2Props = React.PropsWithChildren<{
    overrides?: NewForm2OverridesProps | undefined | null;
} & {
    id?: string;
    promoPage?: any;
    onSubmit?: (fields: NewForm2InputValues) => NewForm2InputValues;
    onSuccess?: (fields: NewForm2InputValues) => void;
    onError?: (fields: NewForm2InputValues, errorMessage: string) => void;
    onChange?: (fields: NewForm2InputValues) => NewForm2InputValues;
    onValidate?: NewForm2ValidationValues;
} & React.CSSProperties>;
export default function NewForm2(props: NewForm2Props): React.ReactElement;
