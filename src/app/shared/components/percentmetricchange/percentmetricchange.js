import React, { Component } from 'react';
import GrowthChange from './growthchange';  

import GrowthIcon from '../../../../assets/images/icons/growthIcon';
import DeGrowthIcon from '../../../../assets/images/icons/degrowthIcon';

export default class PercentMetricChange extends Component {
    render() {

        let previous = parseFloat(this.props.PreviousValue);
        let current = parseFloat(this.props.CurrentValue);
        let standard = this.props.IsStandard;

       

        let result = ((current - previous) / previous) * 100;
        
        let icon = <GrowthIcon className={"icz-icon"} />;
        let classstatus = 'positive';

        if (standard === true) {
            if (result > 0) {
                icon = <GrowthIcon className={"icz-icon"} />;
                classstatus = 'positive';
            } else if (result === 0) {
                icon = <GrowthIcon className={"icz-icon"} />;
                classstatus = 'neutral';
            } else {
                icon = <DeGrowthIcon className={"icz-icon"} />;
                classstatus = 'negative';
            }

        } else {
            if (result < 0) {
                icon = <DeGrowthIcon className={"icz-icon"} />;
                classstatus = 'negative';
            } else if (result === 0) {
                icon = <DeGrowthIcon className={"icz-icon"} />;
                classstatus = 'neutral';
            } else {
                icon = <GrowthIcon className={"icz-icon"} />;
                classstatus = 'positive';
            }
        };

        if (previous != "") {
            result = 0;   
        }

        return (
            <GrowthChange Icon={icon} Result={Math.abs(result).toFixed(2)} Class={classstatus} />
        )
    }
}