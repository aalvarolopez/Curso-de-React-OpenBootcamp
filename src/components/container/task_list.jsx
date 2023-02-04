import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

// test
const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default desc', false, LEVELS.NORMAL);

    const changeState = () => {
        console.log('TODO: Change a task state')
    }

    return (
        <div>
            <h1>
                Your tasks: 
            </h1>
            {/* TODO: Use for/map to render a list of tasks */}
            <TaskComponent task={ defaultTask }></TaskComponent>
        </div>
    );
};

export default TaskListComponent;
