import {render, screen} from "@testing-library/react";
import {ProtectedRoute} from "src/navigation/ProtectedRoute";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {TokenProvider} from "src/TokenProvider";

const TestData = () => <TokenProvider>
    <MemoryRouter initialEntries={['/other']}>
        <Routes>
            <Route path={'/auth'} element={<div>Authentication</div>}/>
            <Route path={'*'} element={
                <ProtectedRoute>
                    <div>Protected</div>
                </ProtectedRoute>
            }/>
        </Routes>
    </MemoryRouter>
</TokenProvider>

describe('ProtectedRoute', () => {
    afterEach(() => {
        localStorage.clear()
    })

    it('should render to protected route', () => {
        localStorage.setItem('token', '1')
        render(<TestData/>)
        screen.getByText('Protected')
    })

    it('should render authentication data', () => {
        render(<TestData/>)
        expect(screen.findByText('Authentication')).toBeTruthy()
    })
});


