import React from 'react';
import Goal from './Goal';

class Goals extends React.Component {

    render() {
        return (
            <div>
                <h2> Your Goals </h2>
                {this.props.goals.length === 0 && <p> Please Add a Goal </p> }
                {
                    this.props.goals.map((goalObj, index) => (
                        <Goal
                            key={goalObj.id}
                            {...goalObj}
                            count={index + 1}
                            handleDeleteGoal={this.props.handleDeleteGoal}
                            handleSubmit={this.props.handleSubmit}
                            handleSelectGoal={this.props.handleSelectGoal}
                        />
                    ))
                }
            </div>
        )
    }
}

export default Goals;