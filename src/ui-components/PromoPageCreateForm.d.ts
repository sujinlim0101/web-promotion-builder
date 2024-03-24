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
export declare type PromoPageCreateFormInputValues = {
    info?: string;
};
export declare type PromoPageCreateFormValidationValues = {
    info?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PromoPageCreateFormOverridesProps = {
    PromoPageCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    info?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type PromoPageCreateFormProps = React.PropsWithChildren<{
    overrides?: PromoPageCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PromoPageCreateFormInputValues) => PromoPageCreateFormInputValues;
    onSuccess?: (fields: PromoPageCreateFormInputValues) => void;
    onError?: (fields: PromoPageCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PromoPageCreateFormInputValues) => PromoPageCreateFormInputValues;
    onValidate?: PromoPageCreateFormValidationValues;
} & React.CSSProperties>;
export default function PromoPageCreateForm(props: PromoPageCreateFormProps): React.ReactElement;
