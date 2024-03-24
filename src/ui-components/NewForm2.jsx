/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextAreaField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { getPromoPage } from "../graphql/queries";
import { updatePromoPage } from "../graphql/mutations";
export default function NewForm2(props) {
  const {
    id: idProp,
    promoPage: promoPageModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    info: "",
  };
  const [info, setInfo] = React.useState(initialValues.info);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = promoPageRecord
      ? { ...initialValues, ...promoPageRecord }
      : initialValues;
    setInfo(
      typeof cleanValues.info === "string" || cleanValues.info === null
        ? cleanValues.info
        : JSON.stringify(cleanValues.info)
    );
    setErrors({});
  };
  const [promoPageRecord, setPromoPageRecord] =
    React.useState(promoPageModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getPromoPage.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getPromoPage
        : promoPageModelProp;
      setPromoPageRecord(record);
    };
    queryData();
  }, [idProp, promoPageModelProp]);
  React.useEffect(resetStateValues, [promoPageRecord]);
  const validations = {
    info: [{ type: "Required" }, { type: "JSON" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          info,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updatePromoPage.replaceAll("__typename", ""),
            variables: {
              input: {
                id: promoPageRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "NewForm2")}
      {...rest}
    >
      <TextAreaField
        label="Info"
        isRequired={true}
        isReadOnly={false}
        value={info}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              info: value,
            };
            const result = onChange(modelFields);
            value = result?.info ?? value;
          }
          if (errors.info?.hasError) {
            runValidationTasks("info", value);
          }
          setInfo(value);
        }}
        onBlur={() => runValidationTasks("info", info)}
        errorMessage={errors.info?.errorMessage}
        hasError={errors.info?.hasError}
        {...getOverrideProps(overrides, "info")}
      ></TextAreaField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || promoPageModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || promoPageModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
