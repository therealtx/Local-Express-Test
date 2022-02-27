import React from "react";
import { Switch, Input, Select, Button } from 'antd';
import type { IDetail } from "./types";
import styles from "./index.module.scss";

const { Option } = Select;

interface IProps {
  item: IDetail;
  index: number;
  onRemove: (index: number) => void;
  isDraggable: boolean
}

const GroupDetailRow = (props: IProps): JSX.Element => {
  const { onRemove, item } = props;
  return (
    <div className={styles.groupDetailRow}>

      <div className={styles.groupDetailRowInner}>
        <div>
          <label>Group name {item.id}</label>
          <Input placeholder="Toast it" defaultValue={item.groupName}/>
        </div>
        <div>
          <label>Item Choice</label>
          <div>
            <Select defaultValue={item.itemChoice}>
              <Option value={item.itemChoice}>{item.itemChoice}</Option>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
        </div>
        <div>
          <label>
            Show images
          </label>
          <Switch defaultChecked={item.showImages}/>
        </div>
        <div>
          <label>
            Visible if other
            items selected
          </label>
          <Switch defaultChecked={item.visibleSelected}/>
        </div>
        <div>
          <label>Item Choice</label>
          <div>
            <Select defaultValue={item.operation}>
              <Option value={item.operation}>{item.operation}</Option>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
        </div>
        <div>
          <label>Item Choice</label>
          <div>
            <Select defaultValue={item.category}>
              <Option value={item.category}>{item.category}</Option>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
        </div>
      </div>

      <div className={styles.removeButtonWrapper}>
        <Button onClick={() => onRemove(item.id)}>Remove</Button>
      </div>
    </div>
  )
}

export default GroupDetailRow;
