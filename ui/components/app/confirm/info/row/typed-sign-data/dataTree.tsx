import React from 'react';

import { isValidHexAddress } from '../../../../../../../shared/modules/hexstring-utils';
import { sanitizeString } from '../../../../../../helpers/utils/util';

import { ConfirmInfoRow, ConfirmInfoRowAddress, ConfirmInfoRowText } from '../';
import { Box } from '../../../../../component-library';

type TreeData = {
  value: string | Record<string, TreeData>;
  type: string;
};

export const DataTree = ({ data }: { data: Record<string, TreeData> }) => {
  console.log('-----', JSON.stringify(data));
  return (
  <Box marginLeft={2}>
    {Object.entries(data).map(([label, { value, type }], i) => {
      if (typeof value === 'object' && value !== null) {
        return <DataTree data={value} />;
      }
      return (
        <ConfirmInfoRow
          label={sanitizeString(label.charAt(0).toUpperCase() + label.slice(1))}
        >
          {type === 'address' &&
          isValidHexAddress(value, {
            mixedCaseUseChecksum: true,
          }) ? (
            <ConfirmInfoRowAddress address={value} />
          ) : (
            <ConfirmInfoRowText text={value} />
          )}
        </ConfirmInfoRow>
      );
    })}
  </Box>
);
}