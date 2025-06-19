export type AlertType = {
    text: string,
    level?: AlertLevel,
    duration?: AlertDuration,
}

export type AlertLevel = 'success' | 'warning' | 'error' | 'info';
export type AlertDuration = 3000 | 5000 | 8000