import React from 'react';
import NewUser from '../NewUser';

import { fireEvent, render } from 'react-native-testing-library';

describe('Test Lists', () => {
  test('changeText', () => {
    const { getByTestId, getByPlaceholder, queryByDisplayValue } = render(
      <NewUser />)

    const output = getByTestId('subText')
    const input = getByPlaceholder(/Input Text/i)
    expect(input).not.toBeNull()
    expect(queryByDisplayValue('Default text')).not.toBeNull()

    const testText = 'Changed text'
    fireEvent(input, 'onChangeText', testText)

    expect(queryByDisplayValue('Default text')).toBeNull()
    expect(output.props.children).toBe(testText)
  })
})