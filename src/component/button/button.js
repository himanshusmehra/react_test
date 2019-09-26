import React from 'react';
import { Button, Dropdown } from 'semantic-ui-react'
const options = [
    { key: 'edit', text: 'Edit Details', value: 'edit' },
    { key: 'delete', text: 'Remove Details', value: 'delete' },
    { key: 'hide', text: 'Hide Details', value: 'hide' },
]
function DetailButton() {
    return (
        <Button.Group className="action-btn" color='blue'>
            <Button>View Detail</Button>
            <Dropdown
                className='button icon'
                floating
                options={options}
                trigger={<React.Fragment />}
            />
        </Button.Group>
    );
}

export default DetailButton;



