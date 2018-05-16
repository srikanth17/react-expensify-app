import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render expense summary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render expense summary with multiple expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={13} expensesTotal={235534566}/>);
    expect(wrapper).toMatchSnapshot();
});