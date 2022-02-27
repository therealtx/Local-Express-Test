import React, { useCallback, useState } from "react";
import { Button } from "antd";
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from 'react-sortable-hoc';
import { arrayMoveImmutable } from 'array-move';

import CheckBox from "../../components/core/Form/CheckBox";
import GroupDetailRow from "../../components/GroupDetailRow";
import type { IDetail } from "../../components/GroupDetailRow/types";
import styles from './index.module.scss';

const detailInitialValues: IDetail = {
  id: 1,
  groupName: "Group name",
  itemChoice: "Multiple Items",
  showImages: false,
  visibleSelected: true,
  operation: "AND",
  category: "Bread/Rye"
};

const DragHandle = SortableHandle(() => <span>::</span>);

const SortableItem = SortableElement(({ children, isDraggable }: any) => (
  <div style={{
    display: "flex",
  }}>
    {isDraggable && <div style={{ padding: 20, fontSize: 20 }}><DragHandle/></div>}
    {children}
  </div>
));

const Container = SortableContainer(({ children }: any) => {
  return <div>{children}</div>;
});


export default function Home() {
  const [isSortableMode, setIsSortableMode] = useState(false);
  const [detailsArr, setDetailsArr] = useState<IDetail[]>([detailInitialValues]);

  const handleAddVariable = () => {
    const idMax = detailsArr.reduce((cur, next) => {
      return next.id > cur ? next.id : cur;
    }, 1);
    setDetailsArr([
      ...detailsArr,
      {
        ...detailInitialValues,
        id: idMax + 1
      }
    ]);
  };

  const handleRemove = useCallback((id) => {
    setDetailsArr(detailsArr.filter(item => item.id !== id));
  }, [detailsArr]);

  const onSortEnd = ({ oldIndex, newIndex }: any) => {
    setDetailsArr([...arrayMoveImmutable(detailsArr, oldIndex, newIndex)]);
  };

  return (
    <div className={styles.home}>
      <div className={styles.title}>
        <Button onClick={() => setIsSortableMode(!isSortableMode)} size="small" danger={isSortableMode} style={{marginRight: 10}}>
          :::
        </Button>
        Group Details
      </div>
      <div className={styles.details}>
        <Container onSortEnd={onSortEnd} useDragHandle>
          {detailsArr.map((item, index) => (
            <SortableItem key={index} index={index} isDraggable={isSortableMode}>
              <GroupDetailRow
                index={index}
                item={item}
                onRemove={handleRemove}
                isDraggable={isSortableMode}
              />
            </SortableItem>
          ))}
        </Container>
        <div>
          <Button onClick={handleAddVariable}>
            Add Variable
          </Button>
        </div>
      </div>
    </div>
  )
}
