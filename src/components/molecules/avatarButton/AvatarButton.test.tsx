import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AvatarButton from './AvatarButton';
import { Typography } from '@mui/material';


describe('Testing ImageAtom', ()=>{
    it('should match the default snapshot',()=>{
        const {container} = render(<AvatarButton isAuthenticated={true}/>,);
        expect(container).toMatchSnapshot();
    })
    it('should match the Avatar with initial Snapshot',()=>{
        const {container} = render(<AvatarButton isAuthenticated={true} userName='Shashank'/>,);
        expect(container).toMatchSnapshot();
    })
})

