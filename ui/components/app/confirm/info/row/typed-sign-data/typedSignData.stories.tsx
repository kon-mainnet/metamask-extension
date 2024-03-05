import React from 'react';

import { unapprovedTypedSignMsg } from '../../../../../../../test/data/confirmations/typed_sign';
import { ConfirmInfoRow, ConfirmInfoRowVariant } from '../row';
import { ConfirmInfoRowTypedSignData } from './typedSignData';

const ConfirmInfoRowTypedSignDataStory = {
  title: 'Components/App/Confirm/InfoRowTypedSignData',

  component: ConfirmInfoRowTypedSignData,
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(ConfirmInfoRowVariant),
    },
    label: {
      control: 'text',
    },
  },
};

export const DefaultStory = ({ variant, data }) => (
  <ConfirmInfoRow label="Message" variant={variant}>
    <ConfirmInfoRowTypedSignData data={data} />
  </ConfirmInfoRow>
);

DefaultStory.storyName = 'Default';

DefaultStory.args = {
  data: unapprovedTypedSignMsg.msgParams.data,
};

export default ConfirmInfoRowTypedSignDataStory;
