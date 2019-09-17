import React from 'react';
import { Button, Dropdown } from 'semantic-ui-react'
const options = [
    { key: 'edit', text: 'Edit Detail', value: 'edit' },
    { key: 'delete', text: 'Remove Detail', value: 'delete' },
    { key: 'hide', text: 'Hide Detail', value: 'hide' },
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



