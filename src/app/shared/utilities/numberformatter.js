import { Component } from 'react';

export class NumberFormatter extends Component {
    render() {

        let isnumber = this.props.IsNumber;
        let num = this.props.Number;

        if (num == null) {
            num = 0;
        }

        if (isnumber === false) {
            if (num >= 10000000) {
                return (num / 10000000).toFixed(1).replace(/\.0$/, '') + 'Cr';
            }
            if (num >= 100000) {
                return (num / 100000).toFixed(1).replace(/\.0$/, '') + 'L';
            }
            if (num >= 1000) {
                return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
            }
        }

        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
        }
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return num;
    }
}