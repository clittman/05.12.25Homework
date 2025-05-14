import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class NumberRow extends React.Component {
    render() {
        const {num, selected, locked} = this.props.currentNumber
        return <tr>
            <td>{num}</td>
            <td>
                {selected && <button className='btn btn-danger' disabled={locked} onClick={this.props.onDeselectClick}>Remove from Selected</button>}
                {!selected && <button className='btn btn-primary' onClick={this.props.onSelectClick}>Add to Selected</button>}
            </td>
        </tr>
    }
}

export default NumberRow