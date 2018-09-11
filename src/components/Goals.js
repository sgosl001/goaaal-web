import React from 'react';
import Goal from './Goal';

class Goals extends React.Component {

    render() {
        return (
            <div>
                <div className="goals-container">
                    {this.props.goals.length === 0 && <p className="empty-goals"> Please Add a Goal </p> }
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
            </div>
        )
    }
}

export default Goals;