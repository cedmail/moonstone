import * as React from 'react';

export type LayoutAppProps = {
    /**
     * Navigation of the application (for PrimaryNavigation)
     */
    navigation?: React.ReactNode;

    /**
     * Content of the application
     */
    content?: React.ReactNode;

    /**
     * Replace the content by a loader
     */
    isLoading?: boolean;
}
