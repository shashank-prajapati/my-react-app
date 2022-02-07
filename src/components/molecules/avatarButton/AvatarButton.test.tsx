import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AvatarButton from './AvatarButton';
import { Typography } from '@mui/material';


describe('Testing ImageAtom', ()=>{
    it('should match the default snapshot',()=>{
        const {container} = render(<AvatarButton/>,);
        expect(container).toMatchSnapshot();
    })
})

