import {render, screen} from "@testing-library/react";
import Auth from "src/screens/Auth/Auth";
import React from "react";
import {userEvent} from "@testing-library/user-event";
import {TokenProvider} from "src/TokenProvider";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import {ProtectedRoute} from "src/navigation/ProtectedRoute";
import '@testing-library/jest-dom';

describe("Auth", () => {

    it('should be navigate back to location from state', async () => {
        const user = userEvent.setup()
        render(
            <TokenProvider>
                <MemoryRouter initialEntries={['/entry']}>
                    <Routes>
                        <Route path={'/auth'} element={<Auth/>}/>
                        <Route path={'/*'} element={<ProtectedRoute>
                            <div>Entry Point</div>
                        </ProtectedRoute>}/>
                    </Routes>

                </MemoryRouter>
            </TokenProvider>
        )
        await user.click(screen.getByText('Вход'))

        expect(await screen.findByText('Entry Point')).toBeInTheDocument()
    })
})