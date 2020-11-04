import {useEffect, useRef} from 'react';

export const useEnterExitCallbacks = (
    isDisplayed: boolean,
    onExiting: () => {},
    onExited: () => {},
    onEntering: () => {},
    onEntered: () => {}
) => {
    const previousIsDisplayed = useRef(null);
    useEffect(() => {
        if (typeof previousIsDisplayed.current !== 'undefined') {
            if (!isDisplayed && previousIsDisplayed.current) {
                if (onExiting) {
                    onExiting();
                }

                if (onExited) {
                    onExited();
                }
            }

            if (isDisplayed && !previousIsDisplayed.current) {
                if (onEntering) {
                    onEntering();
                }

                if (onEntered) {
                    onEntered();
                }
            }
        }

        previousIsDisplayed.current = isDisplayed;
    }, [isDisplayed, onEntered, onEntering, onExited, onExiting, previousIsDisplayed]);
};