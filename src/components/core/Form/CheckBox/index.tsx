import React from "react";
import {Checkbox} from "antd";
import styles from "./index.module.scss";


interface ICheckboxProps {
  onChange: (ev: any) => void,
  checked: boolean;
  className?: string
}

const CheckBox = (props: ICheckboxProps): React.ReactElement => {
  return (
    <Checkbox {...props} className={`${styles.checkbox} ${props.className || ''}`}>Checkbox</Checkbox>
  );
};

export default CheckBox;
