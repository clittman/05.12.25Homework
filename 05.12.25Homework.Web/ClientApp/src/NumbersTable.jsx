import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';
import NumberRow from './NumberRow';
import SelectedNumbers from './SelectedNumbers';

class NumbersTable extends React.Component {
    state = {
        allNumbers: [],
        selectedNumbers: [],
        lockedNumbers: []
    }

    generateNumber = () => {
        return Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
    }

    onAddClick = () => {
        const copy = [...this.state.allNumbers, { num: this.generateNumber(), id: uuidv4(), selected: false, locked: false }];
        this.setState({ allNumbers: copy });
    }

    onSelectClick = (n, isSelected) => {
        const selectedCopy = isSelected ? [...this.state.selectedNumbers.filter(num => num.id != n.id)] : [...this.state.selectedNumbers, { ...n, selected: true }];
        const allCopy = [...this.state.allNumbers.filter(num => num.id != n.id), { ...n, selected: !isSelected }];
        this.setState({ selectedNumbers: selectedCopy });
        this.setState({ allNumbers: allCopy })
    }

    onLockClick = (n, isLocked) => {
        const updatedNum = { ...n, locked: !isLocked }
        const selectedCopy = this.state.selectedNumbers.map(num => num.id === n.id ? updatedNum : num)
        const allCopy = this.state.allNumbers.map(num => num.id === n.id ? updatedNum : num)
        this.setState({ selectedNumbers: selectedCopy });
        this.setState({ allNumbers: allCopy })
    }

    render() {
        return <div className='container'>
            <div className='row col-md-12'>
                <button className='btn btn-success btn-lg w-100' onClick={this.onAddClick}>Add Numbers</button>
                <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Add/Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.allNumbers.map(n => {
                            return <NumberRow
                                key={n.id}
                                currentNumber={n}
                                onSelectClick={() => this.onSelectClick(n, false)}
                                onDeselectClick={() => this.onSelectClick(n, true)}
                            />
                        })}
                    </tbody>
                </table>
                <SelectedNumbers selectedNumbers={this.state.selectedNumbers} onLockClick={this.onLockClick} />
            </div>
        </div>
    }
}

export default NumbersTable