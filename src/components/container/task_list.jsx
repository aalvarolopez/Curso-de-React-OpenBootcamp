import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';

// test
const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default desc', false, LEVELS.NORMAL);

    // State of the component
    const [tasks, setTasks] = useState([defaultTask]);

    // cycle of life control
    useEffect(() => {
        console.log('Task state has been modified')
        return () => {
            console.log('TaskList component is going to unmount...')
        };
    }, [tasks]);

    const changeCompleted = () => {
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
