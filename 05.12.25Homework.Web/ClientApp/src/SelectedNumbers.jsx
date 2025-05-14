import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class SelectedNumbers extends React.Component {
    render() {
        const { selectedNumbers, onLockClick } = this.props;
        if (selectedNumbers.length > 0) {
            return <div className="row p-5 rounded col-md-6 col-md-offset-3">
                <h3>Selected Numbers </h3>
                <ul className="list-group">
                    {this.props.selectedNumbers.map(n => {
                        console.log(n.locked)
                        return <li className="list-group-item" key={n.id}>{n.num}
                            <button className="ms-5 btn btn-primary" onClick={() => onLockClick(n, n.locked)}>{n.locked ? 'Unlock' : 'Lock'}</button>
                        </li>
                    })}

                </ul>
            </div>
        }
    }
}

export default SelectedNumbers