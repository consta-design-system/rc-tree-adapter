import './RcTreeCustomControls.css';

import { Button } from '@consta/uikit/Button';
import { IconEye } from '@consta/uikit/IconEye';
import { IconEyeClose } from '@consta/uikit/IconEyeClose';
import { IconMeatball } from '@consta/uikit/IconMeatball';
import { IconSettings } from '@consta/uikit/IconSettings';
import { Text } from '@consta/uikit/Text';
import { useFlag } from '@consta/uikit/useFlag';
import Tree, { TreeNode } from 'rc-tree';
import React, { useState } from 'react';

import {
  data,
  Node as NodeType,
} from '##/adapters/rcTreeAdapter/__mocks__/data.mock';
import { cn } from '##/utils/bem';

import { cnRcTree } from '../../../../RcTree/RcTree';

const changeVisisble = (key: string, nodes: NodeType[]): NodeType[] => {
  return nodes.map((node) => {
    if (node.key === key) {
      node.visible = !(typeof node.visible === 'undefined'
        ? true
        : node.visible);
    } else if (node.children) {
      node.children = changeVisisble(key, node.children);
    }
    return node;
  });
};

const cnRcTreeCustomControls = cn('RcTreeCustomControls');

const CustomLabel = (props: {
  title: string;
  treeKey: string;
  handleClick: (key: string) => void;
  visible?: boolean;
}) => {
  const { title, treeKey, handleClick, visible = true } = props;
  const [hovered, setHovered] = useFlag();
  return (
    <div
      className={cnRcTreeCustomControls('Content')}
      onMouseEnter={setHovered.on}
      onMouseLeave={setHovered.off}
    >
      <Text className={cnRcTreeCustomControls('Title')} size="xs">
        {title}
      </Text>
      {hovered && (
        <div className={cnRcTreeCustomControls('Controls')}>
          <Button onlyIcon iconLeft={IconSettings} size="xs" view="clear" />
          <Button
            onlyIcon
            onClick={() => handleClick(treeKey)}
            size="xs"
            view="clear"
            iconLeft={visible ? IconEye : IconEyeClose}
          />
          <Button onlyIcon iconLeft={IconMeatball} size="xs" view="clear" />
        </div>
      )}
    </div>
  );
};

const customNode = (
  params: NodeType & { handleClick: (key: string) => void },
) => {
  const {
    title,
    key,
    visible = true,
    children,
    disableCheckbox,
    handleClick,
  } = params;
  return (
    <TreeNode
      key={key}
      title={
        <CustomLabel
          treeKey={key}
          title={title}
          handleClick={handleClick}
          visible={visible}
        />
      }
      disableCheckbox={disableCheckbox || !visible}
    >
      {children &&
        visible &&
        children.map((node) => customNode({ handleClick, ...node }))}
    </TreeNode>
  );
};

export const RcTreeCustomControls = () => {
  const prefix = cnRcTree({ size: 'm' }, ['RcTreeCustomControls']);
  const [nodes, setNodes] = useState<NodeType[]>(data);

  const handleClick = (key: string) => {
    setNodes(changeVisisble(key, nodes));
  };

  return (
    <Tree prefixCls={prefix} showLine checkable defaultExpandAll>
      {nodes.map((node) => customNode({ handleClick, ...node }))}
    </Tree>
  );
};
